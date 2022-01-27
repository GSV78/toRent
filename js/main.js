$(function() {
    $('.slider').slick({
        autoplay: true,
        nextArrow: '<button class="slick-arrow slick-prev"><img src="images/arrowLeft.svg" alt="prevArrow"></button>',
        prevArrow: '<button class="slick-arrow slick-next"><img src="images/arrowRight.svg" alt="nextArrow"></button>',
        responsive: [
            {
                breakpoint: 441,
                settings: {
                    arrows: false,
                },
            }
        ],
    });

});

