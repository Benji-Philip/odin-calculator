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

// if input is a number then add it to the farray or concat with last element if that is a number
// if input is an operator then do then add it to the array and wait for input of numbers
// if input is another number after an operator then add it to the end of an array
// if input is another operator then do tha math of the previous two numbers, clean the array and push the new number then add the operator

function updateOnArrayChange() {
    let displayText = document.getElementById("display-text");
    let displaySubText = document.getElementById("display-sub-text");
    array.forEach(element => {
        
    });
}

//event listener

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
    let button = e.target.id;
    switch (button) {
        case "all-clear":
            arrayOfInputs = [];
            break;
        case "delete":
            
            break;
        case "divide":
            arrayOfInputs.push["/"];
            break;
        case "multiply":
            arrayOfInputs.push["*"];
            break;
        case "add":
            arrayOfInputs.push["+"];
            break;
        case "subtract":
            arrayOfInputs.push["-"];
            break;
        case "equal-to":
            
            break;
        case "period":
            arrayOfInputs.push["."];
            break;
        case "0":
            arrayOfInputs.push[0];
            break;
        case "1":
            arrayOfInputs.push[1];
            break;
        case "2":
            arrayOfInputs.push[2];
            break;
        case "3":
            arrayOfInputs.push[3];
            break;
        case "4":
            arrayOfInputs.push[4];
            break;
        case "5":
            arrayOfInputs.push[5];
            break;
        case "6":
            arrayOfInputs.push[6];
            break;
        case "7":
            arrayOfInputs.push[7];
            break;
        case "8":
            arrayOfInputs.push[8];
            break;
        case "9":
            arrayOfInputs.push[9];
            break;
        default:
            break;
    }
});