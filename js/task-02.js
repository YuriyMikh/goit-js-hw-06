const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElements = document.querySelector("#ingredients");

const addIngredients = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");

  return newElement;
});

listElements.append(...addIngredients);

//----------------
//решение через функцию
// const listElements = document.querySelector("#ingredients");

// const addIngredients = array => {
//   return array.map(ingredient => {
//   const newElement = document.createElement("li");
//   newElement.textContent = ingredient;
//   newElement.classList.add("item");

//   return newElement;
// })
// };

// const functionСall = addIngredients(ingredients); //вызов функции

// listElements.append(...functionСall);



