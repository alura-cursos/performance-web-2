(function(){

	var jarodei = false;

	window.onscroll = function () {

		// throttle
		if (jarodei) return;
		jarodei = true;
		setTimeout(function () { 
			jarodei = false; 
		}, 200);

    	console.log('scroll');

    	// código em si
		var imgs = document.querySelectorAll('img[data-src]:not([src])');

		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].getBoundingClientRect().top < window.innerHeight + 200) {

				imgs[i].src = imgs[i].getAttribute('data-src');

			}
		}

	};

})();