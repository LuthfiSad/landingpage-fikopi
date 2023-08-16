const navNavbar = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu-list");
// Menu di klik
menu.onclick = () => {
  navNavbar.classList.toggle("active");
  return false;
};
document.addEventListener("scroll", () => {
  navNavbar.classList.remove("active");
});
document.onclick = (e) => {
  if (!menu.contains(e.target) && !navNavbar.contains(e.target)) {
    navNavbar.classList.remove("active");
  }
};
const cardBtn = document.querySelectorAll(".menu .row .menu-card .menu-card-btn");
cardBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
document.querySelector(".contact .row form .btn").onclick = (e) => {
  e.preventDefault();
};
document.querySelector(".menu .row .menu-card").onclick = (e) => {
  e.preventDefault();
};
var swiper = new Swiper(".menu .row", {
  slidesPerView: 3,
  spaceBetween: 70,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    485: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

