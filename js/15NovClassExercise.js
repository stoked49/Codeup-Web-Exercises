/**
 * Created by Irby on 11/15/16.
 */


(function () {

   // write a function `chunk` that splits an array into chunks
   // of 3
   // ex
   // > chunk([1,2,3,4,5,6,7])
   //   [[1,2,3], [4,5,6], [7]]
   // modify the function to take in a parameter for chunk size

   var n = prompt("Please enter the max array size per chunk.");
   var chunk = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
   while(chunk.length) {
       console.log(chunk.splice(0,n));
   }

})();

(function () {
    // python example
    // write a function that generates a range of numbers as an array
    // ex
    // > range(1,5)
    //   [1, 2, 3, 4]
    // modify the function such that you can pass in a third parameter
    // for the step
    // ex
    // > range(2, 11, 2)
    //   [2, 4, 6, 8, 10]
    // can the third parameter be optional (default to 1)?
    // can you create a range in reverse order? i.e. `range(5,2)


    var newArrayFunction = function range(start, stop, step){
        var newArray=[], i=start;
        while(i<stop) {newArray.push(i); i += step;}
        return newArray;
    };
console.log(newArrayFunction(1,30,3));

})();



// write a function that takes an array, and returns an object
// whose keys are each value in the array, and whose values
// are the number of occurances of each key
// ex
// > getCount([6, 7, 4, 4])
// {6: 1, 7: 1, 4: 2}



(function () {
    // give me the unique values in an array as keys in an object
    // and their frequencies as the object's values
    function arrayToObject(array) {
        var counts = {};
        array.forEach(function(item) {
            counts[item] = 0;
        });
        //set the proper values for each key
        array.forEach(function(item) {
            counts[item] += 1;
        });
        return counts;
    }
    console.log(arrayToObject([1,2,3,2,4,4,4,1]));
})();



// write a function that checks if a string is a palindrome
// *bonus*: ignore special characters, whitespace, and casing

// t9 calculator
// write a function that accepts a string and returns the number
// of keypresses it would take to create that string with t9

// convert back and forth from 24 hour to 12 hour time with 2 functions
// ex
// convertToTwentyFourHour('1:30pm') // 13:30
// convertToTwelveHourTime('14:40') // 2:20pm