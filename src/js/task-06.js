const formInputEl = document.querySelector('#validation-input');

formInputEl.addEventListener('blur', onInput);

function onInput () {
    const textEl = formInputEl.value.trim();

    if (textEl.length === Number(formInputEl.dataset.length)) {
        formInputEl.classList.add('valid');
        formInputEl.classList.remove('invalid');
        
    } else {
        formInputEl.classList.remove('valid');
        formInputEl.classList.add('invalid');
    }
};