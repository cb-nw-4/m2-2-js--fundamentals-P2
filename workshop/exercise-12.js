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
  // grades is an array of numbers
let avg = 0;
grades.forEach(element => {
  avg = avg + element;
  return avg;  
});
avg = Math.round(avg / grades.length);
if (avg >= 90) return "A";
else if (avg >= 80) return "B";
else if (avg >= 70) return "C";
else if (avg >= 60) return "D";
else return "F";

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
