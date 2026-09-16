/* Folder-aware package loader integration. */
(function(){
  'use strict';
  window.__hskFolderPath=async function(code){
    code=String(code||'');
    if(!code)return '';
    if(!window.__folderCatalogV2?.ready){
      await window.__loadFolderCatalogV2?.();
    }
    return window.__folderCatalogV2?.byCode?.get(code)||'';
  };
})();
