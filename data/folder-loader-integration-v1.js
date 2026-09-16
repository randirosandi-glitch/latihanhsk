/* Folder-aware package loader integration.
 * This file provides the final path resolver contract used by index.html.
 */
(function(){
  'use strict';
  const V=window.__folderCatalogV2;
  if(!V)return;
  window.__hskFolderPath=async function(code){
    code=String(code||'');
    if(!code)return '';
    if(!V.ready){
      await window.__loadFolderCatalogV2?.();
    }
    return V.byCode.get(code)||'';
  };
})();
