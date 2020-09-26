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
  // num1 and num2 are Numbers
  let array = [];
  for (let x = num1; x <= num2; x++) {
    for (let y = num1; y <= num2; y++) {
      for (let z = num1; z <= num2; z++) {
        let sum = Math.pow(x, 3) + Math.pow(y, 3) + Math.pow(z, 3);
        let number = (x * 100) + (y * 10) + z;
        if (sum == number) {
          array.push(number);
        }
      }
    }
  }
  return array;
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

console.log(findNumbers(0, 20000));

console.log(findNumbers(0, 5000));

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
