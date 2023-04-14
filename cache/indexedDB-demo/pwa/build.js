const fs = require('fs');
const { injectManifest } = require('workbox-build');

fs.copyFileSync('./pwa/sw.js', './public/sw.js');
// injectManifest
injectManifest({
  globDirectory: 'public/',
  globPatterns: [
    'js/*.js',
    'css/*.css',
    'fonts/*.ttf',
  ],
  swDest: 'public/sw.js',
  swSrc: 'public/sw.js',
});
