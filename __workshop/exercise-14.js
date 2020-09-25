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
  // let arr=str.split('');
  // let count=0;
  // let res=arr.forEach(function(word){
  //   if(word===char){count++;}
  //   return count;
  // });
  // return res;

  const arr=str.split('');
  let count=0;
  for(let i=0;i<arr.length; i++){
    if(arr[i]===char){
      count++;
    }
  }
  console.log(arr);
  return count;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(countChar("BananaBabyBubbles", "a"));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countChar;
