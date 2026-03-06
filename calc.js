let a
let b 
let opr
const readline = require ("readline")
const rl = readline.createInterface({input: process.stdin})
rl.question( opr)
rl.question(a)
rl.question(b)

function operation(opr , a , b){
    if (opr == "+") {
        addition(a , b)
    }
    elseif (opr == "-")}{
        subtraction(a , b)
    }
    if (opr == "*") {
        multiply(a , b)
    }
    if (opr == "/") {
        division(a , b)
    }


function addition( a, b){
    return a + b;
}
function subtraction(a,b){
    return a - b;
}

function multiply(a , b){
    return a * b
}
function division(a , b){
    return a / b
}

