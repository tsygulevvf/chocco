const slider = $('.products-slider__list').bxSlider({
  pager: false,
  controls: false
});

$('.products-slider__pointer_prev').click((e) => {
  e.preventDefault();
  
  slider.goToPrevSlide();
});

$('.products-slider__pointer_next').click((e) => {
  e.preventDefault();
  
  slider.goToNextSlide();
});

