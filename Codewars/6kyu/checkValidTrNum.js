/*
Every Turkish citizen has an identity number whose validity
can be checked by these set of rules:

- It has 11 digits and the first digit can't be zero
- Take the sum of 1st, 3rd, 5th, 7th and 9th digit and multiply it by 7.
  Then subtract the sum of 2nd, 4th, 6th and 8th digits from this value.
  Modulo 10 of the result should be equal to the 10th digit
- Sum of first ten digits' modulo 10 should be equal to the 11th digit

Task:
Your task is to write a function to check if the given number
is a valid Turkish ID number, and return true or false accordingly.
Return false for any invalid input too (e.g. strings).

Example
input = 10167994524

1 + 1 + 7 + 9 + 5 = 23  // sum of 1st, 3rd, 5th, 7th and 9th digit
23 * 7 = 161            // sum multiplied by 7
0 + 6 + 9 + 4 = 19      // sum of 2nd, 4th, 6th and 8th digits
161 - 19 = 142          // subtracted from the first value

142 % 10 = 2            // modulo 10 of the result
10167994524             // should be equal to the 10th digit
         ^

1 + 0 + 1 + 6 + 7 + 9 + 9 + 4 + 5 + 2 = 44
                        // sum of first 10 digits
44 % 10 = 4             // modulo 10 of the result
10167994524             // should be equal to the 11th digit
          ^

*/

function checkValidTrNumber(num) {
  num = String(num)
  if(num.length !== 11 || num[0] === "0"){
    return false;
  }
  for(const n of num){
    if(n < "0" || n > "9"){
      return false
    }  
  }
  const dig = [...num].map(Number)
  const oddSum = dig[0] + dig[2] + dig[4] + dig[6] + dig[8];
  const evenSum = dig[1] + dig[3] + dig[5] + dig[7];
  
  const digTen = ((oddSum * 7) - evenSum) % 10;
  const digEleven = (oddSum + evenSum + dig[9]) % 10;
  
  if(digTen !== dig[9]) return false;
  
  return digEleven === dig[10];
}

console.log(checkValidTrNumber("10000000078")); // true
console.log(checkValidTrNumber("10167994524")); // true
console.log(checkValidTrNumber("10000000079")); // false
