// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  let sumOfGrades = num1 + num2 + num3 + num4 + num5;
  let averageGrades = sumOfGrades/5;
  return averageGrades
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.

console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.
(3, 1, 1, 1, 1)
(98, 45, 89, 67, 55)
(10, 12, 15, 4, 7)
// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
