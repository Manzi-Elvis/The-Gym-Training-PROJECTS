// Write a function isPalindrome(word) to demonstrate if a word is a palindrome or not.
const isPalindrome = (word) => {
      let reversed = word.split('').reverse().join('');
      return reversed === word;
}
console.log(isPalindrome('madam'))
console.log(isPalindrome("hello"));