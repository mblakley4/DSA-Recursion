'use strict'

// What is the input to the program?
// What is the output of the program?
// What is the input to each recursice call?
// What is the output of each recursive call?


// Write a recursive function that counts how many sheep jump over the fence.
// That number should be the number of sheep you have.
// The function should display the number along with the message
// "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3 - Another sheep jump over the fence
// 2 - Another sheep jump over the fence
// 1 - Another sheep jump over the fence
// All sheep jumped over the fence


function countSheep(num) {
  //base case
  if (num === 0) {
    return 'All sheep jumped over the fence'
  }
  //general case
  console.log(num + ' - Another sheep jump over the fence');
  return countSheep(num - 1)
}
