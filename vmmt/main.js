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

var partnersOptions = {
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
};

$('.homepage .products.lime').slick(slickOptions);

var handleSubTabChange = function(tab, parentClass) {
  $('.' + parentClass + ' .products.slicked .items').slick("unslick");
  $('.' + parentClass + ' .products').removeClass("slicked");
  $('.' + parentClass + ' .products').hide();
  $('.' + parentClass + ' .products.' + tab).show();
  $('.' + parentClass + ' .products.' + tab).addClass("slicked");
  $('.' + parentClass + ' .products.' + tab + " .items").slick(slickOptions);
};

var selectTab = function(tab) {
  $('.products.slicked').slick("unslick");
  $('.products').removeClass("slicked");
  $('.products').hide();
  $('.products.' + tab).show();
  $('.products.' + tab).addClass("slicked");
  $('.products.' + tab).slick(slickOptions);
}

$('.homepage .projects').slick(slickOptions);

$('.homepage .news').slick(slickOptions);

$('.homepage .partners').slick(partnersOptions);

$('.about-page .partners').slick(partnersOptions);

var selectTabHandler = function(tab, parentClass) {
  if(!tab) {
    $('.' + parentClass + ' .products').hide();
    $('.' + parentClass + ' .products.all').show();
    return;
  }
  handleSubTabChange(tab, parentClass);
  
}

var selectProductListTab = function(tab) {
  selectTabHandler(tab, 'product-list-page');
  showTitleFunc();
}  

$('.product-detail-page .products').slick(slickOptions);    

$('.product-detail-page .big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.product-detail-page .sub-big-images'
});  

$('.product-detail-page .sub-big-images').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-detail-page .big-images',
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

$('.product-detail-page .des-big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.product-detail-page .des-sub-big-images'
});  

$('.product-detail-page .des-sub-big-images').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-detail-page .des-big-images',
  mobileFirst:true,
  centerMode: true,
  focusOnSelect: true
});

var changeTabHandler = function(tab, parentClass) {
  $('.' + parentClass + ' .tab-content .tab').hide();
  $('.' + parentClass + ' .' + tab).show();
}

var changeProductTab = function(tab) {
  changeTabHandler(tab, 'product-detail-page');
};

var changeProjectDetailTab = function(tab) {
  changeTabHandler(tab, 'project-detail-page');
};

$('.project-detail-page .projects').slick(slickOptions);    

$('.project-detail-page .big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.project-detail-page .sub-big-images'
});  

$('.project-detail-page .sub-big-images').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.project-detail-page .big-images',
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

$('.project-detail-page .des-big-images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  asNavFor: '.project-detail-page .des-sub-big-images'
});  

$('.project-detail-page .des-sub-big-images').slick({
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.project-detail-page .des-big-images',
  mobileFirst:true,
  centerMode: true,
  focusOnSelect: true
});

var selectProjectTab = function(tab) {
  $('.projects-page .products').hide();
  $('.projects-page .btn-project').removeClass('active');
  $('.projects-page .products.' + tab).show();
  $('.projects-page .' + tab).addClass('active');
}  

var selectProductExportTab = function(tab) {
  selectTabHandler(tab, 'product-export-page ');
  showTitleFunc();
}

$('#searchIcon').click(function() {
  $(".search-icon.desktop .search-area").css('display', 'flex');
  $(".search-icon.desktop .search-backdrop").show();
});

$(".search-icon.desktop .search-backdrop .fa-times").click(function() {
  $(".search-icon.desktop .search-area").hide();
  $(".search-icon.desktop .search-backdrop").hide();
  $('#searchInputDesk').val('');
});

$('.search-icon.desktop input').keypress(function (e) {
  if (e.which == 13) {
    $(".search-icon.desktop .search-backdrop").hide(); 
    $(".search-icon.desktop .search-area").hide();
    $('#searchInputDesk').val('');
  }
});

$(".mobile-nav").click(function() {
  $('.mobile-nav-content').css('left', 0);
  $('.background-overlay-mobile').css('left', 0);
});

$(".close-icon").click(function() {
  $('.mobile-nav-content').css('left', "-100%");
  $('.background-overlay-mobile').css('left', "-100%");
});

let titles = $('.title');
let bannerText = $('.banner-text');

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

let showBannerText = function() {
  for(let i = 0; i < bannerText.length; i++) {
    if(isOnScreen(bannerText[i]) && !$(bannerText[i]).hasClass('loaded')) {
      $(bannerText[i]).addClass('loaded');
    }
  }
}

let reasons = $('.reasons');

let showVMMTReasons = function() {
  for(let i = 0; i < reasons.length; i++) {
    if(isOnScreen(reasons[i]) && !$(reasons[i]).hasClass('loaded')) {
      $(reasons[i]).addClass('loaded');
    }
  }
}

showTitleFunc();
showBannerText();
showVMMTReasons();

window.onscroll = function() {
  showTitleFunc();
  showBannerText();
  showVMMTReasons();
};