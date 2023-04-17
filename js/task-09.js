function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color')
const colorEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', handleClick)

function handleClick(event){
    const color = getRandomHexColor()
    document.body.style.background = color
    colorEl.textContent = color
}
