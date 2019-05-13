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
		$("#navbar").addClass("bg-transparent");
	} else {
		$("#navbar").removeClass("bg-transparent");
		$("#navbar").addClass("bg-white");
	}
	
	if (mode == 'scroll') {
		transition = true;
	}
}
