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
  // str and char are both strings
  const letterArray = str.split("");
  let count = 0;
  letterArray.forEach(function (letter) {
    if (letter === char)
      count += 1;
  });
  return count;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.
console.log(countChar("Bubble", "a"));
console.log(countChar("Bubble", "B"));


// This is needed for automated testing (more on that later)
module.exports = countChar;
