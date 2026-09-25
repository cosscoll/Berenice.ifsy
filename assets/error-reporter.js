/**
 * Affiche toute erreur JS visiblement sur la page au lieu de la laisser
 * silencieuse dans la console (que la plupart des gens ne consultent
 * jamais). Utile pour diagnostiquer un problème sans accès aux outils
 * de développement.
 */
window.addEventListener('error', (event) => {
  showErrorBanner(`Erreur JavaScript : ${event.message} (${event.filename?.split('/').pop()}:${event.lineno})`);
});
window.addEventListener('unhandledrejection', (event) => {
  showErrorBanner(`Erreur JavaScript (promesse) : ${event.reason}`);
});

function showErrorBanner(message) {
  let banner = document.getElementById('js-error-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'js-error-banner';
    banner.style.cssText = 'position:fixed; bottom:0; left:0; right:0; background:#B1502F; color:#fff; padding:10px 16px; font-size:13px; z-index:9999; font-family:monospace;';
    document.body.appendChild(banner);
  }
  banner.textContent = '⚠️ ' + message;
}
