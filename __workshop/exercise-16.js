// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  let newnum=new Array;
  for(let i=num1;i<num2;i++){
    let sum=0;
    newnum=Array.from(String(i), Number);
    for(let j=0; j<newnum.length; j++){
      sum=sum+(newnum[j]**newnum.length);
    }
    if(sum===i){console.log(`${i} is an Armstrong number.`);}
  }
  
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));


// This is needed for automated testing (more on that later)
module.exports = findNumbers;
