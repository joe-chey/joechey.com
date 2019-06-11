var inDescription = false;
var titleVisited = true;
history.pushState(null, null, '');

$(document).ready(function() {
	$("body").fadeIn(1600);

	$("#title").click(function() {
		goToMenu();
	})

	$("li").click(function() {
		goToPage("#" + this.id.substring(5));
	})
	
	$(".return").click(function() {
		returnToMenu();
	});

	$(window).on('popstate', function(event) {
		var state = event.originalEvent.state;
		history.pushState(null, null, '');
		inDescription ? returnToMenu() : redirectToHome();
	});

});

function returnToMenu() {
	$(".page").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	$(".menu").css({'animation-name': 'slide-in-right', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	toggleInDescription();
}

function goToPage(destination) {
	$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
	$(destination).css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	toggleInDescription();
}

function toggleInDescription() {
	inDescription = inDescription ? false:true;
}

function redirectToHome() {
	 $(".menu").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	 $(".midbar").css({'visibility': 'hidden', 'animation-name': 'blurfadein', 'animation-delay': '0.3s', 'animation-duration': '1.5s'});
}

function goToMenu() {
	$(".midbar").css({'animation-name': 'blurfadeout', 'animation-delay': '0s', 'animation-duration': '1.5s'});
	$(".menu").css({'animation-name': 'slide-in-left', 'animation-delay': '1.5s', 'animation-duration': '1s'});
}
