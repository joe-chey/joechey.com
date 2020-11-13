var uiController = (function () {
	let backgroundClass = isMacOS() ? "fade" : "blur";

	function isMacOS() {
		let platform = navigator.platform.toUpperCase();
		console.log(platform);
		return platform.indexOf("MAC") !== -1;
	}

	function showMenu() {
		$(".page-wrapper-inner").addClass(backgroundClass);
		$(".nav-menu-wrapper").fadeIn(200);		
	}

	function hideMenu() {
		$(".nav-menu-wrapper").fadeOut(200);
		$(".page-wrapper-inner").removeClass(backgroundClass);		
	}

	return {
		showMenu: showMenu,
		hideMenu: hideMenu
	}
})();

$(document).ready(function() {

	var $menuIcon = $(".menu-icon");
	var $closeMenuIcon = $(".close-icon");
	var $backButton = $(".back-button");

	// Hide menu if clicked on anything other than the menu item
	$(".nav-menu-wrapper").click(function(event) {
		if (!$(event.target).hasClass("menu-selection-target")) uiController.hideMenu();
	})

	$menuIcon.click(function() {
		uiController.showMenu();
	})

	$closeMenuIcon.click(function() {
		uiController.hideMenu();
	})
});