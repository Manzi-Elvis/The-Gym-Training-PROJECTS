// Simple navbar active switch
document.querySelectorAll(".navbar li").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    item.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + navbar.offsetHeight;
      sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                  document.querySelector(".active").classList.remove("active");
                  const id = section.getAttribute("id");
                  const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
                  if (activeLink) {
                        activeLink.parentElement.classList.add("active");
                  }
            }
      });
});