/**
 * Created by Irby on 11/16/16.
 */
// (function (){
//     "use strict"
// // Convert key presses into Data
//     var key1 = document.getElementById("key1");
//     key1.addEventListener("click", addDigit)
//
// })();

// Determines button clicked via id
function myFunction(id) {
    document.btnPressed.result.value+=id;
}

// Clears calculator input screen
function clearScreen() {
    document.btnPressed.result.value="";
}

// Calculates input values
function calculate() {
        var input = (document.btnPressed.result.value);
        document.btnPressed.result.value=input;
}