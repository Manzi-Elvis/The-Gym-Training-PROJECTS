// How to make:
const games = new Set();
console.log(games); // RPINTS: Set {}

// To make a Set from a list of values, you use an array:
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games); // PRINTS: Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}

// Modifying Sets( .add() and .delete() methods):

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games); // PRINTS: Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}


// To delete all the items from a Set, you can use the .clear() method.

games.clear()
console.log(games); // PRINTS: Set {}

// CHECKING LENGTH: 
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
console.log(months.size); // PRINTS: 12

// Checking If An Item Exists, use the .has() method

console.log(months.has('September')); // true

// Retrieving All Values, use the .values() method to return the values in a Set.
console.log(months.values());
// SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}