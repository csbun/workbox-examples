importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

const CACHE_NAME = 'workbox:cross-origin';

// Cache all
const REGEXP_ALL = /.*\.(?:html|js|css|png|jpg|jpeg|svg|gif)/;

// [Fail] Cache First
workbox.routing.registerRoute(
  REGEXP_ALL,
  workbox.strategies.cacheFirst({
    cacheName: `${CACHE_NAME}:cache-first`,
  }),
);


self.addEventListener('install', function() {
  // For Develop Only
  self.skipWaiting();
});
