// Exercise 5
//
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function itemIsPresent(inArray, item) {
  
  let isPresent = false;
  let foundIndex = inArray.indexOf(item);

  if(foundIndex !=-1){ 
    isPresent = true;
  }

  return isPresent;
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
console.log(itemIsPresent(myArray, "unicorn")); // false
// This is needed for automated testing (more on that later)
module.exports = itemIsPresent;
