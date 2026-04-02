function findAverage(array) {
  // your code here
      if (array.length > 0) {
            let sum = array.reduce((a, b) => a + b, 0);
            return sum / array.length;
      }
      else{
            return 0;
      }
  return 0;
}
console.log(findAverage([1, 2, 3, 4])); // Output: 2.5
console.log(findAverage([])); // Output: 0