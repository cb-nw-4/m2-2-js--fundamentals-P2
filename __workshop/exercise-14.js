// Exercise 13
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  let letterCount = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == char) {
      letterCount += 1;
    }
  }
  return letterCount;
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.

console.log(countChar("abracadabra"));

console.log(countChar("she aced the final exam"));

// This is needed for automated testing (more on that later)
module.exports = countChar;
