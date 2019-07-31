
let output = document.getElementById('output');
let equation = '';

//STORING AND OUTPUT SCREEN
var btn = document.querySelectorAll('button');
for(let i = 0; i < btn.length; i++){

    btn[i].addEventListener('click', () => {
        equation += btn[i].textContent;
        output.textContent = equation;  
    }
)}

//OPERANDS
var operandbtn = document.querySelectorAll('.operand');
for(let i = 0; i<operandbtn.length; i++){
    operandbtn[i].addEventListener('click', () => {

    })
}

//EQUALS
var equalsbtn = document.getElementById('equals');
equalsbtn.addEventListener('click', ()=> {

});

//CLEAR 
var clearbtn = document.getElementById('clear-calc');
clearbtn.addEventListener('click', () => {

});

function operation(o, a, b){
    let answer = 0;
    switch(o){
        case '/':
            answer = Number(a) / Number(b);
            break;
        case 'x':
            answer = Number(a) * Number(b);
            break;
        case '-':
            answer = Number(a) - Number(b);
            break;
        case '+':
            answer = Number(a) + Number(b);
            break;
    }
    return answer;
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