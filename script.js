

class Calculator {
    constructor() {
        this.prev = "";
        this.operator = "";
        this.current = "";
        this.btnColorNormal = "rgb(181, 11, 11)";
        this.btnColorActive = "rgb(255, 138, 48)";
    }

    allClear() {
        this.prev = "";
        this.current = "";
        this.operator = "";
        display.value = "0";

    }

    //=============================================================================00
    add() {
        console.log("---------> method add()");
        this.prev = (+this.prev) + (+this.current);
        this.current = "";
        display.value = this.prev;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    
    subtract() {
        console.log("---------> method subtract()");
        this.prev = (+this.prev) - (+this.current);
        this.current = "";
        display.value = this.prev;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    multiply() {
        console.log("---------> method multiply()");
        this.prev = (+this.prev) *(+this.current);
        this.current = "";
        display.value = this.prev;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    divide() {
        console.log("---------> method divide()");
        this.prev = (+this.prev) / (+this.current);
        
        this.current = "";
        display.value = this.prev;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };
    
    
    operate() {
        console.log("---------> method operate()");

         // check if two numbers and operator were entered, if so then calculate
        if(this.prev != "" && this.operator != "" && this.current != "") {
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
            };
        };
       
    };

    //====================================================================0

    setOperator(op) {
        console.log("---------> method setOperator()")

        // if operant is entered and prev is empty, prev is current and current is cleared
        if(this.current != "") {
            this.prev = this.current;
            this.current = "";
        }
        
        
        this.operator = op;
        

       
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    }

    setNumber(input) {
        console.log("---------> method setNumber(input)")
        // check that input gets not to long
        if(this.current.length > 14) return;

        // number can only start with one 0, if current = "0." (okay), if not return
        if(this.current[0] === "0" && this.current[1] != "." && input === "0") {
            console.log("a)");
            return;
        }
        
        // check Decimal, if current is empty and input is "." => "0.""
        if(this.current === "" && input === ".") {
            console.log("b)")
            this.current = "0."
            return;
        };
        // only one decimal per number
        if(this.current.includes(".") && input === ".") return;

        // if this current = 0, should prevent numbers like 01 or 01234...
        if(this.current === "0") {
            console.log("c)")
            this.current = input;
            return;
        }
        console.log("d)");
        this.current += input;
  
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    updateDisplay(input) {
        console.log("---------> updateDisplay()")
        // if first input is a operator, ignore
        display.value = this.current;


        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
        // if nothing in current
    };

    setBackspace () {
        console.log("---------> setBackspace()");
        this.current = this.current.slice(0, -1);
        if(this.current === "") {
            this.current = "0";
        };
        display.value = this.current;
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    }
}

// create object
let calc = new Calculator();
const display = document.querySelector("#display");
display.value = "0";
// add event handlers for number buttons
const btnNumbers = document.querySelectorAll("#btn-num");
const btnOperators = document.querySelectorAll("#btn-op");
const btnSign = document.querySelector("#btn-sign");
const btnEqual = document.querySelector("#btn-equal");
const btnAC = document.querySelector("#btn-ac");
const btnBackspace = document.querySelector("#btn-backspace");

btnNumbers.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        calc.setNumber(e.target.value);
        calc.updateDisplay()
    });
});

btnOperators.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        calc.operate();
        calc.setOperator(e.target.value);
    });
});

btnEqual.addEventListener("click", (e) => {
    //console.log("-> "+ e.target.value);
    calc.operate();
});

btnBackspace.addEventListener("click", (e) => {
    calc.setBackspace();
});

// button +/-
btnSign.addEventListener("click", (e) => {
    console.log(e.target.value);
});

btnAC.addEventListener("click", (e) => {
    calc.allClear()
;});



// next: keyboard support
document.addEventListener("keydown", (e) => {
    console.log(e.code);
})