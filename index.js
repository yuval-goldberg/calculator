const input = document.querySelector('.expression-input')
const numberButtons = document.querySelectorAll('.number-operator')
const clearButton = document.querySelector('#clear')


numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        console.log(button.textContent)
    })
})

clearButton.addEventListener('click', (event) => {
    input.value = ""
})