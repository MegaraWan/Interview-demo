//nav
$(document).ready(function () {
  if ($(window).width() < 1024) {
    $(".nav").addClass("fixed");
  }
});

$(window).on("scroll", function () {
  if ($(window).width() >= 1024) {
    if ($(window).scrollTop() > $(".banner").height()) {
      $(".nav").addClass("fixed");
    } else {
      $(".nav").removeClass("fixed");
    }
  }
});


jQuery(document).ready(function() {
  console.log("Document is ready!");

  function checkSectionHighlight() {
      $('li a').each(function() {
          var currLink = $(this);
          var refElement = $(currLink.attr('href'));
          console.log("Checking link to: ", currLink.attr('href'));

          if (refElement.length) {
              if (refElement.position().top <= $(window).scrollTop() && refElement.position().top + refElement.height() > $(window).scrollTop()) {
                  console.log("Adding arrive to: ", currLink.attr('href'));
                  $('li a').removeClass('arrive');  
                  currLink.addClass('arrive');  
              }
          } else {
              console.log("Didn't find element for: ", currLink.attr('href'));
          }
      });
  }

  $(window).on('scroll', function() {
      console.log("Scrolled");
      checkSectionHighlight();
  });

  $('li a').on('click', function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      
      if (target && $(target).length) {
          $('html, body').animate({
              scrollTop: $(target).offset().top
          }, 1000, checkSectionHighlight); 
      }
  });

  checkSectionHighlight();
});



var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}


//input 點選改說明字體顏色
document.addEventListener('DOMContentLoaded', function() {
  let inputs = document.querySelectorAll('.member-info, .member-needs');

  inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
          let spanElement = this.previousElementSibling;
          if (spanElement && spanElement.classList.contains('contact-info-input-title')) {
              spanElement.style.color = '#f15a24'; 
          }
      });

      input.addEventListener('blur', function() {
          let spanElement = this.previousElementSibling;
          if (spanElement && spanElement.classList.contains('contact-info-input-title')) {
              spanElement.style.color = '';  
          }
      });
  });
});


//回到頂部的
$(document).ready(function () {
  // 捲軸偵測距離頂部超過 50 才顯示按鈕
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      if ($(".back-top").hasClass("hide")) {
        $(".back-top").toggleClass("hide");
      }
    } else {
      $(".back-top").addClass("hide");
    }
  });

  // 點擊按鈕回頂部
  $(".back-top").on("click", function (event) {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500 // 回頂部時間為 500 毫秒
    );
  });
});