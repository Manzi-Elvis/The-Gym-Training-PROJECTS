// Write a function that replaces numbers in a word with "!"

//FUNCTION:
const replaceNumbers = (word ) => { return word.replace(/[0-9]/g, "!");}


//EXAMPLES:
console.log(replaceNumbers("a1b2c3"));   // a!b!c!
console.log(replaceNumbers("hello2024")); // hello!!!!
console.log(replaceNumbers("abc"));      // abc