const fontSizeControlEl = document.querySelector('#font-size-control');

const textEL = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', () => {
    textEL.style.fontSize = `${fontSizeControlEl.value}px`;
})
