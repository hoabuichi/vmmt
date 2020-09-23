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