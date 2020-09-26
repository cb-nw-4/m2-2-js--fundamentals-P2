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
  let arr = string.split(" ");
  let l = arr.length;
  if (l>1) {
  let newarr = arr.slice(0, 1);
  let newarr2 = arr.slice (l-1,l);
  return newarr + " " + newarr2}
  else  ;
  return arr.toString();
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// Create more test examples.
console.log(removeMiddleName("Morty Antoine Smith Morty Antoine Smithwicks"));
console.log(removeMiddleName("Morty Antoine Smith Morty Antoine Beau's"));
console.log(removeMiddleName("Jimminy"));

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
