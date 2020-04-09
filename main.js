navbarColor = () => {
    $('#navbar').removeClass('bg-transparent');
    $('#navbar').removeClass('navbar-dark');
    $('#navbar').addClass('bg-white');
    $('#navbar').addClass('navbar-light');
    $('#navbar').css('border-bottom', '2px solid lightGray');
}

navbarTransparent = () => {
    $('#navbar').removeClass('bg-white');
    $('#navbar').removeClass('navbar-light');
    $('#navbar').addClass('bg-transparent');
    $('#navbar').addClass('navbar-dark');
    $('#navbar').css('border-bottom', '');
}

navbarTransition = () => {
    let scroll  = $(window).scrollTop();
    
    if (scroll <= 50 && !$('.navbar-collapse').hasClass('show')) {
        navbarTransparent();
    } else {
        navbarColor();
    }
}

slideAnimation = () => {
    $('.slideanim').each(function() {
        let pos = $(this).offset().top;
        let winTop = $(window).scrollTop();

        if (pos < winTop + 800) {
            $(this).addClass('slide');
        }
    });
}

$('.dropdown-toggle').on('mouseenter', function() {
    if (!$(this).parent().hasClass('show')) {
        $(this).click();
    }
});

$('.dropdown').hover(function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
}, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

$('.navbar-toggler').on('click', () => {
    if ($('.navbar-collapse').hasClass('show')) {
        setTimeout(() => {
            navbarTransparent();
        }, 200);
    } else {
        navbarColor();
    }
});

$('.down-btn').on('click', () => {
    $(window).scrollTop($(window).innerHeight() - $('.navbar').innerHeight());
});

$(window).scroll(() => {
    navbarTransition();
    slideAnimation();
});

$(document).ready(() => {
    navbarTransition();
});
