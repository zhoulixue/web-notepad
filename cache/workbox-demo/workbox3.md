# 使用workbox预缓存

### generateSW
```js
// build-sw.js
import { generateSW } from 'workbox-build';

generateSW({
  swDest: './dist/sw.js',
  globDirectory: './dist',
  globPatterns: [
    '**/*.js',
    '**/*.css',
    '**/*.svg'
  ]
});
```

### injectManifest

```js
import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

// build-sw.js
import {injectManifest} from 'workbox-build';

injectManifest({
  swSrc: './src/sw.js',
  swDest: './dist/sw.js',
  globDirectory: './dist',
  globPatterns: [
    '**/*.js',
    '**/*.css',
    '**/*.svg'
  ]
});
```

# 使用
https://developer.chrome.com/docs/workbox/using-workbox-without-precaching/
https://developer.chrome.com/docs/workbox/framework-integrations/

