$( document ).ready(function() {
    $('.scroll-to-cta').on('click', function(event) {
        var target = $("#sign-up");
        var targetTwo = target.offset().top - window.innerHeight;
        var targetThree = targetTwo + $("#sign-up").height();
        $('html, body').animate({
            scrollTop: targetThree
        }, 900);
        event.preventDefault();
    });
});








