// Question: Promise.all()

// Create a function called fetchUserTodos that uses Promise.all() to fetch users and todos concurrently from these API endpoints:

// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/todos

// The function should return a promise that resolves to an array of users. Each user object should have a new todos property containing only the todos belonging to that user.

// You should match users and todos using:

// user.id === todo.userId
// Expected structure
// {
//   id: 10,
//   name: "Clementina DuBuque",
//   ...,
//   todos: [
//     {
//       userId: 10,
//       completed: false,
//       ...
//     },
//     {
//       userId: 10,
//       completed: false,
//       ...
//     }
//   ]
// }
// Requirements
// Use Promise.all().
// Fetch users and todos concurrently.
// Match todos to users using userId.
// Return a promise containing the combined users.
// Do not modify the original API data unnecessarily.

// Your task: Write the fetchUserTodos() function.

async function fetchUserTodos(){
    const [usersResponse, todosResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/todos")
    ]);

    if (!usersResponse.ok || !todosResponse.ok) {
      throw new Error("Failed to fetch users or todos");
    }

    const [users, todos] = await Promise.all([
      usersResponse.json(),
      todosResponse.json()
    ]);

    return users.map(user => ({
      ...user,
      todos: todos.filter(todo => todo.userId === user.id)
    }));
}

fetchUserTodos()
      .then(users => console.log(users))
      .catch(error => console.error("Error:", error));