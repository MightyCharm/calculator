

class Calculator {
    constructor() {
        this.prev = "";
        this.operator = "";
        this.current = "";
        this.btnColorNormal = "rgb(181, 11, 11)";
        this.btnColorActive = "rgb(255, 138, 48)";
    }

    allClear() {
        display.value = "";
        this.prev = "";
        this.operator = "";
        this.current = "";


    }

    //=============================================================================00
    add() {
        console.log("method  add()");
        display.value = (+this.prev) + (+this.current); // display value equal to result
        this.prev = display.value; // prev equal to display value
        this.current = "";

    }

    subtract() {
        console.log("method  subtract()");
        display.value = (+this.prev) - (+this.current);
        this.prev = display.value;
        this.current = "";
    }

    multiply() {
        console.log("method  multiply()");
        display.value = (+this.prev) * (+this.current);
        this.prev = display.value;
        this.current = "";
        
    }

    divide() {
        console.log("method  divide()");
        display.value = (+this.prev) / (+this.current);
        this.prev = display.value;
        this.current = "";
        
    }

    
    operate() {
        console.log("method operator()");
        // check if two numbers and operator were entered, then calculate
        switch(this.operator) {
            case "+":
                this.add();
                break;
            case "-":
                this.subtract();
                break;
            case "*":
                this.multiply();
                break;
            case "/":
                this.divide();
                break;
        }
        
       
    }

    //====================================================================0

    setOperator(op) {
        //console.log("method setOperator()")
        if(this.prev === "") return // operator can't be the first input
        

        if(this.prev != "" && this.current != "") { // if prev and current aren't empty calculate result
            this.operate()
        };
        this.operator = op;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    }

    setNumber(num) {
        //console.log("method getNumber(number)")
        if(this.operator === "") {
            this.prev += num;
            display.value = this.prev;
        }
        else {
            this.current += num;
            display.value = this.current;
        };
        


        console.log("  this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    }
}

// create object
let calc = new Calculator();
const display = document.querySelector("#display");
// add event handlers for number buttons
const btnNumbers = document.querySelectorAll("#btn-num"); 
const btnDecimal = document.querySelector("#btn-decimal");
const btnSign = document.querySelector("#btn-sign");
const btnAdd = document.querySelector("#btn-add");
const btnSubtract = document.querySelector("#btn-subtract");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const btnEqual = document.querySelector("#btn-equal");
const btnAC = document.querySelector("#btn-ac");
const btnBackspace = document.querySelector("#btn-backspace");

btnNumbers.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        calc.setNumber(e.target.value);
    });
});

btnDecimal.addEventListener("click", (e) => {
    console.log(e.target.value);
});

btnSign.addEventListener("click", (e) => {
    console.log(e.target.value);
});

btnAdd.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
});

btnSubtract.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
});

btnMultiply.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
});

btnDivide.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
});

btnEqual.addEventListener("click", (e) => {
    console.log(e.target.value);
});

btnAC.addEventListener("click", (e) => {
    calc.allClear()
;});

btnBackspace.addEventListener("click", (e) => {
    console.log(e.target.value);
});