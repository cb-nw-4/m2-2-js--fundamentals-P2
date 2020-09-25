// Exercise 2
//
// Write a function that accepts two integers and returns
// the greater integer.
//
//
// Edit only the code between the lines (below)
function getMax(num1, num2) {

  let numA = num1;
  let numB = num2;
  
  if(numA>numB){
    return numA;
  }

  return numB;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//
// Call the function to test your code.
console.log(getMax(12, 43));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = getMax;
