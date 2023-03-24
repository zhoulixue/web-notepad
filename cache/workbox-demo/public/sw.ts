import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, Route } from 'workbox-routing'
import { NetworkFirst, CacheFirst, CacheOnly, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

declare const self: ServiceWorkerGlobalScope

// 版本信息，追踪哪些资源已经发生了变化 precache manifest
// __WB_MANIFEST 会被workbox build tools发现，然后会被最新的 precache manifest 替换
precacheAndRoute(self.__WB_MANIFEST)

const apiRoute = new Route(
  ({ url }) => {
    return url.origin === 'http://localhost:4000'
  },
  new NetworkFirst({ cacheName: 'api-response' })
)

const postRoute = new Route(
  (route) => {
    console.log('post', route)
    return route.url.origin === 'http://localhost:4000'
  },
  new NetworkFirst({ cacheName: 'post-api-response' }),
  'POST'
)
registerRoute(apiRoute)
registerRoute(postRoute)
