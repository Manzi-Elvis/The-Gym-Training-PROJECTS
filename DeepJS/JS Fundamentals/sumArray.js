// Write a function sumArray(arr) that returns the sum of all the elements in an input array
const sumArray = (arr) => {
      let sum = 0;
      for(let i = 0; i < arr.length; i++){
            sum += arr[i]
      }
      return sum
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([10, -2, 5]));  // 13