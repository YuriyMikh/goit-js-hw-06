const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
  ];

const listElementsRef = document.querySelector("#ingredients");

const addIngredients = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");

  return newElement;
});

listElementsRef.append(...addIngredients);

//----------------
//решение через функцию

// const addIngredients = array => {
//   return array.map(ingredient => {
//   const newElement = document.createElement("li");
//   newElement.textContent = ingredient;
//   newElement.classList.add("item");

//   return newElement;
// })
// };

// const functionСall = addIngredients(ingredients); //вызов функции

// listElementsRef.append(...functionСall);



