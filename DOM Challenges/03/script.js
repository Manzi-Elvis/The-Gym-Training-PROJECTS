const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("tasks");

button.addEventListener("click", () =>{
      const taskText = input.value.trim();
      if(taskText === "") return
      const li = document.createElement("li");
      const btn = document.createElement("button")
      btn.textContent = "Remove";
      li.textContent = taskText;
      li.appendChild(btn)
      list.appendChild(li);
      input.value = "";
      btn.addEventListener("click" , () =>{
            li.remove();
      })
})
