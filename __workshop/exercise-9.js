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
  let newarray=list.filter(function(tree){
    let words=tree.length>4;
    return words;
  });

  let helloword= newarray.map(function(entry){
    let newtext='Hello';
    let newarray2= newtext.concat(' ').concat(entry);
    return newarray2;
  });

  return helloword;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(greetLong(["Scott", "Bob", "Ric", "Jim"]));

// Create more test cases.
console.log(greetLong(["Renaud", "ELizabeth", "John", "Luke"]));
// This is needed for automated testing (more on that later)
module.exports = greetLong;
