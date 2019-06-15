var inDescription = false;
var home = false;
var popstate = false;
var currstate = 1;
var statecount_total = 2;

history.pushState(createState(0, '.home', 1), '.home', '');//home
history.pushState(createState(1, '.menu', 2), '.menu', '');//menu

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
	});

	// Handle browser's back and forward features
	$(window).on('popstate', function(event) {
		//let routing functions know not to create new states for the visit
		popstate = true;

		if (event.originalEvent.state === null) {
			//back from home: no history before
			history.back();
		} else {
			let state_destination = event.originalEvent.state;
			let newstate = state_destination.stateval;
			let destination = state_destination.destination;
			let statepos = state_destination.statecount;

			if ((newstate < currstate) && home) {
				//back from home: exit website
				history.go((-1) * statepos);
			} else if (newstate > currstate) {
				//forward
				home ? goToMenu() : goToPage(destination);
			} else {
				//back from menu to page
				if (destination !== null && destination.substring(0, 1) !== '.') {
					goToPage(destination);
				} else {
				//back from page to menu, or from menu to home
					inDescription ? returnToMenu() : redirectToHome();
				}
			}
			currstate = newstate;
		}
	});

});

function returnToMenu() {
	$(".page").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	$(".menu").css({'animation-name': 'slide-in-right', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	toggleInDescription();
	manageHistory(".menu");
}

function goToPage(destination) {
	$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
	$("#" + destination).css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	toggleInDescription();
	manageHistory(destination);
}

function redirectToHome() {
	$(".menu").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
	$(".midbar").css({'visibility': 'hidden', 'animation-name': 'blurfadein', 'animation-delay': '0.3s', 'animation-duration': '1.5s'});
	toggleHome();
}

function goToMenu() {
	$(".midbar").css({'animation-name': 'blurfadeout', 'animation-delay': '0s', 'animation-duration': '1.5s'});
	$(".menu").css({'animation-name': 'slide-in-left', 'animation-delay': '1.5s', 'animation-duration': '1s'});
	toggleHome();
	manageHistory('.menu');
}

function toggleInDescription() {
	inDescription = !inDescription;
}

function toggleHome() {
	home = !home;
}

function incrementState() {
	currstate += 1;
	return currstate;
}

function createState(val, pageinfo, count) {
	let obj = {
		'stateval': val,
		'destination': pageinfo,
		'statecount': count
	};
	return obj;
}

function manageHistory(pageinfo) {
	if (!popstate) {
		statecount_total += 1;
		history.pushState(createState(incrementState(), pageinfo, statecount_total), pageinfo, '');
	} else {
		popstate = false;
	}
}