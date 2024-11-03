$(document).ready(function(){
    $('.full-screen').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon-Arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon-Arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    autoplay:true,
                    autoplaySpeed: 3000,
                    fade: true,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    autoplay:true,
                    autoplaySpeed: 3000,
                    fade: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
});
});