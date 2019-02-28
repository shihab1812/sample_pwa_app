/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
	{
		url: 'bulma.min.9a3deb19.css',
		revision: 'd5b87445562ce0bc4866509aded6080e'
	},
	{
		url: 'bulma.min.9a3deb19.js',
		revision: '37065f012f7d92554c3cf2c34b40a8e5'
	},
	{
		url: 'icon-128X128.5a766845.png',
		revision: '0135af0171bc8d4ed9d3d86aa5fc6ca1'
	},
	{
		url: 'icon-144X144.d00b9aff.png',
		revision: '176286b0ac9fa59cea381c8778f61858'
	},
	{
		url: 'icon-152X152.70dcb5b2.png',
		revision: '4a1416cd3efa9d81615fd9b175f1114e'
	},
	{
		url: 'icon-192X192.c9987d4b.png',
		revision: 'cda951f3b257c6787056f310a1624c5a'
	},
	{
		url: 'icon-384X384.09ceff17.png',
		revision: '7a84fa5b4da89c79c732273d2e1a535e'
	},
	{
		url: 'icon.1107295b.png',
		revision: '5ff71e2fdaf9c386e68f040fa9edbf4d'
	},
	{
		url: 'icon.abaeee4f.png',
		revision: '5ff71e2fdaf9c386e68f040fa9edbf4d'
	},
	{
		url: 'index.html',
		revision: '459628c3f96918c0ec60e91df467fd95'
	},
	{
		url: 'loadCSS.min.0a7cf92f.js',
		revision: '84e9e0234f1c17fe1727a00d5da147db'
	},
	{
		url: 'main.1f19ae8e.js',
		revision: '0590d694827b2206dc55c6d65c37c6c3'
	},
	{
		url: 'main.af46ece4.css',
		revision: 'a6e4ed00ef7bfcf3d4e7b0a6a13eef6e'
	},
	{
		url: 'main.af46ece4.js',
		revision: '31226fb467e1fa4eb3db7594a073db1f'
	},
	{
		url: 'manifest.298fe654.js',
		revision: '124876bd90b3baee0dbddae2313476ab'
	},
	{
		url: 'manifest.3bb3ee0a.webmanifest',
		revision: 'b828cc15b6cfca2b6d4afa3c89f616f4'
	},
	{
		url: 'manifest.f032aeb4.webmanifest',
		revision: '64d27e95ec55ee45151712b80796278f'
	}
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
