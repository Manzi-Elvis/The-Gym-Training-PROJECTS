const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

function addTask(){
      const taskText = input.value.trim()
      if(taskText === "") return
      const li = document.createElement("li")
      li.textContent = taskText;
      taskList.appendChild(li)
      input.value = ""
}

input.addEventListener("keydown", (e) =>{
      if(e.key === "Enter" && !e.shiftKey){
            e.preventDefault();
            addTask();
      }
})

addBtn.addEventListener("click", addTask);