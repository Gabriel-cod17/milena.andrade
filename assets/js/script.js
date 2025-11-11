const liMobileSobre = document.querySelector("#liMobileSobre");
const liMobileRedes = document.querySelector("#liMobileRedes");
const liMobileServicos = document.querySelector("#liMobileServicos");
const button_menu = document.getElementById("button_menu");
const menuMobile = document.querySelector(".mobile-menu");

// UM EVENTO DE CLICK PARA O ITEM SOBRE DA BARRA DE NAVEGAÇÃO QUE VERIFICA SE TEM A CLASSE OPEN E TROCA A IMAGEM DO MENU

liMobileSobre.addEventListener("click", () => {
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
});

// UM EVENTO DE CLICK PARA O ITEM REDES DA BARRA DE NAVEGAÇÃO QUE VERIFICA SE TEM A CLASSE OPEN E TROCA A IMAGEM DO MENU

liMobileRedes.addEventListener("click", () => {
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
});

// UM EVENTO DE CLICK PARA O ITEM SERVIÇOS DA BARRA DE NAVEGAÇÃO QUE VERIFICA SE TEM A CLASSE OPEN E TROCA A IMAGEM DO MENU

liMobileServicos.addEventListener("click", () => {
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
});

// FUNÇÃO MENU SHOW QUE AO SER CHAMADA ELA VERIFICA SE TEM A CLASSE OPEN E TROCA A IMAGEM DO MENU

function menuShow() {
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
  }
}

// UM EVENTO DE CLICK NO BOTÃO MENU QUE AO SER CLICADO CHAMA A FUNÇÃO MENUSHOW

button_menu.addEventListener("click", () => {
  menuShow();
});
