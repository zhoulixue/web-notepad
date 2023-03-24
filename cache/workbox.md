# workbox
## service worker 发布可能造成的问题
### Precacheing pitfalls

1. workbox-webpack-plugin 自动预缓存生成的资源
2. 预缓存时，所有请求会同时启动，如果时机不对，会给用户体验带来问题，即使时机对了，一些无用的请求最终也会造成数据的浪费。

#### It's all in the timing
1. sw 预缓存所有资源时，注册的时机很重要
2. sw经常是用script标签内敛到html中的，这意味着在关键资源加载之前，sw已经注册了
3. 加载页面时，可能用不到缓存，然而页面交互会更早使用

#### Be considerate of data usage
#### Service worker startup can delay network requests
#### Cache-first strategies can backfire
#### Runtime cacheinf of unversined static assets
#### Mind storage quotas
#### Have no feat

## 移除有bug的service worker

### 发布一个空的 sw 

这个十分重要，需要保证你可以随时更换no-op worker service 保证团队内所有人都能发布

```js
self.addEventListener('install', () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  // Optional: Get a list of all the current open windows/tabs under
  // our service worker's control, and force them to reload.
  // This can "unbreak" any open windows/tabs as soon as the new
  // service worker activates, rather than users having to manually reload.
  self.clients.matchAll({
    type: 'window'
  }).then(windowClients => {
    windowClients.forEach((windowClient) => {
      windowClient.navigate(windowClient.url);
    });
  });
});
```

### 其他方法
1. 如果你不知道老的 service worker的url，使用 http header 返回 service-worker
2. Set a Clear-Site-Data: storage header

## 提升service worker的发布体验
### 本地开发
sw只能在https和localhost中调试，可以通过修改 chrome://flags/#unsafely-treat-insecure-origin-as-secure 在http中调试. firfox在about:config中修改 devtools.serviceWorkers.testing.enabled
### 开发辅助工具
1. 隐私浏览窗口
2. Chrome Devtools application/cache storage

## 故障和日志
1. workbox-webpack-plugin/rollup-plugin-workbox
2. 

## Navigation Preload
1. workbox-navigation-preload
```js
import * as navigationPreload from 'workbox-navigation-preload';
import {NetworkFirst, StaleWhileRevalidate} from 'workbox-strategies';
import {registerRoute, NavigationRoute, Route} from 'workbox-routing';
import {precacheAndRoute} from 'workbox-precaching';

// Precache the manifest
precacheAndRoute(self.__WB_MANIFEST);

// Enable navigation preload
navigationPreload.enable();

// Create a new navigation route that uses the Network-first, falling back to
// cache strategy for navigation requests with its own cache. This route will be
// handled by navigation preload. The NetworkOnly strategy will work as well.
const navigationRoute = new NavigationRoute(new NetworkFirst({
  cacheName: 'navigations'
}));

// Register the navigation route
registerRoute(navigationRoute);

// Create a route for image, script, or style requests that use a
// stale-while-revalidate strategy. This route will be unaffected
// by navigation preload.
const staticAssetsRoute = new Route(({request}) => {
  return ['image', 'script', 'style'].includes(request.destination);
}, new StaleWhileRevalidate({
  cacheName: 'static-assets'
}));

// Register the route handling static assets
registerRoute(staticAssetsRoute);
```
2. streams

```bash
npm i workbox-navigation-preload workbox-strategies workbox-routing workbox-precaching workbox-streams --save
```
```js
// sw.js
import * as navigationPreload from 'workbox-navigation-preload';
import {NetworkFirst} from 'workbox-strategies';
import {registerRoute} from 'workbox-routing';
import {matchPrecache, precacheAndRoute} from 'workbox-precaching';
import {strategy as composeStrategies} from 'workbox-streams';

// Enable navigation preload for supporting browsers
navigationPreload.enable();

// Precache partials and some static assets
// using the InjectManifest method.
precacheAndRoute([
  // The header partial:
  {
    url: '/partial-header.php',
    revision: __PARTIAL_HEADER_HASH__
  },
  // The footer partial:
  {
    url: '/partial-footer.php',
    revision: __PARTIAL_FOOTER_HASH__
  },
  // The offline fallback:
  {
    url: '/offline.php',
    revision: __OFFLINE_FALLBACK_HASH__
  },
  ...self.__WB_MANIFEST
]);

// To be continued...
```

## Storage quota

### workbox-expiration
1. maxEntries 存储条目的上线
2. maxAgeSeconds 过期时间
3. ourgeOnQuotaError 

```js
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';
import {ExpirationPlugin} from 'workbox-expiration';

registerRoute(
  ({request}) => request.destination === 'image',
  // Use a cache-first strategy with the following config:
  new CacheFirst({
    // You need to provide a cache name when using expiration.
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        // Keep at most 50 entries.
        maxEntries: 50,
        // Don't keep any entries for more than 30 days.
        maxAgeSeconds: 30 * 24 * 60 * 60,
        // Automatically cleanup if quota is exceeded.
        purgeOnQuotaError: true
      })
    ]
  })
);

```
### 最大存储的数据
1. navigator.storage.estimate()
2. 