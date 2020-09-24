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
  return list.filter(function(word){
    return word.length >= 4;
  }).map(function(word) {
    let str = "Hello ";
    return str.concat(word);     
  }); 
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Create more test cases.
console.log(greetLong(["Scott", "Boby", "Ric", "Jim"]));
console.log(greetLong(["Sco", "Bob", "Ric", "Jim"]));

// This is needed for automated testing (more on that later)
module.exports = greetLong;
