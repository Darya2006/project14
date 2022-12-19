$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
})

sliderSecondBlock()
function sliderSecondBlock() {
    // $('.reviews .evriewsBlock .info-block .item').css('opacity', 0.3);
    // $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).css('opacity', 1);
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active');
}

$('.reviews .reviewsBlock .info-block .slick-arrow').on('click',function sliderSecondBlock(){
        $('.reviews .reviewsBlock .info-block .item.slick-active').removeClass('active');
        $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active');
});