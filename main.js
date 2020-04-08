navbarColor = () => {
    $("#navbar").removeClass("bg-transparent");
    $("#navbar").removeClass("navbar-dark");
    $("#navbar").addClass("bg-white");
    $("#navbar").addClass("navbar-light");
    $("#navbar").css("border-bottom", "2px solid lightGray");
}

navbarTransparent = () => {
    $("#navbar").removeClass("bg-white");
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("bg-transparent");
    $("#navbar").addClass("navbar-dark");
    $("#navbar").css("border-bottom", "");
}

$(window).scroll(() => {
    navbarTransition('scroll');
    slideAnimation();
});

navbarTransition = mode => {
    let scroll  = $(window).scrollTop();
    
    if (scroll <= 50 && !$(".navbar-collapse").hasClass("show")) {
        navbarTransparent();
    } else {
        navbarColor();
    }
}

slideAnimation = () => {
    $(".slideanim").each(function() {
        let pos = $(this).offset().top;
        let winTop = $(window).scrollTop();

        if (pos < winTop + 800) {
            $(this).addClass("slide");
        }
    });
}

$(".dropdown-toggle").on("mouseenter", function() {
    if (!$(this).parent().hasClass("show")) {
        $(this).click();
    }
});

$(".navbar-toggler").on('click', () => {
    if ($(".navbar-collapse").hasClass("show")) {
        setTimeout(() => {
            navbarTransparent();
        }, 200);
    } else {
        navbarColor();
    }
});

$(document).ready(() => {
    navbarTransition('start');
    $("footer a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, () => {
                window.location.hash = hash;
            });
        }
    });
});
