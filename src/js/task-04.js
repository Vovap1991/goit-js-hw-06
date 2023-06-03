let counterValue = 0;

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');

const incrementBtnEl = document.querySelector('button[data-action="increment"]');

const resultEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => {
    resultEl.textContent = counterValue -= 1
});

incrementBtnEl.addEventListener('click', () => {
    resultEl.textContent = counterValue += 1
});