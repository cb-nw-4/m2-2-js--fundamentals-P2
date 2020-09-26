// Exercise 7
// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function keepLong(list) {
  // console.log(list)
  return list.filter(function(name){
    if (name.toString().length > 5){
    return name;
    }
  })

  // list.forEach(function(name) {
  //   if (name.toString().length > 5) {
  //     return name;
  //   }
  //   console.log(name);
  // })

  // return list.forEach(function(element){
  //   let nameOnly = element.toString(); <- Put this line in a function?
  //   console.log(nameOnly);
  //   let nameLength = nameOnly.length;
  //   console.log(nameLength)
  //   if (nameLength > 5) {
  //   return nameOnly;
  //   }
  // })
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(
  keepLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = keepLong;
