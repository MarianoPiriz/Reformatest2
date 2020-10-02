window.addEventListener("resize", listenerWindowSize);

function listenerWindowSize() {
  var lht1 = document.querySelectorAll(".mainTitle");

  var userAgent = navigator.userAgent;
  var hSize = screen.height;
  var wSize = screen.width;

  console.log(userAgent);

  console.log("Alto:", hSize);

  console.log("Ancho:", wSize);

  console.log(lht1);

  var logoInicio = document.getElementById("logoInicio");
  const subTitle = document.querySelectorAll(".subtitle");
  var footerContainer = document.getElementById("footerContainer");
  var mainNav = document.getElementById("mainNav");

  if (wSize <= 414) {
    lht1[0].style.lineHeight = "16vh";
    lht1[1].style.lineHeight = "16vh";
    lht1[2].style.lineHeight = "16vh";
    lht1[3].style.lineHeight = "16vh";
    lht1[4].style.lineHeight = "16vh";
    logoInicio.style.width = "17vw";
    subTitle[0].style.fontSize = "5vw";
    subTitle[1].style.fontSize = "5vw";
    subTitle[2].style.fontSize = "5vw";
    subTitle[3].style.fontSize = "5vw";
    subTitle[4].style.fontSize = "5vw";
    footerContainer.style.paddingBottom = "3%";
    footerContainer.style.paddingTop = "3%";
  }
  if (wSize >= 415 && wSize <= 736) {
    lht1[0].style.lineHeight = "50vh";
    lht1[1].style.lineHeight = "50vh";
    lht1[2].style.lineHeight = "50vh";
    lht1[3].style.lineHeight = "50vh";
    lht1[4].style.lineHeight = "50vh";
    logoInicio.style.width = "10vw";
    subTitle[0].style.fontSize = "3vw";
    subTitle[1].style.fontSize = "3vw";
    subTitle[2].style.fontSize = "3vw";
    subTitle[3].style.fontSize = "3vw";
    subTitle[4].style.fontSize = "3vw";
  }

  if (wSize >= 737 && wSize <= 1024) {
    lht1[0].style.lineHeight = "57vh";
    lht1[1].style.lineHeight = "57vh";
    lht1[2].style.lineHeight = "57vh";
    lht1[3].style.lineHeight = "57vh";
    lht1[4].style.lineHeight = "57vh";
    logoInicio.style.width = "8vw";
    subTitle[0].style.fontSize = "3vw";
    subTitle[1].style.fontSize = "3vw";
    subTitle[2].style.fontSize = "3vw";
    subTitle[3].style.fontSize = "3vw";
    subTitle[4].style.fontSize = "3vw";

    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
  }

  if (wSize > 1024) {
    lht1[0].style.lineHeight = "55vh";
    lht1[1].style.lineHeight = "55vh";
    lht1[2].style.lineHeight = "55vh";
    lht1[3].style.lineHeight = "55vh";
    lht1[4].style.lineHeight = "55vh";
    logoInicio.style.width = "6vw";
    subTitle[0].style.fontSize = "2.5vw";
    subTitle[0].style.marginTop = "1%";
    subTitle[1].style.fontSize = "2.5vw";
    subTitle[1].style.marginTop = "1%";
    subTitle[2].style.fontSize = "2.5vw";
    subTitle[2].style.marginTop = "1%";
    subTitle[3].style.fontSize = "2.5vw";
    subTitle[3].style.marginTop = "1%";
    subTitle[4].style.fontSize = "2.5vw";
    subTitle[4].style.marginTop = "1%";
  }
  if (userAgent.match(/iPad/i)) {
    lht1[0].style.lineHeight = "22vh";
    lht1[1].style.lineHeight = "22vh";
    lht1[2].style.lineHeight = "22vh";
    lht1[3].style.lineHeight = "22vh";
    lht1[4].style.lineHeight = "22vh";
    footerContainer.style.paddingBottom = "3%";
    footerContainer.style.paddingTop = "3%";
    subTitle[0].style.marginTop = "3%";
    subTitle[1].style.marginTop = "3%";
    subTitle[2].style.marginTop = "3%";
    subTitle[3].style.marginTop = "3%";
    subTitle[4].style.marginTop = "3%";
    mainNav.style.height = "22vh";
  }

  if (wSize >= 1024 && wSize <= 1366 && hSize >= 768 && hSize <= 1024) {
    lht1[0].style.lineHeight = "40vh";
    lht1[1].style.lineHeight = "40vh";
    lht1[2].style.lineHeight = "40vh";
    lht1[3].style.lineHeight = "40vh";
    lht1[4].style.lineHeight = "40vh";
    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
    mainNav.style.height = "45vh";
  }
  if (userAgent.match(/iPad/i) && wSize >= 1024 && wSize <= 1366) {
    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
  }
}

listenerWindowSize();

//IMGSLIDER/////////////////////////////////////////////////////////////////////

// const slideSize = document.querySelector(".slider").children[0].scrollWidth;
// console.log(slideSize);

// const diseFotos = document.querySelectorAll(".diseFotos");
// console.log(diseFotos);
// const slides = Array.from(diseFotos);
// console.log(slides);

// const fotosWidth = document.querySelector(".slider").children[0].width;
// console.log(fotosWidth);

const slider = document.querySelector(".slider");
console.log(slider);

const slides = Array.from(slider.children);

console.log(slides);

// const slideSize = slides[0].clientWidth;

// console.log(slideSize);

let multiplicador = 0;

const imgPrev = document.querySelector(".imgPrev");

imgPrev.addEventListener("click", () => {
  if (multiplicador <= 0) {
    multiplicador = 14;
  }

  multiplicador--;
  console.log(multiplicador);
  const fotosWidth = document.querySelector(".slider").children[0].width;
  console.log(fotosWidth);
  slider.style.transform = "translateX(-" + fotosWidth * multiplicador + "px)";
  console.log("Prev");
});
const imgNext = document.querySelector(".imgNext");
imgNext.addEventListener("click", () => {
  if (multiplicador >= 13) {
    multiplicador = -1;
  }
  const fotosWidth = document.querySelector(".slider").children[0].width;
  console.log(fotosWidth);

  multiplicador++;
  console.log(multiplicador);
  slider.style.transform = "translateX(-" + fotosWidth * multiplicador + "px)";
  console.log("Next");
});
