/*
Task
You're given an array of integers a and two integers x and y.
Count the number of elements in the array such that `x ≤ a[i] ≤ y,
where i is the 0-based index of the element.

Code Limit:
Less than 48 characters.

Example
For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,

the output should be 7.

elements 2, 5, 6, 7, 1, 3, 4 should be counted.
*/

checkRange=(a,x,y,c=0)=>a.map(v=>c+=v<x==v>y)|c
checkRangeMe=(a,x,y)=>a.filter(v=>x<=v&v<=y).length

checkRange([2,5,6,7,1,3,4,11,56,49],1,7) // 7
checkRange([1,2,3,4,5],2,4) // 3
checkRange([1,2,3,4,5],1,5) // 5
checkRange([1,2,3,4,5],6,10) // 0
checkRange([],1,10) // 0
checkRange([5],5,5) // 1
checkRange([5],1,4) // 0
checkRange([-5,-2,0,3,8],-2,3) // 3
checkRange([10,10,10],10,10) // 3
checkRange([1,2,2,2,3],2,2) // 3
checkRange([0,1,2,3,4],0,0) // 1
checkRange([100,200,300],150,250) // 1
checkRange([-10,-5,-1],-10,-5) // 2
checkRange([7,7,7,7],1,7) // 4
checkRange([1,1,1,1],1,7) // 4
// Boundary cases
checkRange([1],1,1) // 1
checkRange([0],1,1) // 0
checkRange([2],1,1) // 0
checkRange([1,7],1,7) // 2
checkRange([0,1,7,8],1,7) // 2