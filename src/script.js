const nav = document.querySelector('#nav');
const navOpenButton = document.querySelector('#nav-open-button');
const navCloseButton = document.querySelector('#nav-close-button');

const input = document.querySelector('#input-code-cadeau');
const inputErrorMessage = document.querySelector('#input-error-message');
const button = document.querySelector('.main__form-button');

const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,10}$/;


// form validation

button.addEventListener('click', (e) => {
	e.preventDefault();
	const code = input.value;
	if (regex.test(code)) {
		input.classList.remove('main__form-input-error');
		inputErrorMessage.classList.add('main__form-error-message-hidden');
		alert('Code Valide');
	} else {
		input.classList.add('main__form-input-error');
		inputErrorMessage.classList.remove('main__form-error-message-hidden');
		// alert('Code Invalide');
	}
});

// menu button functionality

navOpenButton.addEventListener('click', () => {
	nav.classList.add('header__nav-visible');
});

navCloseButton.addEventListener('click', () => {
	nav.classList.remove('header__nav-visible');
});