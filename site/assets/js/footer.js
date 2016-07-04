setTimeout(function() {

	var newsletterButton = document.querySelector('.footer-newsletter-button');
	var inputEmail = document.querySelector('.footer-newsletter-input');

	if (newsletterButton) {
		newsletterButton.onclick = cadastraNewsletter	
	}

	inputEmail.onfocus = function() {
		var prerender = document.createElement('link');
		prerender.rel = 'prerender';
		prerender.href = 'cadastrado.html';
		document.head.appendChild(prerender);

		inputEmail.onfocus = undefined;
	}

	// quando clicar no botão, valida o email, 
	// chama API e redireciona pra pagina de confirmacao
	function cadastraNewsletter() {
		if (valida()) {
			chamaAPI(inputEmail.value, function() {
				location.href = 'cadastrado.html';
			});
		}
		// TODO lidar com erro tbm
	}
	


	// faz a validação se o campo foi preenchido com email válido
	function valida() {
		var isValid = true;
		
		isValid = validaEmail(inputEmail.value);

		if(!isValid) {
			inputEmail.classList.add('form-erro');
			newsletterButton.classList.add('form-erro');
		}

		return isValid;
	}

	function validaEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	// chama a API para cadastrar o email e avisa no callback
	function chamaAPI(email, callback) {

		// FAKE finge que chama uma API
		// (você pode trocar por uma chamada Ajax a sua API se quiser)
		console.log('Email cadatrado com sucesso na newsletter', email);
		setTimeout(callback, 500);

	}

}, 1000);
