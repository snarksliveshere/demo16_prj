// captcha
// var onloadCallback = function() {
//     mysitekey = '6Leq4jcUAAAAAK9o3wR7h_lpIMQvOQ2Kr2Ldr-00';
//
//     if($('#callback_g').length ){
//         grecaptcha.render('callback_g', {
//             'sitekey' : mysitekey
//         });
//     }
// }
$(function () {


    var body = $('body');
    var mql = window.matchMedia('all and (max-width: 767px)');
    if (mql.matches) {
        $('.mobile_click').click(function () {
            $('.top_menu').slideToggle();
        });

    } // end of resize < 768
    else {


    } // end of Resize > 768
    // jsDesc: slick set
    $('.aside_slider').slick({
        dots: true,
        autoplay: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 99999,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // jsDesc: fancybox
    $(".fancybox").fancybox({
        buttons: ['close']
    });
    $('[data-event]').on('click', function () {
        if ($(this).data('event') == 'fancy') {
            $.fancybox.open({
                src: '#' + $(this).data('name'),
            });
        }
    });

    // плавный скролл

    $(".top_menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });








});
