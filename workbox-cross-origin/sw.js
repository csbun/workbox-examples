importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

const CACHE_NAME = 'workbox:cross-origin';

// Cache all
const REGEXP_ALL = /.*\.(?:html|js|css|png|jpg|jpeg|svg|gif)/;

// [OK] Network First
workbox.routing.registerRoute(
  REGEXP_ALL,
  workbox.strategies.networkFirst({
    cacheName: `${CACHE_NAME}:network-first`,
  }),
);

// // [OK] Stale While Revalidate
// workbox.routing.registerRoute(
//   REGEXP_ALL,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: `${CACHE_NAME}:stale-while-revalidate`,
//   }),
// );

// // [Fail] Cache First EXCEPT .html
// workbox.routing.registerRoute(
//   REGEXP_ALL,
//   workbox.strategies.cacheFirst({
//     cacheName: `${CACHE_NAME}:cache-first`,
//   }),
// );


self.addEventListener('install', function() {
  // For Develop Only
  self.skipWaiting();
});
