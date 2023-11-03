//const urlsCache = [
//    '/',
//    '/index.html',
//    '/script.js',
//    '/skiko.js',
//    '/icon.ico',
//    '/loading.css',
//    'composeApp',
//    '/manifest.json',
//    '/skiko.wasm',
//    '/composeApp.js',
//]
//
//self.addEventListener('install', (event) => {
//    event.waitUntil(
//        caches.open('my-cache').then((cache) => {
//            return cache.addAll(urlsCache);
//        })
//    );
//});
//
//self.addEventListener('fetch', (event) => {
//    console.log(event.request.url);
////    caches.match(event.request).then((response) => {
////        if (response) {
////            event.respondWith(response);
////        }
////    })
//});