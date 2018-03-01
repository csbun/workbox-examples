importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

self.addEventListener('install', function() {
  console.log('Workbox precache');
  workboxSW.precache([
  {
    "url": "css/style.css",
    "revision": "835ba5c376a3f48dba17d3a9dc152fc3"
  },
  {
    "url": "images/icon-192.png",
    "revision": "be6542c59bb5f3e6ea58d32ac8d820df"
  },
  {
    "url": "images/icon-48.png",
    "revision": "7186d37d76d392b0e8ad935d7829f6fb"
  },
  {
    "url": "images/icon-96.png",
    "revision": "b1537bfcc970c1d49968db8af86167ae"
  },
  {
    "url": "index.html",
    "revision": "6fa9b60c566684314de968157c219f67"
  },
  {
    "url": "js/index.js",
    "revision": "484e6a413298e7dd5c446a2a9173b0b0"
  }
]);
});
