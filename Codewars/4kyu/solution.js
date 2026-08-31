/*
Description
Given an array X of positive integers, its elements are to be transformed
by running the following operation on them as many times as required:

if X[i] > X[j] then X[i] = X[i] - X[j]

When no more transformations are possible, return its sum ("smallest possible sum").

For instance, the successive transformation of the elements of
input X = [6, 9, 21] is detailed below:

X_1 = [6, 9, 12] # -> X_1[2] = X[2] - X[1] = 21 - 9
X_2 = [6, 9, 6]  # -> X_2[2] = X_1[2] - X_1[0] = 12 - 6
X_3 = [6, 3, 6]  # -> X_3[1] = X_2[1] - X_2[0] = 9 - 6
X_4 = [6, 3, 3]  # -> X_4[2] = X_3[2] - X_3[1] = 6 - 3
X_5 = [3, 3, 3]  # -> X_5[1] = X_4[0] - X_4[1] = 6 - 3
The returning output is the sum of the final transformation (here 9).

Example
solution([6, 9, 21]) #-> 9
Solution steps:
[6, 9, 12] #-> X[2] = 21 - 9
[6, 9, 6] #-> X[2] = 12 - 6
[6, 3, 6] #-> X[1] = 9 - 6
[6, 3, 3] #-> X[2] = 6 - 3
[3, 3, 3] #-> X[1] = 6 - 3
Additional notes:
There are performance tests consisted of very big
numbers and arrays of size at least 30000.
Please write an efficient algorithm to prevent timeout.
*/

const solution = (num) => {
    const g = num.reduce((a, b) => {
      while(b !== 0){
        [a, b] = [b, a % b];
      }
      return a
    });

    return g * num.length;
}

////////// TEST CASES /////////////
console.log(solution([6, 9, 21]));       // 9
console.log(solution([6, 9, 12]));       // 9
console.log(solution([3, 3, 3]));        // 9

console.log(solution([5]));              // 5
console.log(solution([7, 7]));            // 14
console.log(solution([1, 1, 1, 1]));     // 4

console.log(solution([1, 2, 3]));        // 3
console.log(solution([1, 7, 13]));       // 3

console.log(solution([2, 4, 6]));        // 6
console.log(solution([8, 12, 20]));      // 12
console.log(solution([14, 28, 42]));     // 42

console.log(solution([5, 10, 15]));      // 15
console.log(solution([20, 35, 50]));     // 15

console.log(solution([6, 9]));            // 6
console.log(solution([10, 15]));          // 10
console.log(solution([12, 18]));          // 12
console.log(solution([17, 19]));          // 2

console.log(solution([2, 3, 5]));         // 3
console.log(solution([5, 7, 11]));        // 3
console.log(solution([11, 13, 17]));      // 3

console.log(solution([6, 6, 12]));        // 18
console.log(solution([4, 4, 8, 12]));    // 16
console.log(solution([9, 9, 9, 18]));    // 36

console.log(solution([6, 12, 18, 24, 30])); // 30
console.log(solution([10, 20, 30, 40, 50])); // 50

console.log(solution([21, 6, 9]));        // 9
console.log(solution([12, 6, 18, 9]));   // 12
console.log(solution([30, 10, 20, 40])); // 40

console.log(solution([6, 600, 6000]));    // 18
console.log(solution([7, 70, 700]));      // 21
console.log(solution([9, 90, 900, 9000])); // 36

console.log(solution([1000000, 2000000, 3000000])); // 3000000
