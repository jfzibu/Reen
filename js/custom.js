//owl-carousel JQuery Plugin start
$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});
//StickUp JQuery Plugin code start
//initiating jQuery
jQuery(function($) {
    $(document).ready(function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
    });
});


// Animated Counter code start
jQuery(function($) {
    $('#counter-block').ready(function() {
        $('.fb').animationCounter({
            start: 0,
            end: 5000,
            step: 1,
            delay: 100,

        });
        $('.wb').animationCounter({
            start: 0,
            end: 500,
            step: 1,
            delay: 100,

        });
        $('.pb').animationCounter({
            start: 0,
            end: 600,
            step: 1,
            delay: 100,

        });
        $('.jb').animationCounter({
            start: 0,
            end: 50000,
            step: 1,
            delay: 100,

        });
    });
});

//progress bar plugin start here
jQuery(function($) {
    $(document).ready(function() {


        $('#bar2').barfiller();
        $('#bar3').barfiller({
            barColor: '#fc6'
        });
        $('#bar4').barfiller({
            barColor: '#900',
            duration: 3000
        });
    });
});