// Exercise 13
//
// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countChar(str, char) {
  // str and char are both strings
  let countNumber =0;
  let chartoFind = new RegExp(char,'g');
  
  let matchesArray = str.match(chartoFind);

  if(matchesArray !=null){
    countNumber = matchesArray.length;
  }

  return countNumber;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.
console.log(countChar("PlantbilboWater","s"));
console.log(countChar("BadBedBonappetit","p"));
// This is needed for automated testing (more on that later)
module.exports = countChar;
