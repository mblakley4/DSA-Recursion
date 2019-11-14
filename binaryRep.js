'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?

// Write a recursive function that prints out the binary
// representation of a given number. For example, the
// program should take 3 as an input and print 11 as
// output, or 25 as an input and print 11001 as an output.
// Note that the binary representation of 0 should be 0.

//input: a number
//output: a binary number
//recursion input: num/2
//recursion output: num either 1 or 0

function binary(num) {
    if (num === 0) {
        return '0';
    }
    const dividedNum = Math.floor(num/2);
    const remainder = num % 2;
    if (dividedNum === 0) {
        return `${remainder}`;
    }
    return binary(dividedNum) + remainder.toString();
};

console.log(binary(25));
