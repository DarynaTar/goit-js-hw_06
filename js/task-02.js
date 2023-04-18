const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngrediets = document.querySelector('#ingredients')
const fragment = document.createDocumentFragment()

for (let ingredient of ingredients) {
const item = document.createElement("li")
item.textContent = ingredient
item.classList.add('item')
fragment.append(item)
}

listIngrediets.append(fragment)
