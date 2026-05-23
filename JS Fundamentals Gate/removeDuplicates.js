function removeDuplicates(arr) {
  return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

// Examples:
console.log(removeDuplicates([1,2,2,3,4,4,4,4,4,5,5,6]));// Output: [1, 3, 6]
console.log(removeDuplicates(["a","b","b","c","d","d"]));// ["a", "c"]
console.log(removeDuplicates([true, false, true, null, undefined, null])); // [false, undefined]
console.log(removeDuplicates([5,3,5,2,8,2,1]));// [3, 8, 1]
console.log(removeDuplicates([0,0,1,2,2,3,4,4,5])); // [1, 3, 5]
console.log(removeDuplicates(["apple","banana","apple","orange"]));// ["banana", "orange"]