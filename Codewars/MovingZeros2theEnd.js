// Description:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZerosToTheEnd(arr) {
  let nonZeros = [];
  let zeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(0);
    } else {
      nonZeros.push(arr[i]);
    }
  }

  return nonZeros.concat(zeros);
}
console.log(moveZerosToTheEnd([1, 0, 2, 0, 3, 0, 4])); // [1, 2, 3, 4, 0, 0, 0]
console.log(moveZerosToTheEnd([0, 1, 0, 2, 0, 3])); // [1, 2, 3, 0, 0, 0]
console.log(moveZerosToTheEnd([0, 0, 0, 1, 2, 3])); // [1, 2, 3, 0, 0, 0]
console.log(moveZerosToTheEnd([1, 2, 3, 0, 0, 0])); // [1, 2, 3, 0, 0, 0]
console.log(moveZerosToTheEnd([0, 0, 0, 0])); // [0, 0, 0, 0]
console.log(moveZerosToTheEnd([1, 2, 3])); // [1, 2, 3]
console.log(moveZerosToTheEnd([])); // []