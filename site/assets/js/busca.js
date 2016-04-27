setTimeout(function() {
	var botaoBusca = document.querySelector('.header-busca');
	var body = document.body;
	var navegacaoForm = document.querySelector('.header-navegacao-form');

	if (botaoBusca && "classList" in document.documentElement) {	

		function toggleSearch(event) {
			body.classList.toggle('header-barraBusca-visivel');
			navegacaoForm.classList.toggle('navegacao-form-active');
			event.preventDefault();
		}

		function closeSearch() {
			body.classList.remove('header-barraBusca-visivel');	
			navegacaoForm.classList.remove('navegacao-form-active');
		}

		function cancelPropagation(event) {
			event.stopPropagation();
		}

		function setupCloseSearch() {
			setTimeout(function(){
				document.documentElement.addEventListener('click', closeSearch);
				document.querySelector('.header-navegacao').addEventListener('click', cancelPropagation);
				document.querySelector('.header-barraBusca').addEventListener('click', cancelPropagation);
			}, 0);

			botaoBusca.removeEventListener('click', setupCloseSearch);
		}

		botaoBusca.addEventListener('click', toggleSearch);
		botaoBusca.addEventListener('click', setupCloseSearch);
	}


}, 200);
