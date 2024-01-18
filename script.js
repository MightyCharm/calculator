

class Calculator {
    constructor() {
        this.prev = "";
        this.operator = "";
        this.current = "";
        this.maxInputLength = 14;
        this.btnColorNormal = "rgb(181, 11, 11)";
        this.btnColorActive = "rgb(255, 138, 48)";
    }

    allClear() {
        this.prev = "";
        this.current = "";
        this.operator = "";
        display.value = "0";

    }

    roundNumber() {
        console.log("---------> roundNumber()");
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
        this.prev = +(this.prev).toFixed(2);
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };


    add() {
        console.log("---------> method add()");
        this.prev = (+this.prev) + (+this.current);
        this.roundNumber();    
        this.current = "";
        this.updateDisplay();     
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    subtract() {
        console.log("---------> method subtract()");
        this.prev = (+this.prev) - (+this.current);
        this.roundNumber();
        this.current = "";
        this.updateDisplay(); 
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    multiply() {
        console.log("---------> method multiply()");
        this.prev = (+this.prev) * (+this.current);
        this.roundNumber();
        this.current = "";
        this.updateDisplay(); 
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    divide() {
        console.log("---------> method divide()");
        this.prevLength = this.prev.toString().length;
        this.currentLength = this.current.toString().length;
        this.prev = (+this.prev) / (+this.current);
        this.roundNumber();
        this.current = "";
        this.updateDisplay(); 
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };
      
    operate(btn) {
        console.log("---------> method operate()");
        if( (this.prev != "" || this.prev == "0") && this.current != "" && this.operator != "") {
            
            switch(this.operator) {
                case "+":
                    this.add();
                    if(btn === "=") {this.operator = ""};
                    break;
                case "-":
                    this.subtract();
                    if(btn === "=") {this.operator = ""};
                    break;
                case "*":
                    this.multiply();
                    if(btn === "=") {this.operator = ""};
                    break;
                case "/":
                    this.divide();
                    if(btn === "=") {this.operator = ""};
                    break;
            };
        };
    };

    setOperator(op) {
        console.log("---------> method setOperator()") 
        if(this.prev === ""  && this.current != "") {
            console.log("a)");
            this.prev = this.current;
            this.current = "";
        };

        if(this.prev == "0" && this.current != "") {
            console.log("b)");
            this.prev = this.current;
            this.current = "";
        }
        this.operate();
        this.operator = op;
        

        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    setNumber(input) {
        console.log("---------> method setNumber(input)")
        console.log(input);
        if(this.current.length > this.maxInputLength) return; // check that input gets not to long
        if(this.current.includes(".") && input === ".") return; // check only one decimal in a number
        if(this.current === "" && input === ".") { // if "." first input then "0.";
            this.current = "0.";
            return;
        };
        

        if(this.current === "0" && input === "0") { // if first digit "0" than no "0" can follow
            this.current = "0";
            return;
        };

        if(this.current === "0") { // if first digit 0 and next digit number, current equal to number
            this.current = input;
            return;
        };
        
        // after pressing equal and calculating result, if user enters first a new number before
        // pressing operator button, this prev will be clear, so a new calculation can happen
        if(this.prev != "" && this.operator === "") {
            this.prev = "";
        };
        
        this.current += input;
  
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };


    updateDisplay() {
        console.log("---------> updateDisplay()")
        // if current number is empty but prev not
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
        //console.log("1: " + (this.prev === "") + " value: " + this.prev);
        //console.log("2: " + (this.current === "") + " value: " + this.current);

        if( this.prev != "" && this.current === "") {
            console.log("a)");
            display.value = this.prev;
            return;
        };

        // if everything is empty, set current to 0;
        if(this.prev === "" && this.current === "") {
            console.log("b)");
            this.current = "0";
            display.value = this.current;
            return;
        };

        // if prev is zero and current is empty, display prev
        if(this.prev == "0" && this.current === "") {
            console.log("c)");
            display.value = this.prev;
            return;
        };
        console.log("d)");
        display.value = this.current;


        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
        // if nothing in current
    };

    setBackspace () {
        console.log("---------> setBackspace()");
        // if this prev is empty, calculation was done, so prev is not empty. set current to prev and prev empty
        if(this.current === "") {
            this.current = this.prev;
            this.prev = "";
        }
        if(this.current != "") { // if this current isn't empty
            console.log("a");
            this.current = this.current.toString().slice(0, -1);
            if(this.current === "" || this.current === "-") {
                console.log("a2");
                this.current = "0";
            };
            if(this.current.toString().slice(-1) === ".") { // if after delete, last element is ".", delete that too
                console.log("a3");
                console.log(this.current);
                this.current = this.current.toString().slice(0, -1);
            }
            return;
        };

       
        console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
    };

    setSign() {
        console.log("-------> setSign()");
        if(this.current != "" && this.current != "0") { // if current is not empty and not zero
            console.log("a)");
            // check if minus is already appended, if so, remove so it will be positive again
            if(this.current.toString()[0] === "-") {
                console.log("a1)");
                this.current = this.current.toString().slice(1);
                return;
            };
            console.log("a3)");
            this.current =  "-" + this.current;
            console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);
        };
        if(this.prev != "" && this.prev != "0" && this.current === "") {
            console.log("b)")
            if(this.prev.toString()[0] === "-") {
                console.log("b1)");
                this.prev = this.prev.toString().slice(1);
                return;
            };
            console.log("a3)");
            this.prev =  "-" + this.prev;
            console.log(" this.prev: " + this.prev + "  this.operator: " + this.operator + "  this.current: " + this.current);

        }
    }

    setBtnColor (btn) {
        console.log("--------> setBtnColor()");
        // set everything back to normal
        btnAdd.style.backgroundColor = this.btnColorNormal;
        btnSubtract.style.backgroundColor = this.btnColorNormal;
        btnMultiply.style.backgroundColor = this.btnColorNormal;
        btnDivide.style.backgroundColor = this.btnColorNormal;
        if(btn === undefined) return; // if an operator button was pressed btn != undefined

        if(btn === "+") {
            btnAdd.style.backgroundColor = this.btnColorActive;
        };
        if(btn === "-") {
            btnSubtract.style.backgroundColor = this.btnColorActive;
        };
        if(btn === "*") {
            btnMultiply.style.backgroundColor = this.btnColorActive;
        };
        
        if(btn === "/") {
            btnDivide.style.backgroundColor = this.btnColorActive;
        };  
    };
}; 

// create object
let calc = new Calculator();
const display = document.querySelector("#display");
display.value = "0";
// add event handlers for number buttons
const btnNumbers = document.querySelectorAll("#btn-num");
const btnOperators = document.querySelectorAll("#btn-op");
const btnAdd = document.querySelector("#btn-add"); // for changing color if active
const btnSubtract = document.querySelector("#btn-subtract"); // for changing color if active
const btnMultiply = document.querySelector("#btn-multiply"); // for changing color if active
const btnDivide = document.querySelector("#btn-divide"); // for changing color if active
const btnSign = document.querySelector("#btn-sign");
const btnEqual = document.querySelector("#btn-equal");
const btnAC = document.querySelector("#btn-ac");
const btnBackspace = document.querySelector("#btn-backspace");

btnNumbers.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        calc.setNumber(e.target.value);
        calc.updateDisplay();
        calc.setBtnColor();
    });
});

btnAdd.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
    calc.setBtnColor(e.target.value);
});

btnSubtract.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
    calc.setBtnColor(e.target.value);
});

btnMultiply.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
    calc.setBtnColor(e.target.value);
});

btnDivide.addEventListener("click", (e) => {
    calc.setOperator(e.target.value);
    calc.setBtnColor(e.target.value);
});


btnEqual.addEventListener("click", (e) => {
    //console.log("-> "+ e.target.value);
    calc.operate(e.target.value);
    calc.setBtnColor();
});

btnBackspace.addEventListener("click", (e) => {
    calc.setBackspace();
    calc.updateDisplay();
    calc.setBtnColor();
});

// button +/-
btnSign.addEventListener("click", (e) => {
    calc.setSign();
    calc.updateDisplay();
    calc.setBtnColor();
});

btnAC.addEventListener("click", (e) => {
    calc.allClear();
    calc.setBtnColor();
});



// next: keyboard support
document.addEventListener("keydown", (e) => {
    console.log(e.code);
});

/*btnOperators.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        calc.setOperator(e.target.value);
        calc.setBtnColor(e.target.value);
    });
});
*/