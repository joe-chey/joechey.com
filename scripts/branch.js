$(document).ready(function() {
	$("body").fadeIn(1000);
	$(".page").css({'display': 'flex', 'animation-name': 'slide-in-left', 'animation-delay': '0.3s', 'animation-duration': '1s'});
	
	$(".return").click(function() {
		$(".page").css({'animation-name': 'slide-out-right', 'animation-delay': '0s', 'animation-duration': '1s'});
		returnHome();
	});

	$(".page").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		if ($(this).css("animation-name").substring(6, 9) === 'out') {
			$(this).css({'display':'none'});
		}
	});

});

function returnHome() {
	window.location.href = "https://joechey.com";
}