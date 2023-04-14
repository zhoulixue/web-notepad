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
precaching.precacheAndRoute([{"revision":"5431e2cdcfb5c0752c226dfabd598e59","url":"js/app.js"},{"revision":"620fc07f0be458d6a3db7e8b9574128e","url":"css/style.css"}]);
