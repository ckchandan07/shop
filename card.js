$(document).ready(function () {
    $('.carouse3l').slick({
        speed: 200,
        slidesToShow: 4,  // Default: 4 slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [{
            breakpoint: 1024,  // Tablet and below (screens smaller than 1024px)
            settings: {
                slidesToShow: 3,  // 3 slides for medium screens
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 800,  // Mobile
            settings: {
                slidesToShow: 2,  // 2 slides on mobile
                slidesToScroll: 1,
                dots: true,
                infinite: true,
            }
        }, {
            breakpoint: 480,  // Small mobile screens
            settings: {
                slidesToShow: 1,  // 1 slide on small screens
                slidesToScroll: 1,
                dots: true,
                infinite: true,
            }
        }]
    });
});