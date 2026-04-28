const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increase");
const decrementBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

incrementBtn.style.backgroundColor = "green";
decrementBtn.style.backgroundColor = "red";
resetBtn.style.backgroundColor = "white";

if (countEl.textContent === "0") {
  countEl.style.color = "black";
}
else if (countEl.textContent > "0") {
  countEl.style.color = "green";
}
else {  
  countEl.style.color = "red";
}

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countEl.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  count--;
  countEl.textContent = count;
});

resetBtn.addEventListener("click" , () => {
      count = 0;
      countEl.textContent = count;
})