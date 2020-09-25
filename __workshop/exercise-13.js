// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
    const array = str.split("");
    let count = 0;
    array.forEach(element => {
      if (element === "B") {
        count = count + 1;
      }
    })
    return count;
  }
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countBs("BananaBabyBubbles"));

// Create more test cases.
console.log(countBs("BlueBirdBlackBagBusyBoutique"));

// This is needed for automated testing (more on that later)
module.exports = countBs;
