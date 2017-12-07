/**
 * Created by yura on 02.12.17.
 */
/*------------------slide-range------------------*/
$(function() {
    var slideRange = $( "#slider-range" );
    slideRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + slideRange.slider( "values", 0 ) +
        " - $" + slideRange.slider( "values", 1 ) );
} );
/*------------------/slide-range------------------*/


/*-------------------left menu open/close------------------------*/
$('.open_close').click(function() {
    $(this).toggleClass('active').find('i').toggleClass('fa-plus fa-minus');
});
/*-------------------/left menu open/close-----------------------*/


/*-------------------footer open/close---------------------------*/
var windWith = $(window).width();
if(windWith < 500){
    $('.js-collapsible').removeClass('in');
}
/*-------------------/footer open/close--------------------------*/

$('.navbar-toggle').click(function(){
    $('.navbar-collapse').toggleClass('right');
    $('.navbar-toggle').toggleClass('indexcity');
});

/*-----------open/close mobile shopping cart-----------------------*/
var $w = $(window).width();
if($w < 992){
    $('.fa-shopping-bag').addClass('open_bt');
    $('.open_bt').on('click', openCart);
}
function openCart() {
    document.getElementById("myCart").style.width = "300px";
    document.getElementById("modal").style.visibility= "visible";
}
function closeCart() {
    document.getElementById("myCart").style.width = "0";
    document.getElementById("modal").style.visibility= "hidden";
}

/*--------------------popup overlay-----------------------*/
var overLay = $("#modal");
overLay.on('click', function () {
    closeCart();
});
/*--------------------/popup overlay-----------------------*/


/*--------------------open/close mobile left navigation menu-------------------*/
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("modal").style.visibility= "visible";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("modal").style.visibility= "hidden";
}
overLay.on('click', function () {
    closeNav();
});
/*---------------------open/close mobile left navigation menu------------------*/


/*------------------float mega-menu-----------------------------*/
var elemFloatMainMenu = $('.float_main_menu');
$('.show_el').mouseenter(function () {
    elemFloatMainMenu.addClass('show');
    $('.show_el').mouseleave(function () {
        elemFloatMainMenu.removeClass('show');
    });
});
 elemFloatMainMenu.mouseenter(function () {
    elemFloatMainMenu.addClass('show');
    elemFloatMainMenu.mouseleave(function () {
        elemFloatMainMenu.removeClass('show');
    });
});


/*----------------------scroll fix nav menu-----------------------------*/
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function fixedMainMenu() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
/*----------------------/scroll fix nav menu-----------------------------*/


/*----------------------float bag-----------------------------------------*/
var popElem = $('.popup_content_my_bag');
$('#top_my_bag').mouseenter(function () {
    popElem.addClass('show');
    $('#top_my_bag').mouseleave(function () {
        popElem.removeClass('show');
    });
});
popElem.mouseenter(function () {
    popElem.addClass('show');
    popElem.mouseleave(function () {
        popElem.removeClass('show');
    });
});
/*----------------------/float bag-----------------------------------------*/


/*--------------------- popup add to cart --------------------- */
    (function () {
        $('.btn_add_bag').on('click', function (e) {
            e.preventDefault();
            $('.element_to_pop_up').bPopup();
        });
    })();
/*--------------------- /popup add to cart --------------------- */


/*--------------------- zoom pdp image------------------------------- */
$("#zoom_05").elevateZoom({
    zoomType : "inner",
    cursor: "crosshair"
});
/*--------------------- /zoom pdp image------------------------------- */


