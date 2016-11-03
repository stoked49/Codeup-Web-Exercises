/**
 * Created by Irby on 11/3/16.
 */
"use strict";



// Exercise 3a

var i = ((70+80+95)/3);
if (i>80){
    console.log("You're Awesome");
} else {
    console.log("You need to practice more");
}



// Exercise 3b

var cam = 180;
var discount = 10;
if (cam>200) {
    var camfinal = cam - discount;
    console.log("Cameron you have earned a discount of \$" + discount + " and your total is \$" + camfinal);
} else {
    console.log("Cameron your total is \$" + cam);
}

var ryan = 250;
var discount = 10;
if (ryan>200) {
    var ryanfinal = ryan - discount;
    console.log("Ryan you have earned a discount of \$" + discount + " and your total is \$" + ryanfinal);
} else {
    console.log("Ryan your total is \$" + ryan);
}

var geo = 180;
var discount = 10;
if (geo>200) {
    var geofinal = geo - discount;
    console.log("George you have earned a discount of \$" + discount + " and your total is \$" + geofinal);
} else {
    console.log("George your total is \$" + geo);
}



// Exercise 3c

var flipACoin = Math.floor(Math.random()* 2);
if (flipACoin = 0) {
    console.log("Buy a car");
} else {
    console.log("Buy a house");
}