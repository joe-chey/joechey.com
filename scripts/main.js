var inDescription = false;
var home = false;
var popstate = false;
var currstate = 1;
var statecount_current = 2;
var statecount_total = 2;

history.pushState(createState(0, '.home'), '.home', '');//home
history.pushState(createState(1, '.menu'), '.menu', '');//menu

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

		//no history before
		if (event.originalEvent.state === null || ((event.originalEvent.state.stateval < currstate) && home)) {
			history.go((-1)*statecount_current);
		}

		let newstate = event.originalEvent.state.stateval;
		//browser went backwards (i.e., newstate = currstate- 1)
		if (newstate < currstate) {
			statecount_current -= 1;
			inDescription ? returnToMenu() : redirectToHome();
		} 
		//browser went forward (i.e., newstate = currstate + 1)
		else {
			statecount_current += 1;
			home ? goToMenu() : goToPage(event.originalEvent.state.destination);
		}
		currstate = newstate;

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

function createState(val, pageinfo) {
	let obj = {
		'stateval': val,
		'destination': pageinfo
	};
	console.log("in createState(), destination = " + pageinfo);
	return obj;
}

function manageHistory(pageinfo) {
	if (!popstate) {
		history.pushState(createState(incrementState(), pageinfo), pageinfo, '');
		statecount_total += 1;
		statecount_current = statecount_total;
	} else {
		popstate = false;
	}
}