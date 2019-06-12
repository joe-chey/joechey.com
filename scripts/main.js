var inDescription = false;
var titleVisited = true;
var statecount = 1;
var home = false;
history.pushState(null, null, '');

$(document).ready(function() {
	$("body").fadeIn(1600);

	$("#title").click(function() {
		goToMenu();
	})

	$("li").click(function() {
		let destination = this.id.substring(5);
		goToPage(destination);
	})
	
	$(".return").click(function() {
		returnToMenu();
	});

	$(".page").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		if ($(this).css("animation-name").substring(6, 9) === 'out') {
			$(this).css({'display':'none'});
		}
	})

	// Handle browser's back and forward features
	$(window).on('popstate', function(event) {
		//if backing from home, imitate the real back button
		if (home) {
			history.back(statecount*(-1));
		} else {
			inDescription ? returnToMenu() : redirectToHome();
			history.pushState(null, null, '');
			statecount += 1;
		}

		//No forward feature

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
	$("#" + destination).css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	toggleInDescription();
}

function toggleInDescription() {
	inDescription = !inDescription;
}

function redirectToHome() {
	$(".menu").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	$(".midbar").css({'visibility': 'hidden', 'animation-name': 'blurfadein', 'animation-delay': '0.3s', 'animation-duration': '1.5s'});
	home = true;
}

function goToMenu() {
	$(".midbar").css({'animation-name': 'blurfadeout', 'animation-delay': '0s', 'animation-duration': '1.5s'});
	$(".menu").css({'animation-name': 'slide-in-left', 'animation-delay': '1.5s', 'animation-duration': '1s'});
	home = false;
}