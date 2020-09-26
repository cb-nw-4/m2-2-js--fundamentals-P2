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
  return list.filter(function (listItem) {
    if (listItem % 2 !== 0) {
      return listItem;
    }
  });
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Call the function to test your code.
console.log(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Create more test examples.

console.log(removeEvens([5, 10, 15, 20, 25, 30]));

console.log(removeEvens([100, 101, 102, 103, 104, 105]));

// This is needed for automated testing (more on that later)
module.exports = removeEvens;
