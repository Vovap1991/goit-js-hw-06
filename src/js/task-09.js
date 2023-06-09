function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const bttnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

bttnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = spanEl.textContent = getRandomHexColor();
} );