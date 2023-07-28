const burgerButton = document.querySelector('.hamburger-button');
const burgerParent = document.querySelector('.header__wrapper');
const body = document.querySelector('body');

burgerButton.addEventListener('click', function (e) {
	body.classList.toggle('burger-active');
});
