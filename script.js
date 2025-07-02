const hamburger = document.getElementById("hamburger")
const menuBar = document.querySelector(".navbar-menu-small .menu-bar")

hamburger.addEventListener("click", ()=>{
   menuBar.classList.toggle("show")
})