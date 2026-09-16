/* Folder catalog v2: path resolver used by the app's lazy package loader. */
(function(){
  'use strict';
  const REPO='randirosandi-glitch/latihanhsk';
  const BRANCH='refactor/dynamic-folder-catalog';
  const ROOT='https://api.github.com/repos/'+REPO+'/contents/data';
  const state=window.__folderCatalogV2={groups:[],byCode:new Map(),ready:false,error:null};
  async function api(url){const r=await fetch(url,{cache:'no-store',headers:{Accept:'application/vnd.github+json'}});if(!r.ok)throw new Error('Catalog '+r.status);return r.json()}
  function codeOf(name){return String(name).replace(/\.json$/i,'')}
  function classify(name){const m=String(name).match(/^HSK\s*(\d+)$/i);if(m)return{kind:'hsk',level:Number(m[1])};if(/^Workbook\b/i.test(name))return{kind:'workbook',level:null};return{kind:'custom',level:null}}
  function sort(a,b){return String(a).localeCompare(String(b),undefined,{numeric:true,sensitivity:'base'})}
  async function discover(){
    const root=await api(ROOT+'?ref='+encodeURIComponent(BRANCH));
    const groups=[];state.byCode.clear();
    for(const dir of (root||[]).filter(x=>x.type==='dir')){
      const items=await api(dir.url+'?ref='+encodeURIComponent(BRANCH));
      const files=(items||[]).filter(x=>x.type==='file'&&/\.json$/i.test(x.name)&&x.name!=='manifest.json'&&x.name!=='reading-passages.json');
      if(!files.length)continue;
      const meta=classify(dir.name);const g={name:dir.name,path:dir.path,kind:meta.kind,level:meta.level,codes:files.map(f=>codeOf(f.name)).sort(sort),files:{}};
      files.forEach(f=>{const c=codeOf(f.name);g.files[c]=f.path;state.byCode.set(c,g.files[c])});groups.push(g);
    }
    groups.sort((a,b)=>{const ak=a.kind==='hsk'?0:a.kind==='workbook'?1:2,bk=b.kind==='hsk'?0:b.kind==='workbook'?1:2;if(ak!==bk)return ak-bk;if(a.level!=null&&b.level!=null)return a.level-b.level;return sort(a.name,b.name)});return groups;
  }
  window.__loadFolderCatalogV2=async function(){try{const g=await discover();state.groups=g;state.ready=true;state.error=null;window.__hskDynamicGroups=g;window.__hskDynamicPathForCode=c=>state.byCode.get(String(c||''))||null;document.dispatchEvent(new Event('hsk:folder-catalog-v2-ready'));return g}catch(e){state.error=e;state.ready=false;console.warn('Folder catalog v2 failed',e);return[]}};
})();
