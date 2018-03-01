// Register A service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const prefix = location.pathname.replace(/\/(index\.html)?$/, '');
    navigator.serviceWorker.register(`${prefix}/sw.js`)
      .then(function(registration) {
        // Registration was successful
        console.log('[success] scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('[fail]: ', err);
      });
  });
}

console.log('index.js modified');
