function findUnique(numbers) {
    // Return the unique number
      return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
}
//////////////////////////
///////OR////////////////
////////////////////////
function findUnique(numbers) {
    // Return the unique number
      return numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num))[0];
}

/////////////////////////
////////OR////////////////
/////////////////////////
function findUnique(numbers) {
      // Return the unique number   
      for (let i = 0; i < numbers.length; i++) {
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
          return numbers[i];
        }   
      }
}

/////////////////////////
////////OR////////////////
/////////////////////////
function findUnique(numbers) {
  const counts = {};

  for (const num of numbers) {
    counts[num] = (counts[num] || 0) + 1;
  }

  return numbers.find(num => counts[num] === 1);
}

console.log(findUnique([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUnique([0, 0, 0.77, 0, 0])); // Output: 0.77
console.log(findUnique([3, 10, 3, 3, 3])); // Output: 10
