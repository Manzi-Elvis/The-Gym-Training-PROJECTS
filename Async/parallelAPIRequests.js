// Practical Challenge — Parallel API Requests

// You need information about:

// - One user
// - Their posts
// - Their todos

// The endpoints are:

// ```jsx
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1
// https://jsonplaceholder.typicode.com/todos?userId=1
// ```

// Create:

// ```jsx
// async function getUserDashboard() {
//   // Your implementation
// }
// ```
// Requirements:

// 1. Start all three requests without unnecessarily waiting for one before starting another.
// 2. Wait until all required data has been retrieved.
// 3. Check that every HTTP response is successful.
// 4. Convert every response to JSON.
// 5. Return:

// ```jsx
// {
//   user: ...,
//   posts: ...,
//   todos: ...
// }
// ```

// 1. Handle errors using `try...catch`.

// Do not make the three requests sequentially.

async function getUserDashboard(){
      const apiUrls = [
            "https://jsonplaceholder.typicode.com/users/1",
            "https://jsonplaceholder.typicode.com/posts?userId=1",
            "https://jsonplaceholder.typicode.com/todos?userId=1"
      ];
      try{
            const responses = await Promise.all(apiUrls.map(url => fetch(url)))
            responses.forEach(response => {
                  if(!response.ok){
                        throw new Error(`HTTP Error status: ${response.status}`)
                  }
            });
            const [user, posts, todos] = await Promise.all(responses.map(response => response.json()));
            return{user, posts, todos}
      }
      catch(error){
            console.error("Error: ", error.message)
      }
}