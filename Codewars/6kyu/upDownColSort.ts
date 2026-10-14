/*
You are given a matrix M, of positive and negative integers.
It should be sorted in an up and down column way, starting always
with the lowest element placed at the top left position finishing
with the highest depending on n value: at the bottom right position
if the number of columns,n, is odd, or placed at the top right, if n is even.

E.g.:

M = [[-20, -4, -1],
     [  1,  4,  7], 
     [  8, 10, 12]]
     
M_ = [[-20, 7, 8],
      [-4, 4, 10],
      [-1, 1, 12]]
In order to be more understandable we show the directions
of the sorting for the new matrix with arrows:

source: imgur.com

Create the function up_down_col_sort() that receives a matrix
as an argument and may do this kind of sorting.

Your function will be tested with square or rectangular matrices
of m rows and n columns Features of the random tests:

Number of tests = 120
10 <= m <= 200
10 <= n <= 200
-1000 <= M[i,j] <= 1000

The kata is available at Python 2, Typescript, Javascript and Ruby at the moment.
Translations into another languages will be released soon.

Fundamentals    Algorithms    Data Structures    Mathematics    Matrix    Sorting
*/

export function upDownColSort(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const elements: number[] = matrix.flat().sort((a, b ) => a - b);
  const res = Array.from({length: rows}, () => Array(cols).fill(0))

  let k = 0;
  for(let j = 0; j < cols; j++) {
    if(j % 2 === 0){
      for(let i = 0; i < rows; i++){
        res[i][j] = elements[k++]
      }
    }
    else{
      for(let i = rows - 1; i >= 0; i--)[
        res[i][j] = elements[k++]
      ]
    }
  }
  return res
}