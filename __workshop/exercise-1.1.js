// Exercise 1.1
//
// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
let arr=countNames('Philip George Charles Orleans Michael');
let len=arr.length;
console.log(len);
function countNames(fullName) {
  return fullName.split(" ");
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(countNames("Morty Antoine Smith"));
// Create more test examples:

//
// This is needed for automated testing (more on that later)
module.exports = countNames;
