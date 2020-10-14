// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(num1, num2, num3, num4, num5) {
  // code here
  const average = (num1 + num2 + num3 + num4 + num5)/ calculateAverage.length
 return  Math.round(average)
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));
console.log(calculateAverage(30, 50, 10, 14, 1));


// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
