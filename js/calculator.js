/**
 * Created by Irby on 11/16/16.
 */
(function (){
    "use strict"


var leftOp  = document.getElementById("leftOp");
var operator = document.getElementById("operator");
var rightOp = document.getElementById("rightOp");



// Clear all 3 displays
var clearDisplay = function() {

    leftOp.value = "";
    operator.value = "";
    rightOp.value = "";
};

// Convert key presses into Data
    var inputToScreen = function() {
        // use "this.innerHTML" to target which key press
        // if an operator key is pressed, enter input into middle screen "operator"
        if (this.innerHTML == "*" || this.innerHTML == "+" || this.innerHTML == "-" || this.innerHTML == "/"){
            operator.value = this.innerHTML;
            // input to left screen "leftOP" if operator value is empty
        } else if (operator.value == '') {
            leftOp.value += this.innerHTML;
            // input to right screen "rightOp" if a value is present
        } else {
            rightOp.value += this.innerHTML;
        }

        // execute calculation when = key is pressed
        if (this.innerHTML == "=") {
            var x = parseFloat(leftOp.value);
            var y = parseFloat(rightOp.value);
            var oper = operator.value;
            var result;
            leftOp.value = "";
            operator.value = "";
            rightOp.value = "";
            switch(oper) {
                case "+":
                    result = x + y;
                    break;
                case "-":
                    result = x - y;
                    break;
                case "*":
                    result = x * y;
                    break;
                case "/":
                    result = x / y;
                    break;
            }
            //display result in left screen "leftOp"
            leftOp.value = result;
            operator.value = oper
            }

        };

    addKey.addEventListener("click", inputToScreen);
    sevenKey.addEventListener("click", inputToScreen);
    eightKey.addEventListener("click", inputToScreen);
    nineKey.addEventListener("click", inputToScreen);
    subKey.addEventListener("click", inputToScreen);
    fourKey.addEventListener("click", inputToScreen);
    fiveKey.addEventListener("click", inputToScreen);
    sixKey.addEventListener("click", inputToScreen);
    multKey.addEventListener("click", inputToScreen);
    oneKey.addEventListener("click", inputToScreen);
    twoKey.addEventListener("click", inputToScreen);
    threeKey.addEventListener("click", inputToScreen);
    divKey.addEventListener("click", inputToScreen);
    zeroKey.addEventListener("click", inputToScreen);
    equalKey.addEventListener("click", inputToScreen);
    cKey.addEventListener("click", clearDisplay);
    sqrtKey.addEventListener("click", inputToScreen);
    flipSign.addEventListener("click", inputToScreen);
    percentKey.addEventListener("click", inputToScreen);
    decKey.addEventListener("click", inputToScreen);
})();





























