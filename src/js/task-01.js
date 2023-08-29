const categories = document.querySelector("#categories");

// console.dir(categories);

const item = categories.querySelectorAll("li.item");

console.dir(`Number of categories: ${item.length}`);

item.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;

  console.dir(`Category: ${title}`);
  console.dir(`Elements: ${itemCount}`);
});
