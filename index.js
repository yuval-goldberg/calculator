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
let isOperatorExist = false

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

        if (isOperatorExist) {
            operate(mathExpression, currentOperator)
            // isOperatorExist = false
            mathExpression += currentOperator
            currentOperator = currentValue
            console.log(currentOperator)

        } else {
            mathExpression += currentValue
            currentOperator = currentValue
            isOperatorExist = true

            console.log(currentOperator)

        }
        input.value += currentValue

        // console.log(currentOperator) - // Debug
    })
})

clearButton.addEventListener('click', (event) => {
    input.value = ""
    mathExpression = ""
    isParentheses = false
    isOperatorExist = false
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
    mathExpression = result

    return result
}

equalButton.addEventListener('click', (event) => {
    operate(mathExpression, currentOperator)
})