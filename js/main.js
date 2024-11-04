$(document).ready(function () {
    $('.full-screen').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-Arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-Arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    fade: true,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    autoplay: true,
                    slidesToShow: 1,
                    autoplaySpeed: 3000,
                    fade: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.profile-cards').slick({
        slidesToShow: 4,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-Arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-Arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 7000,
                    slidesToShow: 3,
                    prevArrow: '<button type="button" class="slick-prev"><i class="icon-Arrow-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="icon-Arrow-right"></i></button>',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 7000,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 10000,
                    slidesToShow: 1,
                }
            }
        ]
    });
});