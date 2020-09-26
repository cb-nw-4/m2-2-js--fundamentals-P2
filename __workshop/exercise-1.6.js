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
  let newArray = array.filter(element => {
    if(element === string) return false
    else return true
  })
  return newArray
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeStringFromArray(["I", "bacon", "you", "she"], "bacon"));

// Create more test examples.

console.log(removeStringFromArray(["Hi", "how", "are", "you"], "today?"));

console.log(removeStringFromArray(["Today", "is", "the", "23rd", "of", "September"], "in the year 2020"));


// This is needed for automated testing (more on that later)
module.exports = removeStringFromArray;
