//Help Searhcing 
// Exercise 1.6
//
// Write a function that accepts an array of strings and a string.
// It should return the array without the string.
//
// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
//
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeStringFromArray(array, string) {
  // remove string from array 
  // find the index of the string 
  let index = array.indexOf(string);
  let answer = array.splice(index, 1);
  console.log(answer)
  //then removes the selection 
  



  // complete the function
  return array
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;
