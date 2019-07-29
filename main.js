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


var btn = document.querySelectorAll('button');

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', () =>
        document.getElementById('output').textContent += btn[i].value
)}

