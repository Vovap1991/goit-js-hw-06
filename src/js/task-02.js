const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Варіант 1

const newArr = ingredients.map(element => {
  const itemEl = document.createElement('li');
  itemEl.textContent = element;
  itemEl.classList.add('item');
  return itemEl;
  newArr.push(itemEl);
})

  const listEl = document.querySelector('#ingredients');
  listEl.append(...newArr);



  
  // Варіант 2

// const newArr = [];

// ingredients.forEach(element => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = element;
//   itemEl.classList.add('item');
//   newArr.push(itemEl);
// })

//   const listEl = document.querySelector('#ingredients');
//   listEl.append(...newArr);





// Варіант 3

// const listEl = document.querySelector('#ingredients');

// ingredients.forEach(element => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = element;
//   itemEl.classList.add('item');
//   listEl.appendChild(itemEl);
// })