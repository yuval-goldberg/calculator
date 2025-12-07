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
let isOperatorExist = false
let isMinus = false

let firstNumber = 0
let secondNumber = 0

numberButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let currentValue = ""

        if (button.textContent === "π") {
            currentValue = Math.PI.toFixed(4)
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

        // Setting the first number of the expression
        firstNumber = mathExpression
        console.log(`Current Number: ${firstNumber}`)

        if (isOperatorExist) {
            const operatingResult = operate(mathExpression, currentOperator)

            // isOperatorExist = false
            mathExpression = operatingResult
            mathExpression += currentOperator
            currentOperator = currentValue

            console.log(`Current Operator: ${currentOperator}`)

        } else {
            mathExpression += currentValue
            currentOperator = currentValue
            isOperatorExist = true

            console.log(`Current Operator: ${currentOperator}`)

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

function operate(firstNum, secondNum, operator) {
    firstNum = firstNumber
    secondNum = secondNumber

    let result = 0

    if (mathExpression === "") {
        result = mathExpression
    } else if (secondNum == NaN || operator == "") {
        result = 0
    } else {
        switch (operator) {
            case "+":
                result = firstNum + secondNum
                break

            case "-":
                result = firstNum - secondNum
                break

            case "×":
                result = firstNum * secondNum
                break

            case "÷":
                result = firstNum / secondNum
                break
        }
    }
    console.log(firstNum, secondNum)

    result.toFixed(3)
    // console.log(splited) // Debug
    // console.log(result) // Debug

    input.value = result
    mathExpression = result

    return result
}

equalButton.addEventListener('click', (event) => {
    return operate(mathExpression, currentOperator)
})