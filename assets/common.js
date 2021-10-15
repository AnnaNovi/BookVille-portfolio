new Swiper(".popular-goods-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 28
    },
  }
});
new Swiper(".sales-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 28
    },
  }
});
new Swiper(".recomends-swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      // when window width is >= 320px
    767: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 28
    },
  }
});
new Swiper(".about-company__text_swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

function windowSize(){
  if ($(window).width() >= '767'){
    $('.about-company__text_swiper').removeClass('visible');
    $('.about-company__text').addClass('visible');
  } else {
    $('.about-company__text').removeClass('visible');
    $('.about-company__text_swiper').addClass('visible');
  }
}
$(window).on('load resize',windowSize);

new Swiper(".go-to-catalog_swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function(){
	$('.nav__link_color').click(function(){
    $('.modal-subsection').toggleClass('visible');
	});
});
$(document).ready(function(){
	$('.nav__burger').click(function(){
    $('.modal-subsection').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.book-card__like-icon').click(function(){
    $(this).toggleClass('book-card__like-icon_active');
	});
});
