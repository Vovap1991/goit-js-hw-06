const formInputEl = document.querySelector('#name-input');

const userNameOutputEl = document.querySelector('#name-output')

formInputEl.addEventListener('input', (e) => {
    userNameOutputEl.textContent = e.target.value.trim() === "" ? "Anonymous" : e.target.value;
})