$(window).on('scroll', function() {

    if ( $(window).scrollTop() > 176 ) {
        $('main').addClass('main_stick')
        $('.header_banner').parent().addClass('header_stick')

    } else {
        $('main').removeClass('main_stick')
        $('.header_banner').parent().removeClass('header_stick')
    }
});
