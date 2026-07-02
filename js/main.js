// Show Menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav link, we remove the show-menu click
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ADD SHADOW HEADER
const shadowHeader = () => {
  const header = document.getElementById("header");

  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

// SWIPER POPULAR
const swiperPopular = new Swiper(".popular-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});
