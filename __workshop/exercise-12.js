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
  // const numericalGrade =
  //   grades.reduce(function (a, b) {
  //     return a + b;
  //   }) / grades.length;

  let sum=0;
  for(let i=0;i<grades.length;i++){
    sum=sum+grades[i];
  }
  let avg=Math.round(sum/grades.length);
  
  let letterGrade = "A";

  if (avg < 90) letterGrade = "B";
  if (avg < 80) letterGrade = "C";
  if (avg < 70) letterGrade = "D";
  if (avg < 60) letterGrade = "F";

  return letterGrade;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Create more test cases.
console.log(getLetterGrade([87, 67, 90, 88, 74, 97, 84, 66]));
// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;
