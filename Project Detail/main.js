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
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 3,
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
  focusOnSelect: true
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

let titles = $('.title');

function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window);
	var viewport_top = $window.scrollTop();
	var viewport_height = $window.height();
	var viewport_bottom = viewport_top + viewport_height;
	var $elem = jQuery(elem);
	var top = $elem.offset().top;
	var height = $elem.height();
	var bottom = top + height;

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
}

let showTitleFunc = function() {
  for(let i = 0; i < titles.length; i++) {
    if(isOnScreen(titles[i]) && !$(titles[i]).hasClass('loaded')) {
      $(titles[i]).addClass('loaded');
    }
  }
}

showTitleFunc();

window.onscroll = function() {
  showTitleFunc();
};