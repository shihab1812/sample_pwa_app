import Constants from './constants';
import $http from 'axios';
import 'babel-polyfill';
import LazyLoad from 'vanilla-lazyload';

(function() {
	// window event listeners
	window.Globalobject = {};
	window.addEventListener('load', function() {
		initPlugins();
		getNewsArticles(buildNewsAPI());
		console.log('added new line');
	});

	// function init service worker
	function initServiceWorker() {
		// Check that service workers are registered
		if ('serviceWorker' in navigator) {
			// Use the window load event to keep the page load performant
			console.log('service worker is  supported in this browser');
		} else {
			console.log('service worker is not supported in this browser');
		}
	}

	// function to init plugins
	function initPlugins() {
		// initiate plugins in the order needed
		initLazyLoad();
	}

	// load lazyload plugin
	function initLazyLoad() {
		Globalobject.lazyLoadInstance = new LazyLoad({
			elements_selector: '.lazy'
			// ... more custom settings?
		});

		window.addEventListener(
			'LazyLoad::Initialized',
			function(event) {
				Globalobject.lazyLoadInstance = event.detail.instance;
			},
			false
		);
	}
	// functions / call bback fun  for the application
	function buildNewsAPI() {
		const finalAPIURL = `${Constants.baseUrl}/${Constants.category}?country=${Constants.source}&apiKey=${Constants.API_KEY_PARAM}`;
		return finalAPIURL;
	}

	async function getNewsArticles(fianlAPIEndpoint) {
		const appender = document.querySelector('.news-cards-container');
		const res = await fetch(fianlAPIEndpoint);
		const json = await res.json();

		appender.innerHTML = json.articles
			.map((article) => {
				return `<div class="columns"><div class="column is-12"><div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img  data-src="${article.urlToImage}" class="lazy" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
             <div class="title">${article.title}</div>
              <div class="content">
                ${article.description}
              </div>
            </div>
          </div></div></div>`;
			})
			.join('\n');

		Globalobject.lazyLoadInstance.update();
	}
})();
