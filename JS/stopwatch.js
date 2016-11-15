/**
 * Created by Irby on 11/15/16.
 */

(function () {
"use strict";

    // start the timer
    function startTimer() {
        stopwatchInterval = setInterval(function () {
            seconds += .1;
            display.innerHTML = seconds.toFixed(1).replace(".", ":");
        }, interval);
    }

    // stop the timer
    function stopTimer() {
        clearInterval(stopwatchInterval);
    }

    // reset the timer
    function resetTimer() {
        display.innerHTML = 0;
        seconds = 0;
    }

    var seconds = 0;
    var stopwatchInterval;
    var interval = 100;

    // three buttons
    var buttons = {
        start: document.getElementById("start"),
        stop: document.getElementById("stop"),
        reset: document.getElementById("reset")
    };

    var display = document.getElementById("display");

    buttons.start.addEventListener("click", startTimer);
    buttons.stop.addEventListener("click", stopTimer);
    buttons.reset.addEventListener("click", resetTimer);

})();