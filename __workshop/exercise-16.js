// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// step 1 -

// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function sumOfDig(arr) {
  return arr.reduce((accum, curr) => {
    return accum + curr;
  }, 0);
}

function cube(base) {
  return Math.pow(base, 3);
}

function findNumbers(num1, num2) {
  
  let newArr = [];
  for (let i = num1; i <= num2; i++) {
    
    let numSplit = `${i}`.split("");
    const cubedNumbers = numSplit.map((number) => {
      return cube(parseInt(number, 10));
    });

    if (sumOfDig(cubedNumbers) === i) {
      newArr.push(sumOfDig(cubedNumbers));
    }
  }
  return newArr
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
