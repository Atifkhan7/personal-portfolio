// Swiper JS--------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  //   Swiper breakpoints------------------------------
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Window Scroll Nav Effects JS----------------------
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav-scroll", window.scrollY > 0);
});
