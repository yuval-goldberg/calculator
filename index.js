const input = document.querySelector('.expression-input')
const numberButtons = document.querySelectorAll('.number-operator')
const operatorButtons = document.querySelectorAll('.math-operator')
const clearButton = document.querySelector('#clear')
const equalButton = document.querySelector('.equal-operator')
const darkModeButton = document.querySelector('.dark-mode-btn')

let darkMode = false

// Input Expression
let mathExpression = ""
let currentOperator = ""
let isParentheses = false

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let currentValue = ""

        if (button.textContent === "()") {
            if (!isParentheses) {
                console.log(isParentheses)
                isParentheses = true
                currentValue = "("
            } else {
                isParentheses = false
                currentValue = ")"
            }
        } else {
            currentValue = button.textContent
        }

        mathExpression += currentValue
        input.value += currentValue
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let currentValue = button.textContent

        mathExpression += currentValue
        input.value += currentValue
        currentOperator = currentValue

        // console.log(currentOperator) - // Debug
    })
})

clearButton.addEventListener('click', (event) => {
    input.value = ""
    mathExpression = ""
})

function operate(expression, operator) {
    const splited = expression.split(operator)
    let result = 0

    switch (operator) {
        case "+":
            result = parseFloat(splited[0]) + parseFloat(splited[1])
            break

        case "-":
            result = parseFloat(splited[0]) - parseFloat(splited[1])
            break

        case "×":
            result = parseFloat(splited[0]) * parseFloat(splited[1])
            break

        case "÷":
            result = parseFloat(splited[0]) / parseFloat(splited[1])
            break
    }
    result.toFixed(3)
    // console.log(splited) // Debug
    // console.log(result) // Debug

    input.value = result
    mathExpression = ""

    return result
}

equalButton.addEventListener('click', (event) => {
    operate(mathExpression, currentOperator)
})