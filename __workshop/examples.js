const array  = [1, 5, 8, 10];
console.log({originalArray: array})

//array.forEach => doesn't return anything. loops through every element, and does something
console.log('FOR EACH')
array.forEach(function(item, i){
    console.log(i + ' ' + item);
});

// for(let i = 0; i< array.length; i++){
//     console.log(i + ' ' + array[i]); // array[0] = 1, array[1] = 5
// }


//array.map => returns a new array, loops through every element and does a transformation of that element. does not modify original array
console.log('MAP: ', 'number * 2');
const mappedArray = array.map(function(number, i){
    return number * 2;
}) // [2, 10, 16, 20]

console.log({mappedArray});

//array.filter => returns a new array, loops through every element and checks a condition (T/F) and if true, filters in the element.
console.log('FILTER: ', 'number > 2');
const filteredArray = array.filter(function(number, i){
    return number > 2;
}); //  [5, 8, 10]

console.log({filteredArray});

//array.find => returns an element from the array that matches the condition
console.log('FIND: ', 'number > 2');
const foundNumber = array.find(function(number, i){
    return number > 2;
}); // 5

console.log({foundNumber});


//array.includes => takes only a string or number, returns TRUE/FALSE 
console.log('INCLUDES: ', '5');
const includedInArray = array.includes(5); //true
console.log({includedInArray});

//array.every => checks that every condition is met for each element
console.log('EVERY: ', 'number > 2');
const everyConditionIsMet = array.every(function(number, i){
    return number > 2;
}); // FALSE

console.log({everyConditionIsMet});

//array.some => checks that at least one condition is met in the array
console.log('SOME: ', 'number > 2');
const atLeastOneConditionIsMet = array.every(function(number, i){
    return number > 2;
}); // FALSE
console.log({atLeastOneConditionIsMet});