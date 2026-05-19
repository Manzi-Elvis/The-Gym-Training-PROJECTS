// Write a pure function that accepts an array of student objects (each with name and score)
//  and returns a new array sorted by score descending.
//  The original array must not be mutated.

const sortStudents = (students) => { return [...students].sort((a,b) => b.score - a.score); }

const data = [
  { name: "Alice", score: 72 },
  { name: "Bob", score: 91 },
  { name: "Carol", score: 85 }
];
const sorted = sortStudents(data);
console.log(sorted);