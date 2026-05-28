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