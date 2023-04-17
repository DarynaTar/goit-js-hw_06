let value = document.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

incrementBtn.addEventListener('click', () => value.textContent ++)
decrementBtn.addEventListener('click', () => value.textContent -=1)