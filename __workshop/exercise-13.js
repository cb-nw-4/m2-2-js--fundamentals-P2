// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  // const letterArray = str.split("");

  // let count = 0;
  // letterArray.forEach(function (ltr) {
  //   if (ltr === "B") count += 1;
  // });

  const arr=str.split('');
  let count=0;
  for(let i=0;i<arr.length; i++){
    if(arr[i]==='B'){
      count++;
    }
  }
  console.log(arr);
  return count;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countBs("BananaBlueberryBabyBubbles"));

// Create more test cases.
console.log(countBs("BakeABananaBlueBerryBubbleBretzel"));
// This is needed for automated testing (more on that later)
module.exports = countBs;
