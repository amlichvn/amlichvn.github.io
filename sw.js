importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e5448e7aa62c7eaaf55.js",
    "revision": "84a8795b152cb2052261d9012fa4ab03"
  },
  {
    "url": "/_nuxt/bf7dd3ef3719e3af9820.js",
    "revision": "100c340b67ba2f88e24bb98290099cac"
  },
  {
    "url": "/_nuxt/da5f479f2831e552b2ad.js",
    "revision": "74d389245135893129b9608ef8f1fcb6"
  },
  {
    "url": "/_nuxt/dc212a4866b397175c91.js",
    "revision": "005884e9c64d41d1337130e4540dfc82"
  }
], {
  "cacheId": "amlichvn",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
