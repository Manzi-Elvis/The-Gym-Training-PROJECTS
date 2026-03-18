// Simple navbar active switch
document.querySelectorAll(".navbar li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});