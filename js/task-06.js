const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
    const length = input.getAttribute('data-length');
    const valueLength = e.target.value.length;

    if(valueLength === +length) {
        switcher('valid', 'invalid');
    } else {
        switcher('invalid', 'valid');
    }
});

function switcher(add, remove) {
    input.classList.add(add);
    input.classList.remove(remove);
}