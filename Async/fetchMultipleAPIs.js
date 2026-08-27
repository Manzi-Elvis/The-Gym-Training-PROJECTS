// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

async function fetchMultipleAPIs(urls){
  const data = urls.map(url => fetch(url).then(resp => resp.json()));
  const results = await Promise.all(data)
  return results;
}

fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });