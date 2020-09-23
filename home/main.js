var slickOptions = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

$('.products.lime').slick(slickOptions);

var selectTab = function(tab) {
    $('.products.slicked').slick("unslick");
    $('.products').removeClass("slicked");
    $('.products').hide();
    $('.products.' + tab).show();
    $('.products.' + tab).addClass("slicked");
    $('.products.' + tab).slick(slickOptions);
}

$('.projects').slick(slickOptions);

$('.news').slick(slickOptions);

$('.partners').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    mobileFirst:true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
});       

$(".mobile-nav").click(function() {
  $('.mobile-nav-content').css('left', 0);
  $('.background-overlay-mobile').css('left', 0);
});

$(".close-icon").click(function() {
  $('.mobile-nav-content').css('left', "-100%");
  $('.background-overlay-mobile').css('left', "-100%");
});