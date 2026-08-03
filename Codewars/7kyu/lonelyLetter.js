function countLonelyLetters(text) {
  const regex = /[a-zA-Z]/;
  const words = text.split('');
  let count = 0;
      for (let i = 0; i < words.length; i++) {
            if (regex.test(words[i])) {
                  if (words[i] === "a" || words[i] === "z") {
                        if (words[i] === "a") {
                              if (text.indexOf("b") === -1) {
                                    count++;
                              }
                        }
                        else if (words[i] === "z") {
                              if (text.indexOf("y") === -1) {
                                    count++;
                              }
                        }
                  }
                  else if (words[i] === words[i - 1] || words[i] === words[i + 1]) {
                        continue;
                  }
                  else {
                        if (text.indexOf(String.fromCharCode(words[i].charCodeAt(0) - 1)) === -1 && text.indexOf(String.fromCharCode(words[i].charCodeAt(0) + 1)) === -1) {
                              count++;
                        }
                  }
            }
      }
      return count;
}


function countLonelyLetters2(text) {
  // your code here
  const regex = /[a-zA-Z]/;
  const words = text.split('');
  let count = 0;
      for (let i = 0; i < words.length; i++) {
            if (words[i] === "a" || words[i] === "z") {
                  return true;
            }
            else if (words[i] === words[i - 1] || words[i] === words[i + 1]) {
                  return true;
            }
            else {
                  count++;
            }
      }
      return count;
}


console.log(countLonelyLetters('alpahabet'));
console.log(countLonelyLetters('Hello, World!'));
console.log(countLonelyLetters('A-dA'));
console.log(countLonelyLetters('zz')); //LonelyLetters('zz'));
console.log(countLonelyLetters('abc'));