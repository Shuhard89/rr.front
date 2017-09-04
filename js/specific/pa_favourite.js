$(document).ready(function() {
	// Draggable product colors
	function draggableProductColors(){
		if ( $(window).width() > 767 ){
			$('.product-color-images-list').slick({
				arrows: false,
				centerMode: true,
				centerPadding: '15.6%',
				infinite: false
			});
		}

		// Build slider
		$('.front-products-list').find('.product-thumbnail-container').each(function(index, el) {
			$(this).find('.product-variations-color-names > span').eq(0).addClass('active');
			$(this).find('.thumbnail-product-variations-names-list > li').eq(0).addClass('active');
			$(this).find('.product-favourite-btn').eq(0).addClass('active');
			$(this).find('.product-quick-view-btn').eq(0).addClass('active');
			if ( $(window).width() < 768 ){
				$(this).find('.product-color-images-list > li').eq(0).addClass('slick-current');
			}
		});

		$('.product-color-images-list').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var $colorText = $(this).parents('li').find('.product-variations-color-names > span'),
				$variationName = $(this).parents('li').find('.thumbnail-product-variations-names-list > li'),
				$quickViewBtn = $(this).parents('li').find('.product-quick-view-btn'),
				$favouriteBtn = $(this).parents('li').find('.product-favourite-btn'),
				nextSlideIndex = nextSlide;

			$colorText.removeClass('active');
			$variationName.removeClass('active');
			$quickViewBtn.removeClass('active');
			$favouriteBtn.removeClass('active');
			$colorText.eq(nextSlideIndex).addClass('active');
			$variationName.eq(nextSlideIndex).addClass('active');
			$quickViewBtn.eq(nextSlideIndex).addClass('active');
			$favouriteBtn.eq(nextSlideIndex).addClass('active');
		});

		// Clickable variations
		$('.product-color-images-list li > a').on('click', function(event) {
			if ( $(this).parents('li').prev('li').hasClass('slick-current') ){
				event.preventDefault();
				$(this).parents('.product-color-images-list').slick('slickNext');
			} else if ( $(this).parents('li').next('li').hasClass('slick-current') ){
				event.preventDefault();
				$(this).parents('.product-color-images-list').slick('slickPrev');
			}
		});
	};

	draggableProductColors();

	// Products mouse scroll
	if ( $(window).width() > 767 ){
		$(".front-products-list-wrapper").mThumbnailScroller({
			axis: "x",
			speed: 100,
			type: "hover-70",
			updateOnContentResize: true,
			markup:{ 
				thumbnailsContainer: ".front-products-list",
				thumbnailContainer: ".front-products-list > li"
			},
	        advanced:{
	            updateOnContentResize:false,
	            updateOnImageLoad:false,
	        }
		});
	}
});