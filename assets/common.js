//headerBlock
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

//popularGoodsBlock
document.addEventListener( "DOMContentLoaded", function(){ 
  let popularGoodsBlock = document.getElementById("popular-goods"); 
  !!popularGoodsBlock 

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

  $(document).ready(function(){
    $('.book-card__like-icon').click(function(){
      $(this).toggleClass('book-card__like-icon_active');
    });
  });

});

//salesBlock
document.addEventListener( "DOMContentLoaded", function(){ 
  let salesBlock = document.getElementById("sales"); 
  !!salesBlock 

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

  $(document).ready(function(){
    $('.book-card__like-icon').click(function(){
      $(this).toggleClass('book-card__like-icon_active');
    });
  });

});

//recomendsBlock
document.addEventListener( "DOMContentLoaded", function(){ 
  let recomendsBlock = document.getElementById("recomends"); 
  !!recomendsBlock 

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

  $(document).ready(function(){
    $('.book-card__like-icon').click(function(){
      $(this).toggleClass('book-card__like-icon_active');
    });
  });

});

//aboutCompanyBlock
document.addEventListener( "DOMContentLoaded", function(){ 
  let aboutCompanyBlock = document.getElementById("about-company"); 
  !!aboutCompanyBlock 

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

});

//goToCatalogBlock
document.addEventListener( "DOMContentLoaded", function(){ 
  let goToCatalogBlock = document.getElementById("go-to-catalog"); 
  !!goToCatalogBlock 

  new Swiper(".go-to-catalog_swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});

//aboutUsPage
document.addEventListener( "DOMContentLoaded", function(){ 
  let aboutUsPage = document.getElementById("aboutUs"); 
  !!aboutUsPage 

  function aboutUsText(){
    if ($(window).width() >= '767'){
      $('.aboutUs__pages-text').appendTo('.aboutUs__pages-text_between');
      $('.aboutUs__image_right').css('margin-left','32px');
      $('.aboutUs__images').removeClass('flex-col');
      $('.aboutUs__images').addClass('flex');
    } else {
      $('.aboutUs__pages-text').appendTo('.aboutUs__pages-text_top');
      $('.aboutUs__image_right').css('margin','0 auto');
      $('.aboutUs__images').removeClass('flex');
      $('.aboutUs__images').addClass('flex-col');
    }
  }
  $(window).on('load resize',aboutUsText);

});

//eventsPage
document.addEventListener( "DOMContentLoaded", function(){ 
  let eventsPage = document.getElementById("events"); 
  !!eventsPage 

  function eventsText(){
    if ($(window).width() >= '1199'){
      $('.events__image-2').appendTo('.events__images');
      $('.events__images').appendTo('.events__images_total');
    } else if ($(window).width() >= '767'){
      $('.events__image-2').appendTo('.events__images');
      $('.events__images').appendTo('.events__images_top');
    } else{
      $('.events__images').appendTo('.events__images_top');
      $('.events__image-2').appendTo('.events__images_bottom');
    }
  }
  $(window).on('load resize',eventsText);

});


