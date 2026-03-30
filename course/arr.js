var people = ["Greg", "Mary", "Devon", "James"];

// 1. Write code to remove “Greg” from the people array.
people.shift(0)

// 2. Write code to replace “James” to “Jason”.
people[2] = "Jason"
// 3. Write code to add your name to the end of the people array.
people.push("Yazid")
// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on google.
console.log(people.indexOf("Mary"))
// 5. Write code to make a copy of the people array using the slice method. The copy should NOT include “Mary” or your name.
var peopleCopy = people.slice(1,3)
// 6. Write code that gives the index of “Foo”. Why does it return -1?
console.log(people.indexOf("Foo"))
// 7. Create a variable called last which value is the last element of the array. Use the length property and the bracket notation to get the last element.
var last = people[people.length - 1]
console.log(last)
console.log(people)