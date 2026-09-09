/*
Description:
Find the first character that repeats in a string and return that character.
If there is no such character, return undefined/null/None/Nothing, etc.
(depending on your language). Your function should be case-sensitive (a is not equivalent to A).

firstDup('tweet') => 't'
firstDup('like') => undefined

This is not the same as finding the character that repeats first.
In that case, an input of 'tweet' would yield 'e'.

Another example:
In 'translator' you should return 't', not 'a'.

v      v  
translator
  ^   ^
While second 'a' appears before second 't', the first 't' is before the first 'a'.
*/


const firstDup = (string) => {
  for(let s in string){
    if(string.indexOf(string[s]) !== string.lastIndexOf(string[s])){
      return string[s]
    }
  }
  return undefined;
}