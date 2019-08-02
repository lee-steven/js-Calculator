let input1 = '';
let input2 = '';
let previousKeyOperator = false;
// let equalInput = '';
let operand1 = '';
let operand2 = '';
let output = document.getElementById('output');

//STORING AND OUTPUT SCREEN
var btn = document.querySelectorAll('.num');
for(let i = 0; i < btn.length; i++){

    btn[i].addEventListener('click', () => {
        let displayNum = output.textContent;


        
        if(previousKeyOperator === true){
            output.textContent = btn[i].value;
            document.getElementById('period').disabled = false;
            previousKeyOperator = false;
        } else{
            output.textContent += btn[i].value;
        }

        let countOfDecimals = (output.textContent.match(/[.]/g) || []).length;
        if(countOfDecimals === 1){
            document.getElementById('period').disabled = true;
        }
    }
)}

var typedContent = document.getElementById('output');
typedContent.contentEditable = true;
typedContent.addEventListener("keypress", () => {
    // if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 13) {
    //     return true;
    //   } else {
    //     event.preventDefault();
    //   }
});


//OPERANDS
var operandbtn = document.querySelectorAll('.operand');
for(let i = 0; i<operandbtn.length; i++){
    operandbtn[i].addEventListener('click', () => {

        //Preventing multiple operand clicks
        if(previousKeyOperator === true){
            operand1 = operandbtn[i].textContent;
        }
        //Conditional for AFTER equal sign is clicked
        else if(!operand1 && input1){
            operand1 = operandbtn[i].textContent; 
            previousKeyOperator = true;

        } else if(input1){
            input2 = output.textContent;
            operand2 = operandbtn[i].textContent;
            let calculation = operation(operand1, input1, input2);
            output.textContent = calculation;
            input1 = calculation; 
            operand1 = operand2; 
            previousKeyOperator = true;
        } else{
            input1 = output.textContent;
            operand1 = operandbtn[i].textContent;
            previousKeyOperator = true;
        }
    })
}

//EQUALS
var equalsbtn = document.getElementById('equals');
equalsbtn.addEventListener('click', ()=> {
    if(input1 && operand1){
        input2 = output.textContent;
        let calculation = operation(operand1, input1, input2);
        operand1 = '';
        output.textContent = calculation;
        input1 = calculation; 
        previousKeyOperator = true;
    }
});

//BACKSPACE
var backspace = document.getElementById('backspace');
backspace.addEventListener('click', ()=> {
    let displayVal = output.textContent;
    if(output.textContent.length >  0){
        let split = displayVal.split("");
        split.pop();
        let join = split.join("");
        output.textContent = join;
    }
});

//CLEAR 
var clearbtn = document.getElementById('clear-calc');
clearbtn.addEventListener('click', () => {
    output.textContent = ''
    input1 = '';
    input2 = '';
    operand = ''; 
});

function operation(operand, input1, input2){
    let calculation = 0;
    switch(operand){
        case '/':
            calculation = Number(input1) / Number(input2);
            break;
        case 'x':
            calculation = Number(input1) * Number(input2);
            break;
        case '-':
            calculation = Number(input1) - Number(input2);
            break;
        case '+':
            calculation = Number(input1) + Number(input2);
            break;
        case '%':
            calculation = Number(input1) % Number(input2);
            break;
    }
    return calculation;
}