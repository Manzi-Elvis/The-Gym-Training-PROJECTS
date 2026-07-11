const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener("click",() => {
      console.log("Grand Parent Clicked")
})

parent.addEventListener("click",() => {
      console.log("Parent Clicked")
})

child.addEventListener("click",() => {
      event.stopPropagation()
      console.log("Child Clicked")
})