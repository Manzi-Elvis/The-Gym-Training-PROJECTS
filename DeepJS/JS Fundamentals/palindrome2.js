// Write a JavaScript function to check if a given string is a palindrome.
// The function should return true if the string reads the same forwards and backwards,
// ignoring case and spaces.

function isPalindrome(str) {
  const cleaned = str
    .toLowerCase()
    .replace(/\s+/g, ""); // remove all spaces

  const reversed = cleaned
    .split("")
    .reverse()
    .join("");

  return cleaned === reversed;
}

console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false