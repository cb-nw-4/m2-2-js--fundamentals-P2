// Exercise 15
//
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function filterNonUnique(arr) {
  return arr.filter(function(num) {
    return arr.indexOf(num) === arr.lastIndexOf(num);
  });
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(filterNonUnique([1, 2, 3, 3, 4, 5, 6, 7, 7, 8]));

// Create more test cases.
console.log(filterNonUnique([1, 1, 1, 1, 1]));
console.log(filterNonUnique([8, 8, 9, 8]));
// This is needed for automated testing (more on that later)
module.exports = filterNonUnique;
