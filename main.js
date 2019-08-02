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

        if(previousKeyOperator === true){
            output.textContent = btn[i].value;
            previousKeyOperator = false;
        } else{
            output.textContent += btn[i].value;
        }
        
    }
)}

//OPERANDS
var operandbtn = document.querySelectorAll('.operand');
for(let i = 0; i<operandbtn.length; i++){
    operandbtn[i].addEventListener('click', () => {

        //if operand1 is empty and input1 is filled
        if(!operand1 && input1){
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

        input2 = output.textContent;
        let calculation = operation(operand1, input1, input2);
        operand1 = '';
        output.textContent = calculation;
        input1 = calculation; 
        previousKeyOperator = true;
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
    }
    return calculation;
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a,b){
    return a / b;
}