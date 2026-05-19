// Make a function called `strCount` that accepts **two string arguments**:

// - The **first argument** is a string (`source`), which can be empty.
// - The **second argument** is a single character (`target`).

// The function should **return an integer** representing the **number of times** the `target` character appears in the `source` string.

// If the `target` character is not found in the `source`, the function should return `0`.

// ```js
// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// ```

function strCount(source, target){
      let count = 0;
      for(let char of source){
            if(char === target){
                  count++;
            }
      }
      return count;
}

console.log(strCount("Hello", "o")); // 1
console.log(strCount("Hello", "l")); // 2
console.log(strCount("", "z"));      // 0