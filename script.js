// Мобильное меню
let burger = document.querySelector('#icon-menu');
let overlay = document.querySelector('#overlay');
let mobileMenu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelectorAll('.mobile-nav  a');
burger.addEventListener('click', function () {
	this.classList.toggle('_active');
	document.querySelector('body').classList.toggle('_lock');
	overlay.classList.toggle('_active');
	mobileMenu.classList.toggle('_active');

	if (overlay.classList.contains('_active')) {
		overlay.addEventListener('click', function () {
			this.classList.remove('_active');
			document.querySelector('body').classList.remove('_lock');
			burger.classList.remove('_active');
			mobileMenu.classList.remove('_active');

		})
	}

	if (burger.classList.contains('_active')) {
		menuLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				overlay.classList.remove('_active');
				document.querySelector('body').classList.remove('_lock');
				burger.classList.remove('_active');
				mobileMenu.classList.remove('_active');
			})
		})
	}
})

//=======================================================
const colorButton = document.getElementById('color');
colorButton.addEventListener('input', function (e) {
	document.querySelector('body').style.setProperty('--accent-color', e.target.value);
});

