new Swiper(".review__container", {
  slidesPerView: 1.4,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 1.4,
      spaceBetween: 60,
    },
  },
});
