var transition = false;

$(document).ready(function() {
	navbarTransition('start');
});

$(window).scroll(function() {
	navbarTransition('scroll');
});

function navbarTransition(mode) {
	var scroll  = $(window).scrollTop();
	
	if (transition) {
		$("#navbar").css('transition', 'all 1s');
	}
	
	if (scroll <= 50) {
		$("#navbar").removeClass("bg-white");
		$("#navbar").removeClass("navbar-light");
		$("#navbar").addClass("bg-transparent");
		$("#navbar").addClass("navbar-dark");
	} else {
		$("#navbar").removeClass("bg-transparent");
		$("#navbar").removeClass("navbar-dark");
		$("#navbar").addClass("bg-white");
		$("#navbar").addClass("navbar-light");
	}
	
	if (mode == 'scroll') {
		transition = true;
	}
}

$(".dropdown-toggle").on("mouseenter", function () {
    if (!$(this).parent().hasClass("show")) {
        $(this).click();
    }
});
