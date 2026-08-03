function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0
  for(let i = 0; i < marks.length; i++){
    sum += marks[i]
  }
  return Math.floor(sum/(marks.length))
}
console.log(getAverage([2,2,2,2])); // Output: 2
console.log(getAverage([1,2,3,4,5])); // Output: 3