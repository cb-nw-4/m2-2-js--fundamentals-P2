// Exercise 1.3
//
// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ab c def") should return 6
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function characterCount(string) {
  return string.length;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(characterCount("wubba lubba dub dub"));

// Create more test examples.
console.log(characterCount("Every child is an artist. The problem is how to remain an artist once he grows up. - Pablo Picasso"));

// This is needed for automated testing (more on that later)
module.exports = characterCount;
