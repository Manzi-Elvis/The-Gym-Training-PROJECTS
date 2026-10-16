/*
Exercise 1 — User Profile Analyzer
You're building the backend for a small application.
The application receives users in this format:
{
  id: 1,
  name: "Elvis",
  email: "elvis@example.com",
  gender: "male",
  age: 24,
  isAdmin: true
}

Your job is to build a type-safe user analyzer.
Requirements
Create a TypeScript program containing:
1. A user type
Create an appropriate type/interface for a user.
2. getUserLabel()
Create:
getUserLabel(user)

It should return:
"Elvis (Admin)"

for an administrator.
For a normal user:
"John (User)"

3. canAccessDashboard()
Create:
canAccessDashboard(user)

It should return a boolean.
Rules:
- admins can access the dashboard
- normal users cannot
4. getUsersAboveAge()
Create:
getUsersAboveAge(users, age)

Example:
const users = [
  {
    id: 1,
    name: "Elvis",
    email: "elvis@example.com",
    gender: "male"
    age: 24,
    isAdmin: true
  },
  {
    id: 2,
    name: "Alice",
    email: "alice@example.com",
    gender: "female"
    age: 17,
    isAdmin: false
  }
];

Then:
getUsersAboveAge(users, 18);

should return only Elvis.
*/

type User = {
      id: number
      name: string
      email: string
      age: number
      gender: "male" | "female"
      isAdmin: boolean
}

const users: User[] = [
  {
    id: 1,
    name: "Elvis",
    email: "elvis@example.com",
    gender: "male",
    age: 24,
    isAdmin: true
  },
  {
    id: 2,
    name: "Alice",
    email: "alice@example.com",
    gender: "female",
    age: 17,
    isAdmin: false
  }
];

const getUserLabel = (user: User): string => {
      return user.isAdmin ? `${user.name} (Admin)` : `${user.name} (User)`;
}

// const getUserLabel = (user: User): string => `${user.name} (${user.isAdmin ? "Admin" : "User"})`;

const canAccessDashboard = (user: User) : boolean => {
      return user.isAdmin;
}

const getUsersAboveAge = (users: User[], age: number): User[] => {
      return users.filter(user => user.age > age)
}


console.log("Test 1: getUserLabel()");
console.log(getUserLabel(users[0])); // Elvis (Admin)
console.log(getUserLabel(users[1])); // Alice (User)

console.log("\nTest 2: canAccessDashboard()");
console.log(canAccessDashboard(users[0])); // true
console.log(canAccessDashboard(users[1])); // false

console.log("\nTest 3: getUsersAboveAge()");
console.log(getUsersAboveAge(users, 18));
// Expected: [Elvis's user object]

console.log("\nTest 4: Boundary case");
console.log(getUsersAboveAge(users, 24));
// Expected: [] because Elvis is exactly 24