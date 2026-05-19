// Write a function **`lettersOnOddIndexes`** that takes a string as an argument
//  and returns a string containing all the word characters (letters and numbers) located at odd indexes in the original string.
//  The function should exclude any special characters.

function lettersOnOddIndexes(str){
      const cleaned = str.replace(/[^a-z0-9]/gi, "");
      let result = '';
      for(let i = 0; i < cleaned.length; i++){
            if(i % 2 !== 0){
                  result += cleaned[i];
            }
      }
      return result;
}

// Examples:

console.log(lettersOnOddIndexes("Hello, World!")); // "elWrd"
console.log(lettersOnOddIndexes("JavaScript!"));   // "aacit"
console.log(lettersOnOddIndexes("TypeScript"));    // "yecit"