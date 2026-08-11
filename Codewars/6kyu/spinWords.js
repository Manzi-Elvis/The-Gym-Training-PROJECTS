/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words,
and returns the same string, but with all words that have five
or more letters reversed (just like the name of this kata).
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

*/
const spinWords = (string) => string.split(" ").map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(" ")