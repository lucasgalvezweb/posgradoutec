/* One page nav */

$('#navbarCollapse').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});

/* Effect on Scroll */
AOS.init({
	offset: 200,
	duration: 1000,
});