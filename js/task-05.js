let userName = document.querySelector('#name-input')
let userOutputName = document.querySelector('#name-output')

userName.addEventListener("input", (event) => {
    userOutputName.textContent = userName.value || 'Anonymous';
  });


