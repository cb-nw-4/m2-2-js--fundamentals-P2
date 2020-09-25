// Exercise 1.4
//
// Write a function that accepts a name and returns the name as first name and last name.
// Remove the middle name, if there is one.
// - This function should still work if there is no middle name.
// - If the string has only one name, e.g. "Adele", it should return that name
// -  If there are multiple middle names this function should still work.
//
// Example:
// shortenName(Morty Antoine Smith") should return "Morty Smith"
// shortenName(Morty Smith") should return "Morty Smith"
// shortenName(Morty") should return "Morty"
// shortenName(Morty Antoine Fred Bacon Smith") should return "Morty Smith"

//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  let arrayName = string.split(" ");
  if (arrayName.length > 1) {
    return arrayName[0] + " " + arrayName[arrayName.length -1]; 
  } 
  return arrayName[0];
}



const arr = [2, 3, 5, 2];

function someFunction(){
  arr.forEach(function(element, i){
    console.log(element, i);
  }) // undefined;
  arr.map(function(element, i){
    console.log(element, i);
    return element * 2;
  })// new Array returns [4, 6, 10, 4];

  arr.filter(function(element, i){
    return element > 10
  })// new Array returns []

  arr.filter(function(element, i){
    return element > 2
  })// new Array returns [3, 5]

  arr.find(function(element, i){
    return element > 2
  })// new Array returns 3

  arr.find(function(element, i){
    return element > 10
  })// new Array returns undefined

  arr.includes(3);  // true
  arr.includes(0);  // false

  arr.every(function(element, i){
    return element > 2
  }) // false
  arr.some(function(element, i){
    return element > 2
  }) // true
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));
console.log(removeMiddleName("Smith"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
