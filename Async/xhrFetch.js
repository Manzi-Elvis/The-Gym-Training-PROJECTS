const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

xhr.onload = function(){
      if(xhr.status >= 200 && xhr.status < 300){
            const data = JSON.parse(xhr.responseText);
            console.log(data)
      }
      else{
            console.error("Server returned and error:" , xhr.status);
      }
}
xhr.send();