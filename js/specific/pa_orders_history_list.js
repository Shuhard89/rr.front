$(document).ready(function() {
	// Orders mouse scroll
	if ( $(window).width() > 767 ){
		$(".pa-history-orders-list-wrapper").mThumbnailScroller({
			axis: "x",
			speed: 100,
			type: "hover-70",
			updateOnContentResize: true,
			markup:{ 
				thumbnailsContainer: ".pa-history-orders-list-wrapper > ol",
				thumbnailContainer: ".pa-history-orders-list-wrapper > ol > li"
			},
	        advanced:{
	            updateOnContentResize:false,
	            updateOnImageLoad:false,
	        }
		});
	}
});