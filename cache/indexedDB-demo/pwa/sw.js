/* eslint-disable */
// skipWaiting
self.addEventListener('install', () => {
  self.skipWaiting();
});
// clientsClaim
self.addEventListener('activate', () => {
  self.clients.matchAll({
    type: 'window',
  }).then((windowClients) => {
    windowClients.forEach((windowClient) => {
      windowClient.navigate(windowClient.url);
    });
  });
});
importScripts('https://vfiles.gtimg.cn/tvideo/m/activity/ecommerce-resource/js/workbox-sw.js');

const { precaching } = workbox;
// __WB_MANIFEST 会被workbox build tools发现，然后会被最新的 precache manifest 替换
precaching.precacheAndRoute(self.__WB_MANIFEST);
