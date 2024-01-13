function clearDisplay() {
    console.log("function clearDisplay()");
    display.textContent = "";
}

function add(a, b) {
    console.log("add: " + a + " : " + b);
    return a + b;
};

function subtract(a, b) {
    console.log("subtract: " + a + " : " + b);
    return a - b;
};

function multiply(a, b) {
    console.log("multiply: " + a + " : " + b);
    return a * b;
};

function divide(a, b) {
    console.log("divide: " + a + " : " + b);
    return a / b;
};


function operate(arr) {
    console.log("function operate()");
    
    console.log(arr[0] + " " + arr[1] + " " + arr[2]);
    /*
    
    let calculation;
    switch(operator) {
        case "+":
            calculation = add(num1, num2);
            break;
        case "-":
            calculation = subtract(num1, num2);
            break;
        case "*":
            calculation = multiply(num1, num2);
            break;
        case "/":
            calculation = divide(num1, num2);
            break;
    };
    return calculation;
    */
};

function getOperator(op) {
    
    console.log("function getOperator()");
    
    mathAssignment.push(userInput);
    mathAssignment.push(op);
    userInput = "";
    console.log(mathAssignment);

    
}


function getNumber(num) {
    userInput += num;
    console.log("function getNumber()");
    display.textContent = userInput;
}

let userInput = "";
let mathAssignment = [];

const display = document.querySelector("#display");
const container = document.querySelector("#container");
const btn0 = document.querySelector("#btn-0");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.querySelector("#btn-4");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.querySelector("#btn-6");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.querySelector("#btn-8");
const btn9 = document.querySelector("#btn-9");

const btnAdd = document.querySelector("#btn-add");
const btnSubtract = document.querySelector("#btn-subtract");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");

const btnClear = document.querySelector("#btn-clear");
const btnEqual = document.querySelector("#btn-equal");

// eventlistener for all buttons
container.addEventListener("click", (e) => {
    let value = e.target.value;
    if (value != undefined) {
        switch(value) {
            case "+":
            case "-":
            case "*":
            case "/":
                getOperator(value);
                break;
            case "clear":
                clearDisplay();
                break;
            case "=":
                operate();
                break;
            default:
                getNumber(value);
        }    
    }   
});
