const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const listEl = document.querySelector('.gallery')


const newArr = images.map(element => {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = `${element.url}`;
  imgEl.alt = `${element.alt}`;
  imgEl.style.width = "400px";
  imgEl.style.height = "300px";
  itemEl.append(imgEl);
  console.log(itemEl);
  return itemEl;
})

newArr.forEach(element => {
  listEl.insertAdjacentElement("beforeend", element)
})


 
  
  
  
  
  
  
  
  