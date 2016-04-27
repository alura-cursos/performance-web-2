(function() {
	var titulo = document.querySelector('.header-menu-titulo');
	var menu = document.querySelector('.header-menu');

	if (titulo) {
		titulo.onclick = function() {
			if (menu.hasAttribute('data-ativo')) {
				menu.removeAttribute('data-ativo');
			} else {
				menu.setAttribute('data-ativo', '');
			}
		};
	}

})();
