let input1 = '';
let input2 = '';
let equalInput = '';
let operand1 = '';
let operand2 = '';
let output = document.getElementById('output');

//STORING AND OUTPUT SCREEN
var btn = document.querySelectorAll('.num');
for(let i = 0; i < btn.length; i++){

    btn[i].addEventListener('click', () => {
        
        if(!input1){
            output.textContent += btn[i].value;
        }
        else if(!input2){
            if(output.textContent === input1){
                output.textContent = '';
            }
            output.textContent += btn[i].value;
        }
    }
)}

//OPERANDS
var operandbtn = document.querySelectorAll('.operand');
for(let i = 0; i<operandbtn.length; i++){
    operandbtn[i].addEventListener('click', () => {

        if(!input1){
            input1 = output.textContent;
            operand1 = operandbtn[i].textContent;
        }

        else if(!input2){
            input2 = output.textContent;
            if(!operand1){
                operand1 = operandbtn[i].textContent;
            } else{
                operand2 = operandbtn[i].textContent;
            }
        }
    
        if(operand1 && input1 && input2){
            let newInput = operation(operand1, input1, input2);
            operand1 = operand2; 
            input1 = newInput;
            input2 = '';
            output.textContent = input1; 
        }

    })
}

//EQUALS
var equalsbtn = document.getElementById('equals');
equalsbtn.addEventListener('click', ()=> {
    
        if(!input2){
            input2 = output.textContent;
        }

        if(input1 && input2 && operand1){
            output.textContent = '';

            output.textContent = operation(operand1,input1, input2);
            equalInput = output.textContent;
            input1 = '';
            input2 = '' ;
            operand1 = '';
            operand2 = '';
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