/*
Implement a function that computes the difference between two lists.
The function should remove all occurrences of elements from the
first list (a) that are present in the second list (b).
The order of elements in the first list should be preserved in the result.

Examples:

If a = [1, 2] and b = [1], the result should be [2].
If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

*/

function arrayDiff(a, b) {
      return a.filter(x => !b.includes(x));
}
console.log(arrayDiff([1, 2, 3, 4], [1, 2]));