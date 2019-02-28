const cacheName = 'news-v1';

const staticAssets = [
	'./',
	'./main.af46ece4.js',
	'./main.af46ece4.css',
	'./bulma.min.9a3deb19.css',
	'./bulma.min.9a3deb19.js',
	'./manifest.3bb3ee0a.webmanifest',
	'./manifest.f032aeb4.webmanifest',
	'./manifest.298fe654.js'
];

self.addEventListener('install', async function() {
	const cache = await caches.open(cacheName);
	cache.addAll(staticAssets);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
	const request = event.request;
	const url = new URL(request.url);
	if (url.origin === location.origin) {
		event.respondWith(cacheFirst(request));
	} else {
		event.respondWith(networkFirst(request));
	}
});

async function cacheFirst(request) {
	const cachedResponse = await caches.match(request);
	return cachedResponse || (await fetch(request));
}

async function networkFirst(request) {
	const dynamicCache = await caches.open('news-dynamic');
	try {
		const networkResponse = await fetch(request);
		dynamicCache.put(request, networkResponse.clone());
		return networkResponse;
	} catch (err) {
		const cachedResponse = await dynamicCache.match(request);
		return cachedResponse || alert('seems like no internet');
	}
}
