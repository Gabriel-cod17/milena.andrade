const liMobileSobre = document.querySelector("#liMobileSobre");
const liMobileRedes = document.querySelector("#liMobileRedes");
const liMobileServicos = document.querySelector("#liMobileServicos");
let menuMobile = document.querySelector('.mobile-menu');

liMobileSobre.addEventListener("click", () => {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
})

liMobileRedes.addEventListener("click", () => {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
})

liMobileServicos.addEventListener("click", () => {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
})




function menuShow() {
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
}