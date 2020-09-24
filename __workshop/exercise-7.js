// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(lists) {
  let longElements = lists.filter(list => list.length > 5);
  return longElements;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);


// Create more test cases.
["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"]
["Vanya", "Five", "Luther", "Klaus", "Ben", "Alison", "Diego"]
["Eleanor", "Chidi", "Tahani", "Jason", "Janet", "Michael"]
// This is needed for automated testing (more on that later)
module.exports = keepLong;