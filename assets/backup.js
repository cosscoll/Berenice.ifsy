/**
 * Sauvegarde locale : import explicite, contrôlé, uniquement pour les clés IFSI.
 * Ne lit ni n'envoie aucune donnée au serveur.
 */
(function(root){
  'use strict';
  const MAX_BYTES=2*1024*1024;
  const MAX_KEYS=120;
  const name=/^ifsi_[a-z0-9_]{1,96}$/i;
  function getKeys(storage){
    const out=[];
    for(let i=0;i<storage.length;i++){
      const k=storage.key(i);if(name.test(k))out.push(k);
    }
    return out.sort();
  }
  function exportData(storage){
    const data={};
    for(const k of getKeys(storage))data[k]=storage.getItem(k);
    return {source:'IFSI Platform',version:1,date:new Date().toISOString(),data};
  }
  function parseBackup(jsonText){
    if(typeof jsonText!=='string'||new Blob([jsonText]).size>MAX_BYTES)throw new Error('Fichier trop volumineux (maximum 2 Mo).');
    let input;
    try{input=JSON.parse(jsonText)}catch(e){throw new Error('Ce fichier n’est pas un JSON valide.')}
    if(!input||input.source!=='IFSI Platform'||!input.data||typeof input.data!=='object'||Array.isArray(input.data))
      throw new Error('Ce fichier n’est pas une sauvegarde IFSI reconnue.');
    const entries=Object.entries(input.data);
    if(entries.length>MAX_KEYS)throw new Error('Trop de données dans cette sauvegarde.');
    for(const [key,val] of entries){
      if(!name.test(key)||typeof val!=='string'||val.length>200000)
        throw new Error('Le fichier contient un élément non autorisé : '+key.slice(0,50));
    }
    return {entries,date:input.date||null};
  }
  function restoreBackup(storage,parsed){
    // Ne remplace que les clés effectivement présentes : les autres restent intactes.
    for(const [key,val] of parsed.entries)storage.setItem(key,val);
    return parsed.entries.length;
  }
  root.IFSI_BACKUP={getKeys,exportData,parseBackup,restoreBackup};
})(window);
