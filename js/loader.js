const loader = document.querySelector(".loader");
const maincontent = document.querySelector(".maincontent");
const mybody = document.querySelector("body");

function init() {
  setTimeout(() => (loader.style.opacity = 0), 5000);
  setTimeout(() => {
    loader.style.display = "none";
    maincontent.style.display = "block";
    setTimeout(() => (maincontent.style.opacity = 1), 500);
    setTimeout(() => (mybody.style.backgroundColor = "#fa9a1c"), 500);
  }, 6000);
}

init();
