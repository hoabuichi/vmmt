$('.products.lime').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    dots: true
});

var selectTab = function(tab) {
    $('.products.slicked').slick("unslick");
    $('.products').removeClass("slicked");
    $('.products').hide();
    $('.products.' + tab).show();
    $('.products.' + tab).addClass("slicked");
    $('.products.' + tab).slick({
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        slidesToScroll: 1,
        dots: true
    });
}

$('.projects').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    dots: true
});
          