// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function itemIsPresent(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return true;
    }
  }
      return false;
  // code here
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Test case
const myArray = [
  "bacon",
  "purple",
  "door",
  "window",
  "exist",
  "code",
  "program",
  "funky",
];

// Call the function to test your code.
console.log(itemIsPresent(myArray, "funky")); // true
console.log(itemIsPresent(myArray, "elephant")); // false

// Create more test cases
const array = [
  "blue",
  "purple",
  "triangle",
  "horse",
  "window",
  "car",
  "glass",
  "bottle",
];

console.log(itemIsPresent(array, "triangle"));
console.log(itemIsPresent(array, "square")); 
// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;
