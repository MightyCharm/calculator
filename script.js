function clear() {
    userInput = "";
    display.value = "";
}

function setBtnColor(op) {
    btnAdd.style.backgroundColor = initialColor;
    btnSubtract.style.backgroundColor = initialColor;
    btnMultiply.style.backgroundColor = initialColor;
    btnDivide.style.backgroundColor = initialColor;
    if(op === "+") {
        btnAddActive = true;
        btnAdd.style.backgroundColor = color;
    }
    if(op === "-") {
        btnSubtractActive = true;
        btnSubtract.style.backgroundColor = color;
    }
    if(op === "*") {
        btnMultiplyActive = true;
        btnMultiply.style.backgroundColor = color;
    }
    if(op === "/") {
        btnDivideActive = true;
        btnDivide.style.backgroundColor = color;
    }

}


function operate(arr) {
    console.log("function operate()");
    
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
    setBtnColor(op);
    
    
    display.value = userInput;
}

function getNum(input) {
    console.log("function getInput()");
    // if number button is pressed set back color of operator buttons to normal
    btnAdd.style.backgroundColor = initialColor;
    btnSubtract.style.backgroundColor = initialColor;
    btnMultiply.style.backgroundColor = initialColor;
    btnDivide.style.backgroundColor = initialColor;


    console.log(input);
    userInput += input;
    display.value = userInput;
}

let userInput = "";
const display = document.querySelector("#display");

// variables for setting the color of the operator button if pressed
const initialColor= "rgb(181, 11, 11)";
const color = "rgb(255, 138, 48)";
let btnAddActive = false;
let btnSubtractActive = false;
let btnMultiplyActive = false;
let btnDivideActive = false;

const btnAdd = document.querySelector(".btn-add");
const btnSubtract = document.querySelector(".btn-subtract");
const btnMultiply = document.querySelector(".btn-multiply");
const btnDivide = document.querySelector(".btn-divide");
// variables for getting list of buttons to append an event listener
const btnNumbers = document.querySelectorAll("#btn-num");
const btnOperator = document.querySelectorAll("#btn-op");

// append event listener for all buttons 0-9
btnNumbers.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        getNum(e.target.value);
    })  
});

// append event listener for all operator buttons
btnOperator.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        switch(e.target.value) {
            case "clear":
                clear();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                getOperator(e.target.value);
                break;
        }
    })
});