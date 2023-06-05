function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const mainDivEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let startSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    startSize += 10;
    newBox.style.width = startSize + 'px';
    newBox.style.height = startSize + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    mainDivEl.appendChild(newBox);
  }
}

function destroyBoxes() {
  mainDivEl.innerHTML = "";
  inputEl.value = "";
}
