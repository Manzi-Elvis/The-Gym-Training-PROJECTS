/*
This cipher involves taking each character of a string
and multiplying their char codes by 6.
For example, encoding Hello World! would result ưɞʈʈʚÀȊʚʬʈɘÆ.

You must write two functions:
encode to encode a given string,
decode to decode a given string.

***Should work on empty string too***

*/

function encode(str) {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) * 6)).join('')
}
function decode(str) {
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0) / 6)).join('')
}