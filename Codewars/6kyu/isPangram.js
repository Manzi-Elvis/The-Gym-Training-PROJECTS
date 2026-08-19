/*
A pangram is a sentence that contains every single letter of the alphabet
at least once. For example, the sentence "The quick brown fox jumps over the lazy dog"
is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not. Ignore numbers and punctuation.
*/

const isPangram = (str) => new Set(str.toLowerCase().match(/[a-z]/g)).size === 26


///////TEST CASES////////
isPangram("The quick brown fox jumps over the lazy dog 123");
// true

isPangram("The quick brown fox jumps over the lazy dog 123456");
// true

isPangram("1234567890");
// false
