## Using Workbox CLI

### injectManifest

RUN:

```bash
npx workbox injectManifest
```
### generateSW

Modify _workbox-config.js_ as:

```javascript
module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{js,css,png,html}"
  ],
  "globIgnores": [
    "build/**",
    "workbox-config.js",
    "js/sw.tpl.js"
  ],
  "swDest": "build.sw.js",
  // "swSrc": "./js/sw.tpl.js"  // NO NEED `swSrc`
};
```

RUN:

```bash
npx workbox generateSW
```
