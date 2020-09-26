// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  // code here
  let ans2 = ((num1 + num2 + num3 + num4 + num5)/5);
  return Math.round(ans2);
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.
console.log(calculateAverage(0, 60, 55, 50, 100));
console.log(calculateAverage(100, 60, 100, 50, 100));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
