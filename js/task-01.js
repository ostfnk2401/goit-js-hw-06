const listIdItem = document.querySelector("ul#categories");
console.log(`Number of categories: ${listIdItem.childElementCount}`);

const itemClassOfList = document.querySelectorAll(".item");
itemClassOfList.forEach(itemOfList =>{
  console.log(`Category: ${itemOfList.children[0].textContent}`);
  console.log(`Elements: ${itemOfList.children[1].childElementCount}`);
});