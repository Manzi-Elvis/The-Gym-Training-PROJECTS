const tabButtons = document.querySelectorAll(".tab-btn")
const tabContent = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
      button.addEventListener("click" , () => {
            const selectedTab = button.dataset.tab;

            tabButtons.forEach((btn) => {
                  btn.classList.remove("active")
            });

            tabContent.forEach((content) => {
                  content.classList.remove("active")
            });
            
            button.classList.add("active");

            const activeContent = document.getElementById(selectedTab);
            activeContent.classList.add("active")
      });
});