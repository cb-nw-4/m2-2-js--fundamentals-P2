// Exercise 12
//
// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getLetterGrade(grades) {
  let average = grades.reduce((a, b) => a + b, 0) / grades.length;
  if (average < 60) {
    return "F";
  }
  else if (average < 70) {
    return "D";
  }
  else if (average < 80) {
    return "C";
  }
  else if (average < 90) {
    return "B";
  }
  else if (average <= 100) {
    return "A";
  }
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Create more test cases.
console.log(getLetterGrade([99, 95, 80, 86, 59, 78, 88, 91]));
// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
