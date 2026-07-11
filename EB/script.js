const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click" , () => {
      console.log("Grandparent clicked")
})

parent.addEventListener("click" , () => {
      console.log("Parent clicked")
})

child.addEventListener("click" , () => {
      event.stopPropagation()
      console.log("Child clicked")
})