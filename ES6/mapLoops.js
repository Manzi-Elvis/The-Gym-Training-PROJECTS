/*
OPTIONS:
1. Step through each key or value using the Map’s default iterator
2. Loop through each key-value pair using the new for...of loop
3. Loop through each key-value pair using the Map’s .forEach() method
*/

// 1. Using the MapIterator(Use .next() to the get the next key value.):
let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next(); // Object {value: 'Evelyn', done: false}
// On the flipside, use the .values() method to access the Map’s values,
//  and then repeat the same process.
let iteratorObjForValues = members.values();
iteratorObjForValues.next();// Object {value: 75.68, done: false}

// 2. Using a for...of Loop:
for (const member of members) {
  console.log(member);
}
// PRINTS:
//  ['Evelyn', 75.68]
//  ['Liam', 20.16]
//  ['Sophia', 0]
//  ['Marcus', 10.25]


/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const [key,value] of members) {
    console.log(key, value);
}


// 3. Using a forEach Loop
members.forEach((value, key) => console.log(key, value));
//PRINTS:
//  'Evelyn' 75.68
//  'Liam' 20.16
//  'Sophia' 0
//  'Marcus' 10.25