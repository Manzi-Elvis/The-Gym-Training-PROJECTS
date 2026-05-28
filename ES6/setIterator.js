/*
Because the .values() method returns a new iterator object (called SetIterator),
you can store that iterator object in a variable and loop through each item in the Set using .next().
*/

const iterator = months.values();
iterator.next();
// Object {value: 'January', done: false}


// And if you run .next() again?
iterator.next();
// Object {value: 'February', done: false}

// Using a for...of Loop:
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);
for (const color of colors) {
  console.log(color);
}
// red
// orange
// yellow
// green
// blue
// violet
// brown
// black