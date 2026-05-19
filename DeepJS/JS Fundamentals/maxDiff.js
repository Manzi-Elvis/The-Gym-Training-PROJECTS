// Write a function to find the maximum difference between any two elements in an input array
const maxDiff = (arr) => {
      let max = arr[0];
      let min = arr[0];
      for(let i = 1; i < arr.length; i++){
            if(arr[i] < min) min = arr[i];
            if(arr[i] > max) max = arr[i];
      }
      return max - min;
}
console.log(maxDiff([2, 5, 1, 9])); // 8 (9 - 1)
console.log(maxDiff([10, 3, 6]));   // 7 (10 - 3)