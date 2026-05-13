function mulPower(n, k) {
  // n: Number, k: Number: return BigInt
  let factors = {}
  let temp = n;
  //Prime factorization
  for(let d = 2; d * d <= temp; d++){
      while(temp % d === 0){
            factors[d] = (factors[d] || 0) + 1;
            temp /= d;
      }
  }

  // Remaining prime factor
  if(temp > 1){
      factors[temp] = (factors[temp] || 0) + 1;
  }

  let result = 1n;

  // Adding missing powers
  for(let prime in factors){
      let exp = factors[prime];
      let remainder = exp % k;

      if(remainder !== 0){
            result *= BigInt(prime) ** BigInt(k - remainder)
      }
  }
  return result;
}

console.log(mulPower(100, 3)); // 10
console.log(mulPower(36, 2));  // 1
console.log(mulPower(72, 4));  // 18