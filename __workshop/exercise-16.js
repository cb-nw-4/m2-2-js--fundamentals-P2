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
    let array = [];
    for (let i=0; i<10; i++) { 
        for (let k=0; k<10; k++) { 
            for (let l=0; l<10; l++) { 
                let sumOfDigits = Math.pow(i,3) + Math.pow(k,3) + Math.pow(l,3); 
                let number = i*100 + k*10 + l; 
                if ( sumOfDigits == number ) { 
                    array.push(number); 
                };
            }; 
        }; 
    };
    return array; 
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

console.log(findNumbers(0, 1000));

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = findNumbers;
