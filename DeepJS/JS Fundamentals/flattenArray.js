// Write a function flattenArray(arr) that flattens a nested array of any depth
//  into a single array without using Array.prototype.flat(). Use recursion.

function flattenArray(arr){
      let result = [];
      for(let i = 0; i < arr.length; i++){
            if(Array.isArray(arr[i])){
                  result = result.concat(flattenArray(arr[i]));
            }
            else{
                  result.push(arr[i]);
            }
      }
      return result;
}

console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]