$(function () {
    // 20220620 seo0 topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });

    $('.mainSlider').on('init afterChange', function () {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

    $('.mainSlider').slick({
        arrows: false,
        autiplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        // autoplaySpeed :2000,
    });
})//the end