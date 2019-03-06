// Loading Screen

$(window).on('load', function () {

    'use strict';

    $('.loading-screen').fadeOut(3000, function () {
        $(this).remove();
        $('body').css("overflow", "auto");
    });
});