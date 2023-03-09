const listIdItem = document.querySelector("ul#categories");
console.log(`Number of categories: ${listIdItem.length}`);

const itemClassOfList = document.querySelectorAll(".item");
itemClassOfList.forEach(itemOfList => {
  console.log(`Category: ${itemOfList.firstElementChild.textContent}`);
  console.log(`Elements: ${itemOfList.lastElementChild.childElementCount}`);
});
