

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
        let check = (+this.prev) + (+this.current);
        if (check.toString().length > 10) {
            this.prev = check.toFixed(10);
            display.value = this.prev;
            this.current = "";
            return;
        };
        this.prev = check;
        display.value = this.prev;
        this.current = "";

    }

    subtract() {
        console.log("method  subtract()");
        let check = (+this.prev) - (+this.current);
        if (check.toString().length > 10) {
            this.prev = check.toFixed(10);
            display.value = this.prev;
            this.current = "";
            return;
        };
        this.prev = check;
        display.value = this.prev;
        this.current = "";
    }

    multiply() {
        console.log("method  multiply()");
        let check = (+this.prev) * (+this.current);
        if (check.toString().length > 10) {
            this.prev = check.toFixed(10);
            display.value = this.prev;
            this.current = "";
            return;
        };
        this.prev = check;
        display.value = this.prev;
        this.current = "";    
    };

    divide() {
        console.log("method  divide()");
        let check = (+this.prev) / (+this.current);
        if (check.toString().length > 10) {
            console.log("to big");
            this.prev = check.toFixed(10);
            display.value = this.prev;
            this.current = "";
            return;
        };
        this.prev = check;
        display.value = this.prev;
        this.current = "";    
    };

    
    operate() {
        console.log("method operate()");
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
        console.log("method setOperator()")
        if(this.prev === "" && op === "-") { // if user enters a minus first
            this.prev = op;
            return;
        }
        // if prev and current aren't empty calculate result
        if(this.prev != "" && this.current != "") {
            this.operate()
        };


        this.operator = op;
        // if number is not empty and starts with "-", show it on screen after operand button is pressed
        if(this.prev != "") {
            console.log("a: "+this.prev);
            if(this.prev.toString().includes("-")) {
                display.value = this.prev;
            }
        };
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    }

    setNumber(input) {
        console.log("method getNumber(number)")
        if(this.operator === "") { // if operator is empty input is prev
            // this.prev
            if(this.prev.toString().length > 15) return; // check that input is not to long
            if(input === "." && this.prev.includes(".")) return; // only one decimal per number
            if(this.prev === "" && input === ".") { // if first input is "." set to "0.""
                this.prev = "0.";
                display.value = this.prev;
                return;
            }
            if(input === "⌫") {
                console.log("a");
                this.prev = this.prev.slice(0, -1);
                display.value = this.prev;
                return;
            }
            
            if(this.prev.includes("-")) { // check if first item - or so
                console.log("minus");
                this.prev += input;
                display.value = this.prev.substr(1);
                return;
            }

            this.prev += input;
            display.value = this.prev;
        }
        else { // if operator is not empty input is current
            // this.prev
            if(this.current.toString().length > 15) return;
            if(input === "." && this.current.includes(".")) return; // only one decimal per number
            if(this.current === "" && input === ".") { // if first input is "." set to "0."
                this.current = "0.";
                display.value = this.current;
                return;
            }
            if(input === "⌫") {
                console.log("a");
                this.current = this.current.slice(0, -1);
                display.value = this.current;
                return;
            }
            this.current += input;
            display.value = this.current;
        };
        
        console.log("  this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };
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
    calc.setNumber(e.target.value);
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
    //console.log("-> "+ e.target.value);
    calc.operate()
});

btnAC.addEventListener("click", (e) => {
    calc.allClear()
;});

btnBackspace.addEventListener("click", (e) => {
    calc.setNumber(e.target.value);
});