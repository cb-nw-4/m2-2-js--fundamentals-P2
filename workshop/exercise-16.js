// Exercise 16
//
// Write a JavaScript program that returns an array of ALL the numbers
// between and including two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.

// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function findNumbers(num1, num2) {
  // num1 and num2 are Numbers
  let newarr = [];
  let i=num1;
  const j=num2;
  for (i;i<=j;i++)
  {
    let arr = i.toString().split("");
    let k = arr.length;
    let sum = 0;
    for(l=0;l<k;l++)
      {
        arr[l]=Number(arr[l]);
        sum = sum + Math.pow(arr[l],3);   
      }
      //console.log(arr);
      if (i === sum) newarr.push(i);  
  }
return newarr;  
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
