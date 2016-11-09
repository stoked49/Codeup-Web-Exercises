/**
 * Created by Irby on 11/7/16.
 */
"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.


   do {
       var response = prompt("What is your name?");
   } while (response == 0);

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome " + response + ". You have a great name.");

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var confirmed = confirm(response + ", do you like pizza? ");
if (confirm("Awesome!  I love pizza too!")) {

}
