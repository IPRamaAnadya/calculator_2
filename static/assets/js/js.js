const btnNumbers = document.querySelectorAll(".number")
const btnOperators = document.querySelectorAll(".operator")
const calculatorScreen = document.querySelector(".calculator-screen")
const equalSign = document.querySelector(".equal-sign")
const btnPercentage = document.querySelector(".percentage")
const btnDecimal = document.querySelector(".decimal")
const btnAllClear = document.querySelector(".all-clear")
let currentNumber = ""
let calculationOperator = ""
let previousNumber = "0"

const updateScreen = (number) => {
    calculatorScreen.value = number
}
const inputNumber = (number) => {
    if(number === '0') {
        if(currentNumber.length == 0) {
            currentNumber = number
        } else {
            currentNumber += number
        }
    } else {
        currentNumber += number
    }
    console.log(previousNumber)
    console.log(currentNumber)
}
const inputOperator = (operator) => {
    previousNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
    console.log(previousNumber)
    console.log(currentNumber)
}
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(currentNumber) + parseFloat(previousNumber)
            break
        case "-":
            result = parseFloat(currentNumber) - parseFloat(previousNumber)
            break
        case "*":
            result = parseFloat(currentNumber) * parseFloat(previousNumber)
            break
        case "/":
            result = parseFloat(currentNumber) / parseFloat(previousNumber)
            break
        default:
            break
    }
    currentNumber = result
    return result
}
const refresh = () => {
    currentNumber = ''
    previousNumber = ''
    calculationOperator = ''
}

btnNumbers.forEach((btnNumber)=>{
    btnNumber.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
btnOperators.forEach((btnOperator) => {
    btnOperator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
equalSign.addEventListener("click", () => {
    calculatorScreen.value = calculate()
})
btnPercentage.addEventListener("click", () => {
    calculatorScreen.value = parseFloat(currentNumber)/100
})
btnDecimal.addEventListener("click", () => {
    inputNumber(".")
    updateScreen(currentNumber)
})
btnAllClear.addEventListener("click", ()=> {
    refresh()
    updateScreen("0")
})
