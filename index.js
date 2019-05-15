var transition = false;
var scroll;
var onVerticalNavbar = 0;

$(document).ready(function() {
	navbarTransition('start');
	$("footer a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		}
	});
});

$(window).scroll(function() {
	navbarTransition('scroll');
});

function navbarTransition(mode) {
	scroll  = $(window).scrollTop();
	
	if (transition) {
		$("#navbar").css('transition', 'all 1s');
	}
	
	navColor(scroll <= 50);
	
	if (mode == 'scroll') {
		transition = true;
	}
}

function navColor(dark) {
	if (onVerticalNavbar == 0) {
		if (dark) {
			navDark();
		} else {
			navWhite();
		}
	}
}

function navWhite() {
	$("#navbar").removeClass("bg-transparent");
	$("#navbar").removeClass("navbar-dark");
	$("#navbar").addClass("bg-white");
	$("#navbar").addClass("navbar-light");
	$("#navbar").css("border-bottom", "2px solid lightGray");
}

function navDark() {
	$("#navbar").removeClass("bg-white");
	$("#navbar").removeClass("navbar-light");
	$("#navbar").addClass("bg-transparent");
	$("#navbar").addClass("navbar-dark");
	$("#navbar").css("border-bottom", "");
}

$(".dropdown-toggle").on("mouseenter", function () {
    if (!$(this).parent().hasClass("show")) {
        $(this).click();
    }
});

$("#navbarToggler").on("mousedown", function () {
	onVerticalNavbar = 1 - onVerticalNavbar;
    navWhite();
});
