$(window).load(function() {
	var oneRem = $(window).width()/1360;

	// Images Mouse Scroll
	if ( $(window).width() > 767 ){
		$('.single-lookbook-slider-list').imagesLoaded( function() {
			$('.single-lookbook-slider-list > li > img').height( $('.single-lookbook-slider-list > li').height() );
			$(window).resize(function(event) {
				$('.single-lookbook-slider-list > li > img').height( $('.single-lookbook-slider-list > li').height() );
			});
			$(".single-lookbook-slider").mThumbnailScroller({
				axis: "x",
				speed: 100,
				type: "hover-70",
				updateOnContentResize: true,
				markup:{ 
					thumbnailsContainer: ".single-lookbook-slider-list",
					thumbnailContainer: ".single-lookbook-slider-list > li",
					thumbnailElement: ".single-lookbook-slider-list > li > img"
				},
		        advanced:{
		            updateOnContentResize:true,
		            updateOnImageLoad:true,
		        },
				callbacks:{
					whileScrolling: function(){
						if ( -$('.single-lookbook-slider-list').position().left > 0 ){
							$('.single-lookbook-left-heading-wrapper').addClass('hidden');
						} else {
							$('.single-lookbook-left-heading-wrapper').removeClass('hidden');
						}

						if ( -$('.single-lookbook-slider-list').position().left >= $('.single-lookbook-slider-list').width() - $(window).outerWidth() ){
							$('.single-lookbook-right-social-wrapper').addClass('visible');
						} else {
							$('.single-lookbook-right-social-wrapper').removeClass('visible');
						}
					}
				}
			});
		});
	} else {
		$('.single-lookbook-slider-wrapper').insertAfter('.single-lookbook-left-heading-wrapper');
	}
});