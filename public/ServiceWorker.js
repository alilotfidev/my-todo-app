const staticChacheName = 'site-static';
const assets = [
  '/',
  '/index.html',
  '/static/js/',
  '/manifest.json',
  '/img/Arrow - Up 2.svg',
  '/img/blank-page.png',
  '/img/Category.svg',
  '/img/Close Square.svg',
  '/img/done.svg',
  '/img/Plus.svg',
  '/img/Search.svg',
];
const self = this;

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(staticChacheName).then((chache) => {
      //chaching shell assets
      chache.addAll(assets);
    })
  );
});

self.addEventListener('activate', (e) => {});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((chacheRes) => {
        return chacheRes || fetch(e.request);
      })
      .catch((err) => {
        console.log('h' + err);
      })
  );
});
