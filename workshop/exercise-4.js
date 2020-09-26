// Exercise 4
//
// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
// COMPLETE
// Edit only the code between the lines (below)
// -----------------------------------------------------------------

function calculateAverage(num1, num2, num3, num4, num5) {
  // let total = num1 + num2 + num3 + num4 + num5;
  // let avg = total/5;
  // return Math.round(avg);

  let total = 0
  let grades = [num1, num2, num3, num4, num5];
  grades.forEach (grade => {
    total += grade;
  })
  let avg = total / grades.length;
  return Math.round(avg)
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Call the function to test your code.
console.log(calculateAverage(3, 1, 1, 1, 1));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
