const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngrediets = document.querySelector('#ingredients')

for (let ingredient of ingredients) {
const item = document.createElement("li")
item.textContent = ingredient
item.classList.add('item')

console.log(item)
listIngrediets.append(item)
}
