const numberOfCategories = document.querySelector('#categories')
const categoriesItem = document.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesItem.length}`)
categoriesItem.forEach(function(item){
    const itemTitle = item.querySelector('h2')
    const itemQuantity = item.querySelectorAll('li')

    console.log(`Category: ${itemTitle.textContent}`)
    console.log(`Elements: ${itemQuantity.length}`)
})