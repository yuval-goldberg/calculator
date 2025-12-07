const textInput = document.querySelector('.expression-input')
const numberButtons = document.querySelectorAll('.number-operator')
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('.equal-operator')
const deleteButton = document.querySelector('.delete-operator')


// Switching to dark mode button
const darkModeButton = document.querySelector('.dark-mode-btn')

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let currentValue = button.textContent

        if (currentValue === "π") currentValue = Math.PI.toFixed(3)
        textInput.value += currentValue
    })
})

clearButton.addEventListener('click', (event) => {
    textInput.value = ""
})

function operate(firstNumber, secondNumber, operator) {

}

equalButton.addEventListener('click', (event) => {

})

deleteButton.addEventListener('click', (event) => {
    textInput.value = textInput.value.slice(0, -1)
})