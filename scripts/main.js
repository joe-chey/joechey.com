$(document).ready(function() {
	$("body").fadeIn(1600);
	
	$("#menu-reconstruct").click(function() {
		$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
		$("#reconstruct").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	});

	$("#menu-kineticsound").click(function() {
		$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
		$("#kineticsound").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	});

	$("#menu-musicalcircle").click(function() {
		$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
		$("#musicalcircle").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	});

	$("#menu-japanclub").click(function() {
		$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
		$("#japanclub").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	});

	$("#menu-speechcontest").click(function() {
		$(".menu").css({'animation-name': 'slide-out-left', 'animation-delay': '0s', 'animation-duration': '1s'});
		$("#speechcontest").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	});

	$(".return").click(function() {
		$(".page").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
		$(".menu").css({'animation-name': 'slide-in-right', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	})

});

