// Workbox injectManifest
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js");
workbox.precaching.precacheAndRoute([
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
    "revision": "b331f695c19368c7c93d25512bc62624"
  },
  {
    "url": "js/index.js",
    "revision": "4d5628662259e69e6a81f0d5fdde2d88"
  }
]);
// Workbox injectManifest End

// 其他自定义 sw 内容
// ...