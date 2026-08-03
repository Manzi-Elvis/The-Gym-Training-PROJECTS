function maxRot1(n) {
  let str = String(n)
  let max = n

  for(let i = 0; i < str.length - 1; i++){
      str = str.slice(0, i) + str.slice(i + 1) + str[i];
      let current = Number(str);

      if(current > max){
            max = current
      }
  }
  return max;
}
console.log(maxRot1(56789))