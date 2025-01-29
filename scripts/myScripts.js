
let displayValue = '';

function addNumber(number) {
    displayValue += number;
    updateDisplay();
}

function addOperator(operator) {
    displayValue += operator;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue === '' ? '0' : displayValue;
}

function calculate() {
    const operators = ['+', '-', '*', '/'];
    let operator;
    let num1, num2;

    for (let op of operators) {
        if (displayValue.includes(op)) {
            operator = op;
            break;
        }
    }

    if (operator) {
        const [left, right] = displayValue.split(operator);
        num1 = parseFloat(left);
        num2 = parseFloat(right);

        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 'Error';
                break;
        }

        displayValue = result.toString();
        updateDisplay();
    } else {
        displayValue = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}