var VERSION = 'v1';

// 缓存
self.addEventListener('install', function(event) {
  // Use event.waitUtil() passing a promise to extend the installing stage untils the promise is resolved
  // event.waitUtil() 里面的 promise 执行完成后 installing stage 阶段才完成
  event.waitUntil(
    // caches.open 用来创建 一个叫做 v1 的缓存
    caches.open(VERSION).then(function(cache) {
      // cache.addAll 添加想缓存的资源列表
      return cache.addAll([
        './start.html',
        './static/jquery.min.js',
        './static/mm1.jpg'
      ]);
    })
  );
  // Use self.skipWating() anytime before activation to skip installed stage
  // and directly jump to activating stage without waiting for currently controlled clients to close
});

// 缓存更新
// activate 一般用来摆脱旧版的缓存
self.addEventListener('activate', function(event) {
  // Use event.waitUntil() passing a promise to extend the activating stage until the promise is resolved
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          // 如果当前版本和缓存版本不一致
          if (cacheName !== VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Use self.clients.claim() in the activate handler to start contaolling all open clients whithout reloading them.
});

// 捕获请求并返回缓存数据
self.addEventListener('fetch', function(event) {
  // event.responseWith can hiijacks the request
  event.respondWith(
    // 判断缓存中的url有没有和网络请求匹配的资源
    caches.match(event.request)
      .catch(function() {
        // 如果没有找到缓存 浏览器 fetch 默认的网络请求
        return fetch(event.request);
      })
      .then(function(response) {
        // 获取到请求后缓存请求
        caches.open(VERSION).then(function(cache) {
          cache.put(event.request, response);
        });
        return response.clone();
      })
      .catch(function() {
        // 兜底
        return caches.match('./static/mm1.jpg');
      })
  );
});
