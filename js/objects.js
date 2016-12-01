/**
 * Created by Irby on 11/10/16.
 */
(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    var person = new Object();
    console.log(typeof person);

    // TODO: Create firstName and lastName properties in your person object; assign your name to them

    person.firstName = "Pierre";
    person.lastName = "Irby";
    console.log(person);
    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    person.sayHello = function() {
        alert("Hello " + person.firstName + ". Is your last name " + person.lastName + "?")
    };

    person.sayHello();

    // Say hello from the person object.
    // person.sayHello();
})();

