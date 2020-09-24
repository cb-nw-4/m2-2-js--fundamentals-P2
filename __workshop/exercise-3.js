// Exercise 3
//
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)
//
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_max.asp
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function getMax(num1, num2) {
  return Math.max(num1, num2);  
}

function getMax4(func, num3, num4) {
  return Math.max(func, num3,num4);  
}

// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
/* if we don<t change the function getMax at all, we can make another function and use getMax in it. 

function getMax4(func, num3, num4) {
  return Math.max(func, num3,num4);  
}

the call would be like this:
console.log(getMax4(getMax(12, 43), 54, 3));
*/

// Call the function to test your code.
console.log(getMax(12, 43));

// Create more test examples.
console.log(getMax4(getMax(12, 43), 54, 3));
console.log(getMax4(getMax(54, 43), 12, 3));
console.log(getMax4(getMax(14, 2), 15, 16));

// This is needed for automated testing (more on that later)
module.exports = getMax;
