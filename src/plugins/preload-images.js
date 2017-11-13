"use strict";

const PreloadImages = {
	install(transito) {

		transito.on('receivedresponse', e => {

			transito.emptyPromises();

			const html = e.response;
			const body = /<body.*?>([\s\S]*)<\/body>/.exec(html)[1];
			const tempContainer = document.createElement('div');
			tempContainer.innerHTML = body;

			const images = tempContainer.getElementsByTagName('img');

			for (let i = 0; i < images.length; i++) {

				transito.addPromise( new Promise(resolve => {

					const img = new Image();
					img.onload = resolve;
					img.onerror = resolve;
					img.src = images[i].getAttribute('src');
				}) );
			}
		});
	}
};

export default PreloadImages;