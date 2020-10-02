const aDise = document.querySelector(".aDise");
const inicio = document.querySelector(".inicio");
const dise = document.querySelector(".dise");
const obras = document.querySelector(".obras");
const serv = document.querySelector(".servicios");
const mail = document.querySelector(".mail");
const diseCover = document.querySelector(".diseCover");
const imgTitleB = document.querySelector(".imgTitleB");

const mainNavOpen = document.querySelector("#mainNav");
let menuOpen = false;

const btnMenu = document.querySelector(".btn-menu");
const home = document.querySelector("#home");

btnMenu.addEventListener("click", () => {
  console.log("click");

  if (!menuOpen) {
    setTimeout(() => (mainNavOpen.style.display = "block"), 100);
    setTimeout(() => (mainNavOpen.style.transform = "translateY(0)"), 150);
    mainNavOpen.style.animation = "navHeight 500ms ease-out";

    menuOpen = true;
  } else {
    setTimeout(() => (mainNavOpen.style.display = "none"), 400);
    mainNavOpen.style.animation = "navSwrink 500ms ease-out";

    menuOpen = false;
  }
});
var scrolled = document.addEventListener("scroll", () => {
  console.log("Scrolled");

  setTimeout(() => (mainNavOpen.style.display = "none"), 400);
  mainNavOpen.style.animation = "navSwrink 500ms ease-out";
  menuOpen = false;
});

aDise.addEventListener("click", () => {
  console.log("click");
  setTimeout(() => (mainNavOpen.style.display = "none"), 400);
  mainNavOpen.style.animation = "navSwrink 500ms ease-out";
  inicio.style.transform = "translateX(-100%)";
  obras.style.transform = "translateX(200%)";
  serv.style.transform = "translateX(200%)";
  mail.style.transform = "translateX(200%)";

  setTimeout(() => (dise.style.transform = "translatex(-95%)"), 500);
  setTimeout(() => (diseCover.style.transform = "translatex(0%)"), 900);
  setTimeout(() => (imgTitleB.style.opacity = "100%"), 1000);

  dise.firstElementChild.style.paddingTop = "10px";

  menuOpen = false;
});

const aObra = document.querySelector(".aObra");
aObra.addEventListener("click", () => {
  console.log("click");
  setTimeout(() => (mainNavOpen.style.display = "none"), 400);
  mainNavOpen.style.animation = "navSwrink 500ms ease-out";
  inicio.style.transform = "translateX(-200%)";
  dise.style.transform = "translateX(-300%)";
  serv.style.transform = "translateX(200%)";
  mail.style.transform = "translateX(200%)";

  setTimeout(() => (obras.style.transform = "translatex(-198%)"), 500);

  menuOpen = false;
});

const aService = document.querySelector(".aService");

aService.addEventListener("click", () => {
  console.log("click");
  setTimeout(() => (mainNavOpen.style.display = "none"), 400);
  mainNavOpen.style.animation = "navSwrink 500ms ease-out";

  inicio.style.transform = "translateX(-200%)";
  dise.style.transform = "translateX(-300%)";
  obras.style.transform = "translateX(-300%)";
  mail.style.transform = "translateX(-200%)";

  setTimeout(() => (serv.style.transform = "translatex(-302%)"), 500);

  menuOpen = false;
});

const aContact = document.querySelector(".aContact");

aContact.addEventListener("click", () => {
  console.log("click");
  setTimeout(() => (mainNavOpen.style.display = "none"), 400);
  mainNavOpen.style.animation = "navSwrink 500ms ease-out";

  inicio.style.transform = "translateX(-200%)";
  dise.style.transform = "translateX(-300%)";
  obras.style.transform = "translateX(-300%)";
  serv.style.transform = "translateX(-200%)";

  setTimeout(() => (mail.style.transform = "translatex(-392%)"), 500);

  menuOpen = false;
});

const btnHome = document.querySelector(".btn__home");

btnHome.addEventListener("click", () => {
  console.log("click");

  setTimeout(() => (inicio.style.transform = "translateX(0)"), 500);
  setTimeout(() => (dise.style.transform = "translatex(100%)"), 500);
  setTimeout(() => (obras.style.transform = "translatex(100%)"), 500);
  setTimeout(() => (serv.style.transform = "translatex(100%)"), 500);
  setTimeout(() => (mail.style.transform = "translatex(100%)"), 500);
});
