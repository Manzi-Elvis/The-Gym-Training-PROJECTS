/* Iteration & Iterable Protocols
The iterable protocol is used for defining and customizing the iteration behavior of objects.
 What that really means is you now have the flexibility in ES6 to specify a way
  for iterating through values in an object. 
  For some objects, they already come built-in with this behavior.
For example, strings and arrays are examples of built-in iterables.

The iterator protocol is used to define a standard way that an object produces a sequence of values.
 What that really means is you now have a process for defining how an object will iterate.
  This is done through implementing the .next() method.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
}

// PRINTS: 
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//PRINTS:
// Object {value: 0, done: false}
// Object {value: 1, done: false}
// Object {value: 2, done: false}