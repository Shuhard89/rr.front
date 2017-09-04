$(document).ready(function() {

	// Draggable complect product colors
	function draggableComplectProductColorsCategory(){
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
			var $colorText = $(this).parents('.category-products-list > li').find('.product-variations-color-names > span'),
				$variationName = $(this).parents('.category-products-list > li').find('.thumbnail-product-variations-names-list > li'),
				$quickViewBtn = $(this).parents('.category-products-list > li').find('.product-quick-view-btn'),
				$favouriteBtn = $(this).parents('.category-products-list > li').find('.product-favourite-btn'),
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

	draggableComplectProductColorsCategory();

	// Looks Modal
	function looksModalSlider(){
		var $lookPreviewItem = $('.looks-thumbnails-list > li'),
			$modal = $('.section-modal-looks-list-wrapper'),
			$modalSliderList = $('.section-modal-looks-list'),
			$modalSliderListItems = $modalSliderList.children('li'),
			modalSliderListItemsNumber = $modalSliderListItems.length,
			$modalSliderListItemsContent = $('.modal-looks-list-item-info-wrapper'),
			$body = $('body'),
			$closeModalBtn = $('.close-back-looks-modal-btn'),
			$overlay = $('.search-modal-dark-overlay'),
			$modalSliderControls = $('.modal-looks-list-slider-control');

		// Prevent Link Click
		$lookPreviewItem.children('a').on('click', function(event) {
			event.preventDefault();
		});

		// Open Modal
		$lookPreviewItem.on('click', function() {
			var thisIndex = $(this).index();

			$modalSliderListItemsContent.scrollTop(0);
			$modal.addClass('visible');
			if ( $(window).width() < 768 ){
				$overlay.addClass('visible');
			}
			$('html').addClass('overflow-hidden');
			$modalSliderListItems.eq(thisIndex).addClass('active');
			if ( $(window).width() > 767 ){
				$modalSliderList.css('transform', 'translateX(-' + ($(window).width() - ($(window).width()/1360)*40)*thisIndex + 'px)');
			} else {
				$modalSliderList.css('transform', 'translateX(-' + ($('.section-modal-looks-list > li').width())*thisIndex + 'px)');
			}
			
			setTimeout(function(){
				$modalSliderList.addClass('transition');
			}, 1000);
		});

		// Close modal
		$closeModalBtn.on('click', function() {
			$modal.removeClass('visible');
			$('html').removeClass('overflow-hidden');
			$modalSliderListItems.removeClass('active');
			$modalSliderList.removeClass('transition');
		});

		$overlay.on('click', function() {
			$modal.removeClass('visible');
			$body.removeClass('overflow-hidden');
			$modalSliderListItems.removeClass('active');
			$modalSliderList.removeClass('transition');
		});

		// Controls
		$modalSliderControls.on('click', function() {
			var thisListItemIndex = $(this).parents('.section-modal-looks-list > li').index();

			if ( $(this).hasClass('right') ){ // Right Button Click
				if ( $(this).parents('.section-modal-looks-list > li').next('li').length > 0 ){
					$modalSliderListItems.removeClass('active');
					$modalSliderListItems.eq(thisListItemIndex + 1).addClass('active');
					$modalSliderList.css('transform', 'translateX(-' + ($(window).width() - ($(window).width()/1360)*40)*(thisListItemIndex+1) + 'px)');
				} else {
					$modalSliderListItems.removeClass('active');
					$modalSliderListItems.eq(0).addClass('active');
					$modalSliderList.css('transform', 'translateX(0)');
				}
			} else { // Left Button Click
				if ( $(this).parents('.section-modal-looks-list > li').prev('li').length > 0 ){
					$modalSliderListItems.removeClass('active');
					$modalSliderListItems.eq(thisListItemIndex - 1).addClass('active');
					$modalSliderList.css('transform', 'translateX(-' + ($(window).width() - ($(window).width()/1360)*40)*(thisListItemIndex-1) + 'px)');
				} else {
					$modalSliderListItems.removeClass('active');
					$modalSliderListItems.eq(modalSliderListItemsNumber-1).addClass('active');
					$modalSliderList.css('transform', 'translateX(-' + ($(window).width() - ($(window).width()/1360)*40)*(modalSliderListItemsNumber-1) + 'px)');
				}
			}
		});
	};

	looksModalSlider();
});