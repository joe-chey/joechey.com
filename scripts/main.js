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

	// Handle browser's back and forward features
	$(window).on('popstate', function(event) {
		inDescription ? returnToMenu() : redirectToHome();

		//No forward feature
		history.pushState(null, null, '');

		// if (event.originalEvent.state === null) {
		// 	inDescription ? returnToMenu() : redirectToHome();
		// } else {
		// 	inDescription ? goToMenu() : goToPage(event.originalEvent.state.page);
		// }
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
	inDescription = !inDescription;
}

function redirectToHome() {
	 $(".menu").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	 $(".midbar").css({'visibility': 'hidden', 'animation-name': 'blurfadein', 'animation-delay': '0.3s', 'animation-duration': '1.5s'});
}

function goToMenu() {
	$(".midbar").css({'animation-name': 'blurfadeout', 'animation-delay': '0s', 'animation-duration': '1.5s'});
	$(".menu").css({'animation-name': 'slide-in-left', 'animation-delay': '1.5s', 'animation-duration': '1s'});
}
