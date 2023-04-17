const textInput = document.querySelector('#validation-input')

textInput.addEventListener('blur', (event) => {
    
if (event.target.value.length >= event.target.getAttribute('data-length')) {
    event.target.classList.add('valid')
    event.target.classList.remove('invalid')
} else {
    event.target.classList.remove('valid')
    event.target.classList.add('invalid')
}
})
