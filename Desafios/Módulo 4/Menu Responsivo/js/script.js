let ulMenu = document.querySelector("header ul")
let liMenu = document.querySelectorAll("header li")
function clicouMenu() {
    ulMenu.classList.toggle("toggleMenu")
    for (let c = 0; c < liMenu.length; c++) {
        liMenu[c].classList.toggle("toggleAddOpcao")
    }
}

// function mauseFora() {
//    ulMenu.style.height = "0" 
//    ulMenu.style.transition = "all ease 1s"
//    for (let c = 0; c < liMenu.length; c++) {
//     setTimeout(function() {
//         liMenu[c].style.display = "none"
//         liMenu[c].style.opacity = "0"
//     }, 200)
// }
// }
