require('../css/style.css');

const elImg = document.createElement('img');
elImg.src = require('../images/icon-48.png');

document.body.appendChild(elImg);

// Register A service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    const prefix = location.pathname.replace(/\/(index\.html)?$/, '');
    navigator.serviceWorker.register(`${prefix}/build.sw.js`)
      .then(function(registration) {
        // Registration was successful
        console.log('[success] scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('[fail]: ', err);
      });
  });
}
