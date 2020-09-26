// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  // const letterArray = str.split("");

  // let count = 0;
  // letterArray.forEach(function (ltr) {
  //   if (ltr === "B") count += 1;
  // });

  // return count;
  let newArray = str.split('');
  let charCount = 0;
  newArray.filter(function(letter) {
    if (letter === "B") {
      charCount += 1;
    }
  })
  return charCount;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countBs("BananaBabyBubbles"));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countBs;
