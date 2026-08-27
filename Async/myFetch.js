// 2. Create a function called `myFetch` that should
// work as a simple version of the native fetch() API.
// The function `myFetch` should use the XMLHttpRequest
// to make a `GET` Request and return a promise that
// resolves with the request’s response and rejects with an error if any.


function myFetch(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest;
    xhr.open("GET", url);
    xhr.onload = () => {
      if(xhr.status >= 200 && xhr.status < 300){
        resolve(xhr.responseText)
      }
      else{
        reject(new Error(`Request failed with status"${xhr.status}`))
      }
    }
    xhr.onerror = () => {
        reject(new Error("Network Error"))
      }
      xhr.send()
  })
}
    
    myFetch('https://jsonplaceholder.typicode.com/users')
    	.then(data => console.log(data))
    	.catch(error => console.error(error));