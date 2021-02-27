$(document).ready(function(){
  const slider = $('.products-slider__list').bxSlider({
  //pager: false,
  //controls: false
});

$('.products-slider__pointer_prev').click((e) => {
  console.log(12321);
  slider.goToPrevSlide();
});

$('.products-slider__pointer_next').click((e) => {
  e.preventDefault();
  console.log(12321);
  slider.goToNextSlide();
});

});