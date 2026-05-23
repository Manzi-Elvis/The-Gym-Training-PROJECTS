function removeDuplicates(arr) {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

// Example
console.log(removeDuplicates([1,2,2,3,4,4,4,4,4,5,5,6])); // Output: [1, 3, 6]
console.log(removeDuplicates(["a","b","b","c","d","d"]));// ["a", "c"]