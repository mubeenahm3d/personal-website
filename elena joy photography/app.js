const nav = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const links = nav.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  hamburger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    hamburger.classList.toggle("toggle");
  });
});
