//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Page scroll on click function.
$(function() {
    $(document).on('click', 'a.page-scroll, .navbar-toggle', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top- $('#header').outerHeight()
        },500, 'easeInOutExpo');
        event.preventDefault();
    });
});
