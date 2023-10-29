const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
  const itemLi = document.createElement('li')
  itemLi.className = 'item'
  itemLi.textContent = ingredient
  liArray.push(itemLi)
})

listEl.append(...liArray)

