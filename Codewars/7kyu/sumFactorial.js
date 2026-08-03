function sumFactorial(arr){
      let ans = 0;
      for(let i = 0; i < arr.length; i++){
            let fact = 1;
            for(let j = 1; j <= arr[i]; j++){
                  ans *= j;
            }
            ans += fact;
      }
      return ans;
}
console.log(sumFactorial([4, 6]));
