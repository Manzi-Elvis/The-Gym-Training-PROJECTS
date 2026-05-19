// Write a function sumUnique that takes an array of numbers as an argument
//  and returns the sum of the elements that appear only once in the array.

function sumUnique(arr) {
  const freq = {};

  // count occurrences
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // sum only unique values
  let sum = 0;

  for (let key in freq) {
    if (freq[key] === 1) {
      sum += Number(key);
    }
  }

  return sum;
}

sumUnique([1, 2, 2, 3, 4, 4, 5]) // 1 + 3 + 5 => 9
sumUnique([10, 20, 20, 30, 40, 40, 50]) // 10 + 30 + 50 => 90
sumUniquey([5, 5, 10, 15, 20, 25, 25]) // 10 + 15 + 20 => 45