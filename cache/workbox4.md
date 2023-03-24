# workbox-window
```js
import {Workbox} from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.register();
}

```
# precache and runtime cache
1. precache
2. runtime cache

https://web.dev/service-worker-lifecycle/

## warm strategy
```js
import { CacheFirst } from 'workbox-strategies'
import { warmStrategyCache } from 'workbox-recipes'

const strategy = new CacheFirst()
const urls = [
  '/best-sellers.html'
]

warmStrategyCache({ urls, strategy })
```

# multiple caches
ExpirationPlugin can only be used with registered routes using a strategy that has a configured cacheName

```js
// sw.js
import { registerRoute, Route } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Handle images:
const imageRoute = new Route(({ request }) => {
  return request.destination === 'image'
}, new StaleWhileRevalidate({
  cacheName: 'images',
  plugins: [
    new ExpirationPlugin({
      maxAgeSeconds: 60 * 60 * 24 * 30,
    })
  ]
}));

// Handle scripts:
const scriptsRoute = new Route(({ request }) => {
  return request.destination === 'script';
}, new CacheFirst({
  cacheName: 'scripts',
  plugins: [
    new ExpirationPlugin({
      maxEntries: 50,
    })
  ]
}));

// Handle styles:
const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style';
}, new CacheFirst({
  cacheName: 'styles'
}));

// Register routes
registerRoute(imageRoute);
registerRoute(scriptsRoute);
registerRoute(stylesRoute);
```

# networkTimeoutSeconds
```js
// sw.js
import { NetworkFirst } from 'workbox-strategies';
import { registerRoute, NavigationRoute } from 'workbox-routing';

// Only wait for three seconds before returning the last
// cached version of the requested page.
const navigationRoute = new NavigationRoute(new NetworkFirst({
  networkTimeoutSeconds: 3,
  cacheName: 'navigations'
}));

registerRoute(navigationRoute);
```