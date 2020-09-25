var selectTab = function(tab) {
    $('.products').hide();
    $('.btn-project').removeClass('active');
    $('.products.' + tab).show();
    $('.' + tab).addClass('active');
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