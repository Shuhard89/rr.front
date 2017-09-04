$(document).ready(function() {

		// Form fields label up
		$('.page-search-form input').on('keyup', function(event) {
			if ( $(this).val() != '' ){
				$(this).addClass('not-empty');
			} else {
				$(this).removeClass('not-empty');
			}
		});

		$('.page-search-form input').each(function(index, el) {
			if ( $(this).val() != '' ){
				$(this).addClass('not-empty');
			} else {
				$(this).removeClass('not-empty');
			}
		});

	// Draggable product colors
	function draggableProductColorsCategory(){
		$('.product-color-images-list').slick({
			arrows: false,
			centerMode: true,
			centerPadding: '15.6%',
			infinite: false
		});

		// Build slider
		$('.category-products-list').find('.product-thumbnail-container').each(function(index, el) {
			$(this).find('.product-variations-color-names > span').eq(0).addClass('active');
			$(this).find('.thumbnail-product-variations-names-list > li').eq(0).addClass('active');
			$(this).find('.product-favourite-btn').eq(0).addClass('active');
			$(this).find('.product-quick-view-btn').eq(0).addClass('active');
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

	draggableProductColorsCategory();

	// Fixed filter
	function fixedFilter(){
		$(window).scroll(function(event) {
			if ( $(window).scrollTop() > $(document).height() - $('.main-footer').outerHeight() - $(window).height() ){
				$('.products-filter-wrapper').addClass('hidden');
			} else {
				$('.products-filter-wrapper').removeClass('hidden');
			}
		});
	};

	fixedFilter();
});