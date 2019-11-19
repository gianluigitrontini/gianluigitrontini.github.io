(function ($) {
    'use strict';
    AOS.init();

    // ----------------------- 
    // Progress Bar--------------------
    // 
    // 

    $(window).on('load', function () {

        $('.progress-bar').each(function () {
            var width = $(this).data('percent');
            $(this).css({
                'transition': 'width 3s'
            });
            $(this).appear(function () {
                console.log('hello');
                $(this).css('width', width + '%');
                $(this).find('.count').countTo({
                    from: 0,
                    to: width,
                    speed: 3000,
                    refreshInterval: 50
                });
            });
        });
    });

    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8000
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

    $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


})(jQuery);

// Hamburger Menu Button Animation
$(document).ready(function () {
    $('#myNavBtn').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});