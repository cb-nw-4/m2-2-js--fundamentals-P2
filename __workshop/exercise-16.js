// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  let arr= [];
  for (num = num1; num <= num2; num++) {
    let arrN = num.toString().split("");
    let sum = 0;
    arrN.forEach(element => sum += Math.pow(element, 3)); 
    if (num === sum) 
    arr.push(num); 
  }
  return arr;
  // num1 and num2 are Numbers
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.
console.log(findNumbers(10, 1500));
// This is needed for automated testing (more on that later)
module.exports = findNumbers;
