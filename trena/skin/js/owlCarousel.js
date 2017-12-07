/**
 * Created by yura on 03.12.17.
 */
$(document).ready(function () {
    $('#carousel_main_page').carousel({
        interval: 6000
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        scrollPerPage: false,
        navigation: true,
        dots: false,
        navText: ['<span class="fa fa-angle-left fa-2x"></span>', '<span class="fa fa-angle-right fa-2x"></span>'],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

});

$("#owl_carousel").owlCarousel({
    animateOut: 'zoomOut',
    animateIn: 'zoomIn',
    items:1,
    dots: false,
    nav: true,
    navText: ["<div class='fa fa-angle-right fa-2x'></div>","<div class='fa fa-angle-left fa-2x'></div>"]
});
