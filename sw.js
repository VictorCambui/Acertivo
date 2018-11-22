const CACHE_VERSION = 'acertivo-1.0.0';

const RESOURCES = [
    // pages
    '/Acertivo/',
    '/Acertivo/cadastro',

    // scripts
    '/Acertivo/main.js',

    // images
    '/Acertivo/img/sprite.svg',
    '/Acertivo/img/logo.png',
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            cache.addAll(RESOURCES).then(self.skipWaiting);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        return (response) ? response : fetch(event.request);
    }));
});
