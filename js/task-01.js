const categoriesItemRef = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesItemRef.length}`);

categoriesItemRef.forEach((element) => {
  const categoriesTitle = element.querySelector("h2").textContent;
  const categoriesQuantity = element.querySelectorAll("li").length;
  console.log(`Category:`, categoriesTitle);
  console.log(`Elements:`, categoriesQuantity);
});
