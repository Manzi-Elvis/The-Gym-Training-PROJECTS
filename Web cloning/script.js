// Simple navbar active switch
document.querySelectorAll(".navbar li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});

document.querySelectorAll(".socials i").forEach(item => {
  item.addEventListener("click", () => {
    alert("This is a demo website. Social media links are not available.");
  });
});

document.querySelector("button").addEventListener("click", () => {
  alert("This is a demo website. Services are not available.");
});

document.querySelector()