setTimeout(function(){

	var iframe = '<iframe class="elasticMedia" src="https://player.vimeo.com/video/99185150" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	var container = document.querySelector('.elasticMedia-container');
	if (container) container.innerHTML = iframe;

}, 600);