module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{css,png,html,js}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "js/sw.js",
  "globIgnores": [
    "build/**",
    "workbox-cli-config.js",
    "js/sw.js"
  ]
};
