/** Compatibilité avec les anciennes pages : l’ancien avatar flottant est remplacé par le chatbot du header. */
function initNurseAvatar(pageId){
  window.IFSI_CURRENT_PAGE=pageId;
  if(window.initIfsiChat) window.initIfsiChat();
}