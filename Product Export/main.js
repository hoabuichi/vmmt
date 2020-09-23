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

var selectTab = function(tab) {
    if(!tab) {
      $('.products').hide();
      $('.products.all').show();
      return;
    }
    $('.products.slicked .items').slick("unslick");
    $('.products').removeClass("slicked");
    $('.products').hide();
    $('.products.' + tab).show();
    $('.products.' + tab).addClass("slicked");
    $('.products.' + tab + " .items").slick(slickOptions);
}     

$(".mobile-nav").click(function() {
  $('.mobile-nav-content').css('left', 0);
  $('.background-overlay-mobile').css('left', 0);
});

$(".close-icon").click(function() {
  $('.mobile-nav-content').css('left', "-100%");
  $('.background-overlay-mobile').css('left', "-100%");
});