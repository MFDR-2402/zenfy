// const header = document.querySelector("nav");

// document.addEventListener("scroll" ,(e) => {
//     let scroll = Math.round(window.scrollY);

//     if (scroll > 100) {
//         header.classList.add("sticky")
//     }else {
//         header.classList.remove("sticky")
//     }

//     console.log(scroll);
    
// })

const mobile_menu = document.querySelector("#mobile_menu")
const barsIcon = document.querySelector("#bars-icon")


function showMenu() {
    mobile_menu.classList.toggle("show-menu")
}

barsIcon.addEventListener("click", showMenu)

