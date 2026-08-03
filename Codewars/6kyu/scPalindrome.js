/*
Description:
You will be given a string and you task is to check if it is possible
to convert that string into a palindrome by removing a single character.
If the string is already a palindrome, return "OK". If it is not, and
we can convert it to a palindrome by removing one character, then return "remove one",
otherwise return "not possible". The order of the characters should not be changed.

For example:

"abba"   -> "OK"           - this is a palindrome
"abbaa"  -> "remove one"   - remove the 'a' at the extreme right
"abbaab" -> "not possible" - cannot be made a palindrome 
Good luck!

If you like this Kata, please try Single Character Palindromes II
*/


function solve(s){
      const isPalindrome = (str) => {
            const rev = str.split('').reverse().join('')
            if(rev === str){
                  return "OK"
            }
      }
      let left = 0;
      let right = s.length - 1;
      while(left < right){
            if(s[left] !== s[right]){
                  const skipLeft = s.slice(0, left) + s.slice(left + 1)
                  const skipRight = s.slice(0, right) + s.slice(right + 1)
                  if(isPalindrome(skipLeft) || isPalindrome(skipRight)){
                        return "remove one"
                  }
                  return "not possible"
            }
            left++;
            right--;
      }

      return "OK";
}