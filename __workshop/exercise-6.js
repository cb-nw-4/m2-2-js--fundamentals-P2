// Exercise 6
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeEvens(list) {
  return list.filter(function (number) {
    return (number % 2 !== 0);
  });
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function to test your code.
console.log(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Create more test examples.
console.log(removeEvens([2, 2, 4, 4, 6, 6, 8, 8, 8, 10]));
console.log(removeEvens([3, 3, 5, 5, 7, 7, 9, 9, 9, 11]));
console.log(removeEvens([3]));

// This is needed for automated testing (more on that later)
module.exports = removeEvens;
