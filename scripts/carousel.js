$(document).ready(function() {
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
})

function setCaption(elem) {
	let caption = $(elem).find(".carousel-cell-content").attr("alt");
	$(".image-caption").text(caption);
}