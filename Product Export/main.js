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