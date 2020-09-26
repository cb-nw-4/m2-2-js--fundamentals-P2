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

  const myArr2 = string.split(" ");

  if (myArr2.length >= 2) {
    return myArr2[0] + " " + myArr2[myArr2.length - 1];
  } else {
    return myArr2[0];
  }
  
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// Create more test examples.
console.log(removeMiddleName("Bill Charlie Percy Ron Ginny"));
console.log(removeMiddleName("Gred Forge"));

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
