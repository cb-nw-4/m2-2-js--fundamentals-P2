// Exercise 8
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that adds "Hello " to every element of an array of names
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function greet(list) {
  return list.map(function (name) {
    sayHello = "Hello " + name;
    return sayHello;
  });
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greet(["David", "Billy", "Lisa", "Jennifer"]));

// Create more test cases.

console.log(greet(["Bonnie", "Clyde", "Lone Ranger"]));

console.log(greet(["Ann", "Bob", "Joe", "Lou"]));


// This is needed for automated testing (more on that later)
module.exports = greet;
