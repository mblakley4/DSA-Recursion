'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?

// Write a function that reverses a string.
// Take a string as input, reverse the string, and return the new string.


function reverseString(string) {
  if (string === '') {
    return ''
  }

  return reverseString(string.slice(1)) + string[0]
}
