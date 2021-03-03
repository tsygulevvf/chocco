// $(document).ready(() => {
//   $('.products-slider__arrow_next').on('click', e => {
//     e.preventDefault();
//     $('.products-slider__list').css('left', '-100%');
//   });
// });

// $(document).ready(() => {
//   $('.products-slider__arrow_prev').on('click', e => {
//     e.preventDefault();
//     $('.products-slider__list').css('left', '0');
//   });
// });
const swiper = new Swiper('.swiper-container', {
  speed: 600,
  // Optional parameters
  //loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.products-slider__arrow_next',
    prevEl: '.products-slider__arrow_prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});