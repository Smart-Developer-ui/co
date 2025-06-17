
// /* testimonial.js */
// const swiper = new swiper(".testimonials-swiper", {
//   loop: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   /* Responsive slidesPerView */
//   breakpoints: {
//     0:   { slidesPerView: 1 },  // Mobile
//     600: { slidesPerView: 2 },  // Small tablets
//     992: { slidesPerView: 3 },  // Desktop
//   },
// });
// /* testimonial.js */
// const swiper = new Swiper(".testimonials-swiper", {
//   loop: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   /* Responsive slidesPerView */
//   breakpoints: {
//     0:   { slidesPerView: 1 },  // Mobile
//     600: { slidesPerView: 2 },  // Small tablets
//     992: { slidesPerView: 3 },  // Desktop
//   },
// });


/* testimonial.js */
const testimonialSwiper = new Swiper(".testimonials-swiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  /* Responsive slidesPerView */
  breakpoints: {
    0:   { slidesPerView: 1 },  // Mobile
    600: { slidesPerView: 2 },  // Small tablets
    992: { slidesPerView: 3 },  // Desktop
  },
});
