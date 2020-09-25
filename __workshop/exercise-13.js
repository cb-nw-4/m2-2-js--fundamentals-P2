// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  let countNumber =0;
  let matchesArray = str.match(/B/g);

  if(matchesArray !=null){
    countNumber = matchesArray.length;
  }
  return countNumber;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countBs("BananaBabyBubbles"));

// Create more test cases.
console.log(countBs("PlantbilboWater"));
console.log(countBs("BadBedBonappetit"));
// This is needed for automated testing (more on that later)
module.exports = countBs;

 /* const letterArray = str.split("");

  let count = 0;
  letterArray.forEach(function (ltr) {
    if (ltr === "B") count += 1;
  });

  return count;*/