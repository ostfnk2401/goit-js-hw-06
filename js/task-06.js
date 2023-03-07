const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
    const length = input.getAttribute('data-length');
    const valueLength = e.target.value.length;

    if(valueLength === +length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
});