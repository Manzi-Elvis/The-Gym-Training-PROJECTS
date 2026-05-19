// Write a function that gets an array of numbers and string, then return an array of odd numbers

const findOddNumbers = (arr) =>{return arr.filter(item => typeof item === "number").filter(num => num % 2 !== 0)}

// EXAMPLE:
console.log(findOddNumbers([1, 3, 'doe', 2, 10, 11, 'john']));
// [1, 3, 11]