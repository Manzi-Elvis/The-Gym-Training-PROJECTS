/*
In mathematics, Pascal's triangle is a triangular array of the
binomial coefficients expressed with formula:
(n,k) = (n!) / k!(n - k)! , 
where: 
- n denotes a row of the triangle, and
- k is a position of a term in the row.

Pascal's Triangle:

You can read Wikipedia article on Pascal's Triangle for more information.

Task:
Write a function that, given a depth n,
returns n top rows of Pascal's Triangle flattened
into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle
are guaranteed to fit into the returned type,
but depending on selected method of calculations,
intermediate values can be larger.
*/

function pascalsTriangle(n) {
  if (n <= 0) return [];
  const result = [];
  for( let row = 0; row < n; row++){
    let current = 1n;
    for(let col = 0; col <= row; col++){
      result.push(Number(current));
      current = current * BigInt(row - col) / BigInt(col + 1);
    }
  }
  return result;
}