var slickOptions = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

$(".partners").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});

$(".mobile-nav").click(function () {
    $(".mobile-nav-content").css("left", 0);
    $(".background-overlay-mobile").css("left", 0);
});

$(".close-icon").click(function () {
    $(".mobile-nav-content").css("left", "-100%");
    $(".background-overlay-mobile").css("left", "-100%");
});

$('.nav-item.introduce').click(function() {
    $('html, body').animate({
        scrollTop: $('#introduce').offset().top - 50
    }, 1000);
});

$('.nav-item.vision').click(function() {
    $('html, body').animate({
        scrollTop: $('#vision').offset().top
    }, 1000);
});