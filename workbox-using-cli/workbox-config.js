module.exports = {
  "globDirectory": "./",        // 匹配根目录
  "globPatterns": [             // 匹配的文件
    "**/*.{css,png,html,js}"
  ],
  "globIgnores": [              // 忽略的文件
    "build/**",
    "workbox-config.js",
    "js/sw.tpl.js"              // 忽略 sw.tpl.js
  ],
  "swDest": "build.sw.js",      // 目标输出
  "swSrc": "./js/sw.tpl.js"     // 输入源
};