$(document).ready(function() {

	var $menuIcon = $(".menu-icon");
	var $closeMenuIcon = $(".close-icon");
	var $backButton = $(".back-button");

	// Hide menu if clicked on anything other than the menu item
	$(".nav-menu-wrapper").click(function(event) {
		if (!$(event.target).hasClass("menu-selection-target")) hideMenu();
	})

	$menuIcon.on("click", function() {
		showMenu();
	})

	$closeMenuIcon.click(function() {
		hideMenu();
	})

	// flickity object
	var $carousel = $(".carousel");

	// add event listener to flickity to update image captions
	$carousel.on('ready.flickity change.flickity', function(event) {
		let flickity = $carousel.data('flickity');
		let selectedElement = flickity ? flickity.selectedElement : $(".carousel-cell")[0];
		setCaption(selectedElement);
	})

	// initialize Flickity
	$carousel.flickity({
		wrapAround: true,
		fullscreen: true,
		imagesLoaded: true,
		lazyLoad: true,
		adaptiveHeight: true,
	});
});

function setCaption(elem) {
	let caption = $(elem).find(".carousel-cell-content").attr("alt");
	$(".image-caption").text(caption);
}

function showMenu() {
	$(".page-wrapper-inner").addClass("blur");
	$(".nav-menu-wrapper").fadeIn(200);
}

function hideMenu() {
	$(".nav-menu-wrapper").fadeOut(200);
	$(".page-wrapper-inner").removeClass("blur");
}