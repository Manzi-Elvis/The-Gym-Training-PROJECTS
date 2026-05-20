const list = document.getElementById("list");
for(let i = 1; i <= 3; i++){
      const li = document.createElement("li");
      li.textContent = `Item${i}`;
      list.appendChild(li);
}