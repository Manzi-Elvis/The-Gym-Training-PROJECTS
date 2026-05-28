/* A symbol is a unique and immutable data type that is often used to identify object properties.
To make a symbol, you write Symbol() with an optional string as its description.

*/

const sym1 = Symbol('apple');
console.log(sym1) // Prints: Symbol(apple)

const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3); // Prints: false

const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};
console.log(bowl); // Prints: Object {apple: Object, banana: Object, orange: Object}

const bowl2 = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl2);// Prints: Object {Symbol(apple): Object, Symbol(banana): Object, Symbol(orange): Object, Symbol(banana): Object}

/* By changing the bowl’s properties to use symbols, 
each property is a unique Symbol and
 the first banana doesn’t get overwritten by the second banana.
*/