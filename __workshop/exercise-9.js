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
  // list is an array of strings
  // return list.filter(function(name){
  //   if (name.toString().length > 3) {
  //     return name
  //   }
  // })
  // return list.map(function(name) {
  //   if (list.filter(function(element){
  //     if (element.toString().length > 3) {
  //       return element
  //     }
  //   }))
  //   return "Hello " + name;
  // })
  newList = list.filter(function(name){
    if (name.toString().length > 3){
      return name;
    }
  })
  return newList.map(function(element) {
    return "Hello " + element;
  })
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = greetLong;
