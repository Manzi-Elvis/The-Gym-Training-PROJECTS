// Write a function isMirrorImage(str1, str2) that checks if one string is the reverse of the other. 
// Ignore spaces, punctuation, and capitalization.

function isMirrorImage(str1, str2){
      function clean(str){
            return str.toLowerCase().replace(/[^a-z0-9]/g, "")
      }
      const s1 = clean(str1);
      const s2 = clean(str2);

      const reverseds1 = s1.split('').reverse().join('')
      return reverseds1 === s2
}
console.log(isMirrorImage("Hello", "olleH")); // true
console.log(isMirrorImage("World", "dlroW")); // true
console.log(isMirrorImage("Test", "tseT ")); // true
console.log(isMirrorImage("Java", "Python")); // false