$(document).ready(function(){
    $('.full-screen').slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        arrows: true,
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