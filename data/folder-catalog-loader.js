/* Dynamic HSK data-folder catalog bootstrap. */
(function(){
  'use strict';
  const REPO='randirosandi-glitch/latihanhsk';
  const BRANCH='refactor/dynamic-folder-catalog';
  const ROOT='https://api.github.com/repos/'+REPO+'/contents/data';
  const state=window.__folderCatalog={groups:[],byCode:new Map(),ready:false,error:null};
  async function api(url){const r=await fetch(url,{cache:'no-store',headers:{Accept:'application/vnd.github+json'}});if(!r.ok)throw new Error('Catalog '+r.status);return r.json()}
  const codeOf=n=>String(n).replace(/\.json$/i,'');
  const classify=n=>{const m=String(n).match(/^HSK\s*(\d+)$/i);if(m)return{kind:'hsk',level:Number(m[1])};if(/^Workbook\b/i.test(n))return{kind:'workbook',level:null};return{kind:'custom',level:null}};
  const sortCodes=(a,b)=>String(a).localeCompare(String(b),undefined,{numeric:true,sensitivity:'base'});
  async function discover(){
    const root=await api(ROOT+'?ref='+encodeURIComponent(BRANCH));
    const groups=[];state.byCode.clear();
    for(const dir of (root||[]).filter(x=>x.type==='dir')){
      const items=await api(dir.url+'?ref='+encodeURIComponent(BRANCH));
      const files=(items||[]).filter(x=>x.type==='file'&&/\.json$/i.test(x.name)&&x.name!=='manifest.json'&&x.name!=='reading-passages.json');
      if(!files.length)continue;
      const meta=classify(dir.name),g={name:dir.name,path:dir.path,kind:meta.kind,level:meta.level,codes:files.map(f=>codeOf(f.name)).sort(sortCodes),files:{}};
      files.forEach(f=>{const c=codeOf(f.name);g.files[c]=f.path;state.byCode.set(c,f.path)});groups.push(g);
    }
    groups.sort((a,b)=>{const ak=a.kind==='hsk'?0:a.kind==='workbook'?1:2,bk=b.kind==='hsk'?0:b.kind==='workbook'?1:2;if(ak!==bk)return ak-bk;if(a.level!=null&&b.level!=null)return a.level-b.level;return sortCodes(a.name,b.name)});
    return groups;
  }
  window.__loadFolderCatalog=async function(){try{const g=await discover();state.groups=g;state.ready=true;state.error=null;window.__hskDynamicGroups=g;window.__hskDynamicPathForCode=c=>state.byCode.get(String(c||''))||null;window.__hskDynamicGroupsForUI=()=>state.groups.slice();document.dispatchEvent(new Event('hsk:folder-catalog-ready'));return g}catch(e){state.error=e;state.ready=false;console.warn('Dynamic folder catalog failed',e);return[]}};
})();
