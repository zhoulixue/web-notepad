# Service Worker

```
chrome://serviceworker-internals/

```
Navite app
```
1. A request is made to download the application.
2. The app downloads and installls.
3. The app is ready to use and can be lanuched.
4. The app updates for new release.
```

HTTP 缓存
```
1. 第一次请求时将静态资源存储在缓存中，并在后续请求中使用舒安村
2. 把页面标记存储到缓存储到缓存中，并且仅在离线场景中使用标记的缓存
3. 从缓存中为某些资源提供旧的响应，在后台更新
4. 从网络流式传输部分内容，并将其与缓存中的应用程序外壳组合起来，以提高感知性能
```

## A service worker life

### Scope
scope是什么
1. service worker runs on a page located at /subdir/index.html
2. service worker is located at /sudir/sw.js
3. the service workder's scope is /subdir/
如何修改scope
1. Service-Worker-Allowed response header
2. scope options to the register method
### Client

### The lifecycle of a new service worker
#### Registration
0. 在load注册，避免sw预加载资源影响页面加载
1. service worker 只能在https或localhost上使用
2. service worker 中有语法错误时，注册会失败，抛出错误
3. service worker 只能在cope中操作
4. 注册开始时，service worker 的状态设置为 installing
```javascript
<script>
  // Don't register the service worker
  // until the page has fully loaded
  window.addEventListener('load', () => {
    // Is service worker available?
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        console.log('Service worker registered!');
      }).catch((error) => {
        console.warn('Error registering service worker:');
        console.warn(error);
      });
    }
  });
</script>
```

#### Installation
1. install 事件每个sw只触发一次，更新之前不会再次触发
2. 使用 addEventListener 可以注册 install 的回调函数
3. event.waitUntil 方法中的promise被reject时，sw注册失败
4. event.waitUntil 方法中的promise被resolve时，sw注册成功，sw的状态改为 installed
6. Cache 实例

```js
// /sw.js
self.addEventListener('install', (event) => {
  const cacheKey = 'MyFancyCacheName_v1';

  event.waitUntil(caches.open(cacheKey).then((cache) => {
    // Add all the assets in the array to the 'MyFancyCacheName_v1'
    // `Cache` instance for later use.
    return cache.addAll([
      '/css/global.bc7b80b7.css',
      '/css/home.fe5d0b23.css',
      '/js/home.d3cc4ba4.js',
      '/js/jquery.43ca4933.js'
    ]);
  }));
});

```
#### Activation
1. sw状态变为 activating
2. 使用 addEventListener 可以注册 activate 的回调函数，新的sw install成功后触发，状态变为activated

```js
self.addEventListener('activate', (event) => {
  // Specify allowed cache keys
  const cacheAllowList = ['MyFancyCacheName_v2'];

  // Get all the currently active `Cache` instances.
  event.waitUntil(caches.keys().then((keys) => {
    // Delete all caches that aren't in the allow list:
    return Promise.all(keys.map((key) => {
      if (!cacheAllowList.includes(key)) {
        return caches.delete(key);
      }
    }));
  }));
});
```

## Cache interface

1. Cache interface 跟 HTTP Cache是两回事
2. Cache-Control如何设置都只会影响 HTTP Cache 而不会影响 Cache interface中的缓存

### Cache API
1. CacheStorage.open
2. Cache.add Cache.put
3. Cache.match
4. Cache.delete

## fetch event
### 缓存过程
1. 看下 destination 的属性是否是image
2. 如图片在 sw 的 cache中，从cache中拿资源，如果没有，从network中获取资源，并且存储在cache中
3. 其他的通过sw的请求都不会检查cache
### request的属性
1. url——资源请求的网络地址
2. method——请求方法，POST/GET
3. mode——请求模式，navigate是指从document发出的
4. destination——请求内容的类型
5. responseWith


```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
  // Is this a request for an image?
  if (event.request.destination === 'image') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Respond with the image from the cache or from the network
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
          // Add the network response to the cache for future visits.
          // Note: we need to make a copy of the response to save it in
          // the cache and use the original as the request response.
          cache.put(event.request, fetchedResponse.clone());

          // Return the network response
          return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});
```

## Caching strategies
### Cache only
```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

// Assets to precache
const precachedAssets = [
  '/possum1.jpg',
  '/possum2.jpg',
  '/possum3.jpg',
  '/possum4.jpg'
];

self.addEventListener('install', (event) => {
  // Precache assets on install
  event.waitUntil(caches.open(cacheName).then((cache) => {
    return cache.addAll(precachedAssets);
  }));
});

self.addEventListener('fetch', (event) => {
  // Is this one of our precached assets?
  const url = new URL(event.request.url);
  const isPrecachedRequest = precachedAssets.includes(url.pathname);

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // Go to the network
    return;
  }
});
```

### Network only
直接return
### Cache first falling back to network
1. 如果资源在 cache 中，返回cache中的数据
2. 如果资源不再 cache中，请求network数据
3. 网络请求完成后，把资源放入 cache中，然后再返回
```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the cache first
      return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
          return cachedResponse;
        }

        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          // Add the network response to the cache for later visits
          cache.put(event.request, fetchedResponse.clone());

          // Return the network response
          return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});
```
### Network first falling back to cache
1. 请求网络资源时，把返回放入 cache
2. 如果处于离线状态，返回cache中资源最新的版本
3. 这种方案比较适合html和api接口的返回数据
```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the network first
      return fetch(event.request.url).then((fetchedResponse) => {
        cache.put(event.request, fetchedResponse.clone());

        return fetchedResponse;
      }).catch(() => {
        // If the network is unavailable, get
        return cache.match(event.request.url);
      });
    }));
  } else {
    return;
  }
});
```
### Stale-while-revalidate
1. 第一次请求资源时，从network获取，并存放入cache中
2. 在之后的请求中，首先提供缓存资源，然后在后台重新从网络中请求资源并更新资源缓存
3. 在后面的请求中，会从cache中拿到上一步从network中获取到的最新版本的资源
```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });

        return cachedResponse || fetchedResponse;
      });
    }));
  } else {
    return;
  }
});

```