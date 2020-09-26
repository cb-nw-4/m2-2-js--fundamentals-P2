// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  let grade = (num1 + num2 + num3 + num4 + num5) / 5;
  let finalGrade = Math.round(grade);
  return finalGrade;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.

console.log(calculateAverage(1, 2, 3, 4, 5));

console.log(calculateAverage(75, 90, 81, 86, 93));


// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
