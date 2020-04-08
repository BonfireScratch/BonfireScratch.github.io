let transition = false;

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

$(window).scroll(() => {
	navbarTransition('scroll');
	slideAnimation();
});

navbarTransition = mode => {
	let scroll  = $(window).scrollTop();
	
	if (transition) {
		$("#navbar").css('transition', 'all 1s');
	}
	
	if (scroll <= 50) {
		$("#navbar").removeClass("bg-white");
		$("#navbar").removeClass("navbar-light");
		$("#navbar").addClass("bg-transparent");
		$("#navbar").addClass("navbar-dark");
		$("#navbar").css("border-bottom", "");
	} else {
		$("#navbar").removeClass("bg-transparent");
		$("#navbar").removeClass("navbar-dark");
		$("#navbar").addClass("bg-white");
		$("#navbar").addClass("navbar-light");
		$("#navbar").css("border-bottom", "2px solid lightGray");
	}
	
	if (mode == 'scroll') {
		transition = true;
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
