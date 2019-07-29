var input1 = '';
var input2 = '';
var operand = '';


//STORING AND OUTPUT SCREEN
var btn = document.querySelectorAll('button');
for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () => {
        if(!input1){
            input1 = document.getElementById('output').textContent += btn[i].value;
        }
        else{
            if(document.getElementById('output').textContent == '/' ||
                document.getElementById('output').textContent == 'x' ||
                document.getElementById('output').textContent == '-' ||
                document.getElementById('output').textContent == '+'){
                    document.getElementById('output').textContent = '';
            }
            input2 = document.getElementById('output').textContent += btn[i].value;
        }
    }
)}

//OPERANDS
var operandbtn = document.querySelectorAll('.operand');
for(let i = 0; i<operandbtn.length; i++){
    operandbtn[i].addEventListener('click', () => {
        if(input1){
            document.getElementById('output').textContent = '';
            document.getElementById('output').textContent = operandbtn[i].textContent;
            operand = operandbtn[i].textContent;
        }
    })
}

//EQUALS
var equalsbtn = document.getElementById('equals');
equalsbtn.addEventListener('click', ()=> {
    if(input1 && input2 && operand){
        document.getElementById('output').textContent = '';
        document.getElementById('output').textContent = operation(operand,input1, input2);
    }
});

//CLEAR 
var clearbtn = document.getElementById('clear-calc');
clearbtn.addEventListener('click', () => {
    document.getElementById('output').textContent = ''
    input1 = '';
    input2 = '';
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