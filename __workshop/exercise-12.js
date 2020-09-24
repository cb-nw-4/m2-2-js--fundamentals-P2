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
  let sum = 0;
  let letterGrade = 'F';

  sum = grades.reduce(function(a,b){
    return a+b;
  });

  let average = sum / grades.length;


  if (average<70 && average >= 60){
    letterGrade = 'D';
  } 
  else if (average<80 && average >= 70){
    letterGrade = 'C';
  }
  else if (average<90 && average >= 80){
    letterGrade = 'B';
  }
  else if (average<90 && average >= 100){
    letterGrade = 'A';
  }

  return letterGrade;

}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]
console.log(getLetterGrade([48, 95, 65, 48, 59, 78, 72, 65]));

// Create more test cases.
console.log(getLetterGrade([12,100,34,76,98,83,36,75]));

// This is needed for automated testing (more on that later)
module.exports = getLetterGrade;


 /* const numericalGrade =
    grades.reduce(function (a, b) {
      return a + b;
    }) / grades.length;

  let letterGrade = "A";

  if (numericalGrade < 90) letterGrade = "B";
  if (numericalGrade < 80) letterGrade = "C";
  if (numericalGrade < 70) letterGrade = "D";
  if (numericalGrade < 60) letterGrade = "F";

  return letterGrade;*/