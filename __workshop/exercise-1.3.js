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
let montreal = 'This city if full of construction. You see orange cones, hear drilling machines and the detour sign everywhere.';
console.log(characterCount(montreal));
function characterCount(string) {
  // complete the function
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

// This is needed for automated testing (more on that later)
module.exports = characterCount;
