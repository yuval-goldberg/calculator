const textInput = document.querySelector('.expression-input')
const numberButtons = document.querySelectorAll('.number-operator')
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('.equal-operator')
const deleteButton = document.querySelector('.delete-operator')

const DOM_ROOT = document.querySelector(':root')
const rootStyles = getComputedStyle(DOM_ROOT)

const DMImage = document.getElementById('dm-image')


// Switching to dark mode button
const darkModeButton = document.querySelector('.dark-mode-btn')

// MUST Global variables
let lightMode = true
let isOperatorExist = false

darkModeButton.addEventListener('click', (event) => {
    if (lightMode) {
        DOM_ROOT.style.setProperty('--background', 'gray')
        DOM_ROOT.style.setProperty('--math-operator-color', 'red')
        DOM_ROOT.style.setProperty('--text-color', 'white')
        DMImage.src = 'images/sun.png'

        lightMode = false
    } else {
        DOM_ROOT.style.setProperty('--background', '#f1f1f1')
        DOM_ROOT.style.setProperty('--math-operator-color', '#ff8800')
        DOM_ROOT.style.setProperty('--text-color', 'black')
        DMImage.src = 'images/moon.png'

        lightMode = true
    }
})

function findCurrentOperator(expression) {
    if (expression.includes("+")) {
        return "+"
    } else if (expression.includes("×")) {
        return "×"
    } else if (expression.includes("÷")) {
        return "÷"
    } else if (expression.includes("-")) {
        return "-"
    }
}

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let currentValue = button.textContent
        if ((currentValue === '+' || currentValue === '-' || currentValue === '×' || currentValue === '÷')) {

            if (isOperatorExist) {
                operate()
                // isOperatorExist = false
            } else {
                isOperatorExist = true
            }
        }

        if (textInput.value === '' && currentValue === '-') {
            textInput.value += '0'
        }

        // Pi 
        if (currentValue === "π") currentValue = Math.PI.toFixed(3)
        textInput.value += currentValue
    })
})

clearButton.addEventListener('click', (event) => {
    textInput.value = ""
    isOperatorExist = false
})

function operate() {
    let result = 0
    let currentOperator = findCurrentOperator(textInput.value)
    const expression = textInput.value

    console.log(`Current Operator = ${currentOperator}`) // Debug

    let firstNumber = parseFloat(expression.split(currentOperator)[0])
    let secondNumber = parseFloat(expression.split(currentOperator)[1])

    if (expression[0] === '-' && currentOperator === '-') {
        console.log(expression.slice(1).split(currentOperator)[1] * (-1))
        firstNumber = expression.slice(1).split(currentOperator)[1] * (-1)
        secondNumber
    }

    console.log(firstNumber, secondNumber, currentOperator)

    switch (currentOperator) {
        case "+":
            result = firstNumber + secondNumber
            break
        case "×":
            result = firstNumber * secondNumber
            break
        case "÷":
            result = firstNumber / secondNumber
            break
        case "-":
            result = firstNumber - secondNumber
            break
    }

    result.toFixed(4)
    textInput.value = result

    return result
}

equalButton.addEventListener('click', (event) => {
    operate()
    isOperatorExist = false
})

deleteButton.addEventListener('click', (event) => {
    textInput.value = textInput.value.slice(0, -1)
})