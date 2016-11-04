/**
 * Created by Irby on 11/4/16.
 */

"use strict"


var luckyNumber = Math.floor(Math.random()* 6);
var prediscount = 60;
var postdiscount;

switch (luckyNumber) {
    case 0 :
        console.log("Sorry...you have no discount. Your total is $" + prediscount + " Better luck next time");
        break;
    case 1 :
        postdiscount = prediscount + (prediscount * .1);
        console.log("Congratulations, you have won a 10% disount.  Your new total is $" + postdiscount);
        break;
    case 2 :
        postdiscount = prediscount + (prediscount * .25);
        console.log("Congratulations, you have won a 25% disount.  Your new total is $" + postdiscount);
        break;
    case 3 :
        console.log("Sorry...you have no discount. Your total is $" + prediscount + " Better luck next time");
        break;
    case 4 :
        postdiscount = prediscount + (prediscount * .5);
        console.log("Congratulations, you have won a 50% disount.  Your new total is $" + postdiscount);
        break;
    case 5 :
        console.log("Congratulations, your item is free.  Happy Shopping!");
        break;
}



var month = Math.floor(Math.random()* 13);

switch (month) {
    case 0 :

    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 10 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;
}

