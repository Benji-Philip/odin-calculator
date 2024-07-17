//below is the workflow of the calculator

//get user number input

//get user operator input

//get number input

//get equal-to input (maybe execute even when another operator is input)

//display inputs

//display results

//all clear input resets display and input variables

//del removes last input

//get inputs into an array and use foreach to do calculations

let arrayOfInputs = [];
// [123,"+"]

// if input is a number then add it to the farray or concat with last element if that is a number
// if input is an operator then do then add it to the array and wait for input of numbers
// if input is another number after an operator then add it to the end of an array
// if input is another operator then do tha math of the previous two numbers, clean the array and push the new number then add the operator

function updateArrayChanges() {
    let displayText = document.getElementById("display-text");
    let displaySubText = document.getElementById("display-sub-text");
    if (arrayOfInputs.length === 1) {
        displaySubText.textContent = arrayOfInputs[0].toString();
        displayText.textContent = arrayOfInputs[0].toString();
    } else {
        displaySubText.textContent = arrayOfInputs[0].toString().concat(arrayOfInputs[1]);
        if (arrayOfInputs.length === 3) {
            displayText.textContent = arrayOfInputs[2].toString();
        } else {
            displayText.textContent = "0";
        }
    }
}

//event listener

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
    let button = e.target.id;
    switch (button) {
        case "all-clear":
            arrayOfInputs = [0];
            updateArrayChanges();
            break;
        case "delete":
            deleteLastInput();
            break;
        case "divide":
            inputOperator("÷");
            break;
        case "multiply":
            inputOperator("×");
            break;
        case "add":
            inputOperator("+");
            break;
        case "subtract":
            inputOperator("-");
            break;
        case "equal-to":
            break;
        case "period":
            break;
        case "0":
            inputNumber(0);
            break;
        case "1":
            inputNumber(1);
            break;
        case "2":
            inputNumber(2);
            break;
        case "3":
            inputNumber(3);
            break;
        case "4":
            inputNumber(4);
            break;
        case "5":
            inputNumber(5);
            break;
        case "6":
            inputNumber(6);
            break;
        case "7":
            inputNumber(7);
            break;
        case "8":
            inputNumber(8);
            break;
        case "9":
            inputNumber(9);
            break;
        default:
            break;
    }
});

//function to add number on input
function inputNumber(numberInput) {
    let lastItem = arrayOfInputs[arrayOfInputs.length-1];
    if (arrayOfInputs.length === 0 || typeof lastItem === "string") {
        arrayOfInputs.push(parseFloat(numberInput));
    } else if(typeof lastItem === "number" && lastItem.toString().length < 12){
        arrayOfInputs.pop();
        arrayOfInputs.push(parseFloat(lastItem.toString().concat(numberInput.toString())));
    }
    updateArrayChanges();
}

function deleteLastInput() {
    let lastItem = arrayOfInputs[arrayOfInputs.length-1];
    if (arrayOfInputs.length === 0) {
        return;
    } else if (typeof lastItem === "number" && lastItem.toString().length === 1) {
        arrayOfInputs.pop();
        if(arrayOfInputs.length === 0)
        arrayOfInputs.push(0);
    } else if (typeof lastItem === "string") {
        arrayOfInputs.pop();
    }else if(typeof lastItem === "number" && lastItem.toString().length > 1){
        arrayOfInputs.pop();
        arrayOfInputs.push(parseFloat(lastItem.toString().slice(0,lastItem.toString().length-1)));
    } 
    updateArrayChanges();
}

function inputOperator(operatorInput) {
    let lastItem = arrayOfInputs[arrayOfInputs.length-1];
    if (arrayOfInputs.length === 0) {
        return;
    } else if(typeof lastItem === "number" && arrayOfInputs.length === 1){
        arrayOfInputs.push(operatorInput);
    } else if(arrayOfInputs.length === 2){
        arrayOfInputs.pop();
        arrayOfInputs.push(operatorInput);
    }
    updateArrayChanges();
}