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

$('.projects').slick(slickOptions);    

$('.big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.sub-big-images'
});  

$('.sub-big-images').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.big-images',
  mobileFirst:true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    }
  ]
});

$('.des-big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.des-sub-big-images'
});  

$('.des-sub-big-images').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.des-big-images',
  mobileFirst:true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    }
  ]
});

var changeTab = function(tab) {
  $('.tab-content .tab').hide();
  $('.' + tab).show();
};

$(".mobile-nav").click(function() {
  $('.mobile-nav-content').css('left', 0);
  $('.background-overlay-mobile').css('left', 0);
});

$(".close-icon").click(function() {
  $('.mobile-nav-content').css('left', "-100%");
  $('.background-overlay-mobile').css('left', "-100%");
});