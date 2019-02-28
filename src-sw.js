importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

/* ========= custom configurations  =========== */

// import the normal precahcing from sw.js file
workbox.precaching.precacheAndRoute([]);

// cahce the network calls
// workbox.routing.registerRoute(new RegExp('https://newsapi.org/v2/top-headlines'), workbox.strategies.networkFirst());

// network first
workbox.routing.registerRoute(
	new RegExp('https://newsapi.org/v2/top-headlines'),
	new workbox.strategies.NetworkFirst({
		networkTimeoutSeconds: 3,
		cacheName: 'stories',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 50,
				maxAgeSeconds: 5 * 60 // 5 minutes
			})
		]
	})
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
	/^https:\/\/fonts\.googleapis\.com/,
	new workbox.strategies.StaleWhileRevalidate({
		cacheName: 'google-fonts-stylesheets'
	})
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
	/^https:\/\/fonts\.gstatic\.com/,
	new workbox.strategies.CacheFirst({
		cacheName: 'google-fonts-webfonts',
		plugins: [
			new workbox.cacheableResponse.Plugin({
				statuses: [ 0, 200 ]
			}),
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24 * 365,
				maxEntries: 30
			})
		]
	})
);
