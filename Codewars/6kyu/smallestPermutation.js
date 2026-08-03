/*
Given a number, find the permutation with the smallest absolute value (no leading zeros).

-20 => -20
-32 => -23
0 => 0
10 => 10
29394 => 23499
The input will always be an integer.
*/

function minPermutation(n) {
  if(n === 0) return 0;
  const sign = Math.sign(n);
  const digits = Math.abs(n).toString().split("").sort();
  if(digits[0] === "0"){
      const i = digits.findIndex(d => d !== "0");
      [digits[0], digits[i]] = [digits[i], digits[0]];
  }
  return sign * Number(digits.join(""))
}

///////TEST CASES////////
console.log(minPermutation(-20));   // -20
console.log(minPermutation(-32));   // -23
console.log(minPermutation(0));     // 0
console.log(minPermutation(10));    // 10
console.log(minPermutation(29394)); // 23499
console.log(minPermutation(1002));  // 1002
console.log(minPermutation(5301));  // 1035