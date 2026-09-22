/*
ROT13 is a simple letter substitution cipher that replaces
a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.

If there are nonletter characters in the string, they should
be left as-is in the output. Only letters from the ASCII alphabet
should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  return message.replace(/[a-zA-Z]/g, ch => {
    const code = ch.charCodeAt(0);
    if(code >= 65 && code <= 90){
      return String.fromCharCode(((code - 65) + 13) % 26 + 65)
    }
    return String.fromCharCode(((code - 97) + 13) % 26 + 97);
  });
  
};