const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let size = 30;

function createBoxes() {
  const amount = Number(input.value);
  let boxes = '';

  for (let i = 0; i < amount; i += 1, size += 10) {
    const color = getRandomHexColor();
    const box = `<div style="background-color:${color};width:${size}px;height:${size}px"></div>`;
    boxes += box;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxes);
}

function destroyBoxes() {
  size = 30;
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
