"use strict";

const BodyClasses = {

	install(Transito) {

		Transito.on('postload', e => {

			const classes = e.response.match(/body\sclass=['|"]([^'|"]*)['|"]/);

			document.body.className = '';

			if (classes) {

				classes[ 1 ].split(' ').forEach(className => {
					document.body.classList.add(className);
				});
			}
		});
	}
};

export default BodyClasses;