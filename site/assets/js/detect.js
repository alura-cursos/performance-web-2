function suportaTransform() {
	var el = document.createElement('div');
	return el.style['transform'] !== undefined || el.style['WebkitTransform'] !== undefined;
}

if (!suportaTransform()) {
	document.documentElement.className += ' no-transform';
}
