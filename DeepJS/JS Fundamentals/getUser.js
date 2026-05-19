// Write a function that uses a Promise to simulate fetching a user after a 1-second delay.
//  If userId is positive, resolve with { id: userId, name: "Alice" }. 
// If zero or negative, reject with "Invalid ID". Then rewrite it using async/await with a try/catch.

function getUser(userId){
      return new Promise((resolve, reject) => {
            setTimeout(() =>{
                  if(userId > 0){
                        resolve({ id: userId, name: "Elvis"})
                  }
                  else{
                        reject("Invalid ID")
                  }
            }, 1000);
      });
}

getUser(1)
  .then(user => console.log(user))
  .catch(err => console.log(err));