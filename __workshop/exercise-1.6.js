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
  let newArray = array.filter(function(element){
    return element != string;
  })
  return newArray;
  } 
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.
(["we", "example", "water", "carrots"], "water")

// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.