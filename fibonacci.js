'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?

// Write a recursive function that prints the Fibonacci sequence
// of a given number. The Fibonacci sequence is a series of numbers
// in which each number is the sum of the 2 preceding numbers.
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13.
// The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

//input: number
//output: array of num
//recursion input: num - 1 and num - 2
//output: add the 2 previous nums

function fibonacci(num) {
    if (num === 1) {
        return [0];
    }
    if (num === 2) {
        return [1, 1];
    }
    const arr = fibonacci(num - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}
