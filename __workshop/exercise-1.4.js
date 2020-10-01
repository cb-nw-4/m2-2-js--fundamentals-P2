// Help searhcing 
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
  let arrayName = string.split(' ')
  let wordCount = arrayName.length;
  if  (wordCount === 1){
    console.log(string)

  } else{
    console.log(arrayName[0]);

    console.log(arrayName[arrayName.length -1])


  }
  // complete the function
  // if there is one word return the first word
  // if there is two or more return the first and last 
  console.log(wordCount)
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Kim Smith"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
