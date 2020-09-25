// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  let average = grades.reduce((a, b) => a + b, 0) / grades.length;
  return Math.round(average);
  }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(calculateAverage([76, 60, 83, 100, 78]));

// Create more test cases.
console.log(calculateAverage([38, 40, 2, 10, 29]));

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
