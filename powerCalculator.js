'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?

// Write a function called powerCalculator() that takes two parameters,
// an integer as a base, and another integer as an exponent. The function
// returns the value of the base raised to the power of the exponent.
// Use only exponents greater than or equal to 0 (positive numbers)

//input: numbers
//output: number
//recursion input: base, exp - 1
//output: multiply base by recursion

function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0'
  }

  if (exp === 0) {
    return 1
  }

  return base * powerCalculator(base, exp - 1)
}
