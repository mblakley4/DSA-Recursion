'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?

// Write a recursive function that splits a string based on a
// separator (similar to String.prototype.split). Don't use
// JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ['02', '20', '2020']

function stringSplit(str, splitter) {
  if (!splitter) {
        return [...str];
    }
    if(str.indexOf(splitter) === -1) {
        return [str];
    }
    return [str.slice(0, str.indexOf(splitter)), ...stringSplit(str.slice(str.indexOf(splitter) + 1), splitter)];
}
