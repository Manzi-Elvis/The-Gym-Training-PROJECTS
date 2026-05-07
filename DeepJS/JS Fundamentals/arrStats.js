function arrayStats(){
      const arr = [];
      let sum = 0;
      let avg = 0;
      let min = Infinity;
      let max = -Infinity;
      for(let i = 0; i < arguments.length; i++){
            arguments.push(arr[i]);
      }
      for(let i = 0; i < arr.length; i++){
            sum += arr[i];
            if(arr[i] < min){
                  min = arr[i];
            }
            if(arr[i] > max){
                  max = arr[i];
            }
      }
      avg = sum / arr.length;
      return {
            sum: sum,
            avg: avg,
            min: min,
            max: max
      };
}
console.log(arrayStats(1, 2, 3, 4, 5));