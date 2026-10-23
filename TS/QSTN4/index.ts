type User = {
  id: number;
  name: string;
  tags: string[];
  address?: { city: string };
  age?: number
};

const u: User = { id: 1, name: "A", tags: [], age: 3 };
u.id = 2;
u.tags.push("x");

const tmp = { id: 1, name: "A", tags: [], color: "red" };
const u2: User = tmp;

function city(x: User): string | undefined {
  return x.address?.city;
}

function show(x: {}) {
  console.log(x);
}
show(5);

for (const k of Object.keys(u) as (keyof User)[]) {
  console.log(u[k]);
}