function deleteNth(arr,n){
  const count = {};
  const result = [];
      for (let i = 0; i < arr.length; i++) {
            count [arr[i]] = (count[arr[i]] || 0) + 1;
            if (count[arr[i]] <= n) {
                  result.push(arr[i]);
            }
      }
  return result;
}
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));