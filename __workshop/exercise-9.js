// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greetLong(["bob", "daniel"]) returns ["Hello daniel"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greetLong(list) {
  let newList = list.filter(name => {return name.length >= 4});
  let greeting = newList.map(name => {return "Hello " + name});
  return greeting;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Create more test cases.
console.log(greetLong(["Salvador Dalí", "Andy Warhol", "Roy Lichtenstein", "Claude Monet", "Yayoi Kusama"]));

// This is needed for automated testing (more on that later)
module.exports = greetLong;
