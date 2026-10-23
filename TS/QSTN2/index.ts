function sum(xs:readonly number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

const prices = [1, 2, 3] as const;
console.log(sum(prices));

const pair = ["Aline", 30];
const person: (string | number)[] = pair;
person.push(3);
const row: [string, number] = ["Bob", 25];
console.log(row[1]);
row.push("extra");
const xs: string[] = ["a"];
console.log(xs[5].toUpperCase());

/////////////ORIGINAL CODE WITH BUGS
/*
function sum(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

const prices = [1, 2, 3] as const;
console.log(sum(prices));

const pair = ["Aline", 30];
const person: [string, number] = pair;

const row: [string, number] = ["Bob", 25];
console.log(row[2]);
row.push("extra");

const xs: string[] = ["a"];
console.log(xs[5].toUpperCase());
*/