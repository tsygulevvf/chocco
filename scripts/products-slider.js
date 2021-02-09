$(document).ready(() => {
  $('.products-slider__arrow_next').on('click', e => {
    e.preventDefault();
    $('.products-slider__list').css('left', '-100%');
  });
});

$(document).ready(() => {
  $('.products-slider__arrow_prev').on('click', e => {
    e.preventDefault();
    $('.products-slider__list').css('left', '0');
  });
});