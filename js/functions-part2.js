/**
 * Created by Irby on 11/8/16.
 */

"use strict"

var firstNumber;
var secondNumber;
var res = 0;

function askForNumbers() {
    firstNumber = parseFloat(prompt("What is your first value of your problem?"));
    secondNumber = parseFloat(prompt("What is your second value of your problem?"));
}

function add (x, y) {
    return x + y;
}


function subtract (x, y) {
    return x - y;
}


function multiply (x, y) {
    return x * y;
}


function divide (x, y) {
    return x / y;
}

var oper = prompt("What type of math problem do you want to try?");
switch(oper){
    case "add":
        askForNumbers();
        res = add(firstNumber, secondNumber);
        break;
    case "subtract":
        askForNumbers();
        res = subtract(firstNumber, secondNumber);
        break;
    case "multiply":
        askForNumbers();
        res = multiply(firstNumber, secondNumber);
        break;
    case "divide":
        askForNumbers();
        res = divide(firstNumber, secondNumber);
        break;
    default:
        alert("Invalid function, verify correct spelling.")
}

    console.log(res);
alert("Your answer is " + res);

