/*A Map is an object that lets you store key-value pairs where both the keys and the values
can be objects, primitive values, or a combination of the two.
*/

// How To Make a Map: const employees = new Map();

// Modifying Maps:
const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);// Map {'james.parkes@udacity.com' => Object {...}, 'julia@udacity.com' => Object {...}, 'richard@udacity.com' => Object {...}}

// To remove key-value pairs, simply use the .delete() method.

employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees); // Map {'james.parkes@udacity.com' => Object {firstName: 'James', lastName: 'Parkes', role: 'Course Developer'}}

// use the .clear() method to remove all key-value pairs from the Map.
employees.clear()
console.log(employees);// Map {}



// Working with Maps:
// use the .has() method to check if a key-value pair exists in your Map by passing it a key.
const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier')); // false
console.log(members.has('Marcus')); // true

// retrieve values from a Map, by passing a key to the .get() method.

console.log(members.get('Evelyn')); // PRINTS: 75.68