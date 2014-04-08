$(function() {
    $('.carousel').carousel('cycle');

    $('.fd-effect').hover(function () {
        $(this).children("img").stop().fadeIn('slow');  // add .stop() to prevent event chaining
    }, function () {
        $(this).children("img").stop().fadeOut("slow");
    });  // end .fd-effect

});