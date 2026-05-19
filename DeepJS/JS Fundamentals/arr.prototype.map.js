// Implement your own version of Array.prototype.map()
//  as a standalone function myMap(arr, callback)
//  without using the built-in .map() inside it.

function myMap(arr, callback){
      let result = [];
      for(let i = 0; i < arr.length; i++){
            result.push(callback(arr[i] , i , arr));
      }
      return result;
}

const numbers = [1, 2, 3];
const doubled = myMap(numbers, function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]