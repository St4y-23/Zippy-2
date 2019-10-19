$(function(){

  $(".slider-top").slick({
    dots: true,
    arrows: false,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".video-slider__inner").slick({
    centerMode: true,
    centerPadding: '320px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  $('.slider-life__top-inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider-life/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider-life/arrow-right.svg" alt=""></button>',
    asNavFor: '.slider-life__bottom-inner',
  });

  $('.slider-life__bottom-inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-life__top-inner',
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
  });

  


});