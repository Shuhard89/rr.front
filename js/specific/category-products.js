$(document).ready(function() {

	// Filter by Price, popularity etc
	$('.product-category-top-filter-list-wrapper > ul > li > a').on('click', function(event) {
		event.preventDefault();

		$(this).parents('ul').children('li').removeClass('active');
		$(this).parents('li').addClass('active');

		// AJAX REQUEST HERE
		
	});

	// Draggable product colors
	function draggableProductColorsCategory(){
		if ( $(window).width() > 767 ){
			$('.product-color-images-list').slick({
				arrows: false,
				centerMode: true,
				centerPadding: '15.6%',
				infinite: false
			});
		} else {
			$('.product-color-images-list').slick({
				arrows: false,
				centerMode: true,
				centerPadding: '0',
				infinite: false
			});
		}

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

	if ( $(window).width() > 767 ){
		fixedFilter();
	}

	// Collapse filter
	function filterCollapse(){
		var $filterBlockCaption = $('.products-filter-list .products-filter-list-item-caption'),
			$filterBlockContent = $('.products-filter-list .filter-checkboxes-container');

		$filterBlockCaption.on('click', function() {
			if ( $(this).parents('li').hasClass('visible') ){
				$(this).parents('li').removeClass('visible');
				$(this).parents('li').find($filterBlockContent).slideUp(600);
			} else {
				$(this).parents('li').addClass('visible');
				$(this).parents('li').find($filterBlockContent).slideDown(600);
			}
		});
	};

	filterCollapse();

	// Products filter
	function productsFilter(){
		var $productsFilterList = $('.products-filter-list'),
			$label = $productsFilterList.find('label'),
			$productsFilterListChosen = $('.products-filter-list-chosen'),
			$restFormBtn = $('.products-filter-reset-btn');

		// Label on click AJAX
		$label.on('click', function(event) {
			if ( $(this).parents('.products-filter-list-chosen-wrapper').length > 0 ) {
				var thisLabelSectionIndex = $(this).parents('.filter-checkboxes-container').parents('li').index(),
					$productsFilterListItems = $productsFilterList.children('li'),
					target = window[this.htmlFor];

				target.checked = !target.checked;
				event.preventDefault();

				if ( $(this).parent('li').siblings('li').length < 1 ){
					$(this).parents('.filter-checkboxes-container').parent('li').addClass('hidden').slideUp('600');
				}

				$(this).parent('li').prependTo($productsFilterListItems.eq(thisLabelSectionIndex).find('ul'));

				$productsFilterListItems.each(function(index, el) {
					if ( $(this).find('li').length > 0 ){
						// $('.products-filter-list-chosen-wrapper').slideDown('600');
						$(this).slideDown('600');
					}
				});

				if ( $productsFilterListChosen.children('li').find('li').length < 1 ){
					$('.products-filter-list-chosen-wrapper').slideUp('600');
				}

				// AJAX CODE HERE (CHECKBOX UNCHECK)
				// --------------

			} else {
				var thisLabelSectionIndex = $(this).parents('.filter-checkboxes-container').parents('li').index(),
					$productsFilterListChosenItems = $productsFilterListChosen.children('li'),
					target = window[this.htmlFor];

				target.checked = !target.checked;
				event.preventDefault();

				if ( $(this).parent('li').siblings('li').length < 1 ){
					$(this).parents('.filter-checkboxes-container').parent('li').addClass('hidden').slideUp('600');
				}

				$(this).parent('li').prependTo($productsFilterListChosenItems.eq(thisLabelSectionIndex).find('ul'));

				$productsFilterListChosenItems.each(function(index, el) {
					if ( $(this).find('li').length > 0 ){
						$('.products-filter-list-chosen-wrapper').slideDown('600');
						$(this).slideDown('600');
					}
				});

				// AJAX CODE HERE (CHECKBOX CHECK)
				// --------------
			}
		});

		// Reset form
		$restFormBtn.on('click', function(event) {
			event.preventDefault();
			
			$('.products-filter-list-chosen-wrapper').find('label').each(function(index, el) {
				var thisLabelSectionIndex = $(this).parents('.filter-checkboxes-container').parents('li').index(),
					$productsFilterListItems = $productsFilterList.children('li'),
					target = window[this.htmlFor];

				target.checked = !target.checked;
				event.preventDefault();

				if ( $(this).parent('li').siblings('li').length < 1 ){
					$(this).parents('.filter-checkboxes-container').parent('li').addClass('hidden').slideUp('600');
				}

				$(this).parent('li').prependTo($productsFilterListItems.eq(thisLabelSectionIndex).find('ul'));

				$productsFilterListItems.each(function(index, el) {
					if ( $(this).find('li').length > 0 ){
						// $('.products-filter-list-chosen-wrapper').slideDown('600');
						$(this).slideDown('600');
					}
				});

				if ( $productsFilterListChosen.children('li').find('li').length < 1 ){
					$('.products-filter-list-chosen-wrapper').slideUp('600');
				}

				// AJAX CODE HERE (CHECKBOX UNCHECK)
				// --------------
			});
		});
	};

	productsFilter();

	// PRODUCT PATTERNS TIPS
	if ( $(window).width() > 767 ){
		$('.filter-checkboxes-color > ul > li div.pattern-info-icon').hover(function() {
			var thisOffset = $(this).offset();
			if ( $(window).width() > 767 ){
				$(this).next('.pattern-info-tip').clone().appendTo('.page-wrapper').addClass('visible').css({
					top: thisOffset.top - $(window).scrollTop(),
					left: thisOffset.left
				}).stop().fadeIn('normal');
			} else {
				$(this).next('.pattern-info-tip').clone().appendTo('.page-wrapper').addClass('visible').css({
					top: thisOffset.top - $(window).scrollTop(),
					left: 0
				}).stop().fadeIn('normal');
			}

			$('.search-modal-dark-overlay').addClass('visible noevents');
		}, function() {
			$('.pattern-info-tip.visible').stop().fadeOut('normal', function(){
				$('.pattern-info-tip.visible').remove();
			});
			$('.search-modal-dark-overlay').removeClass('visible noevents');
		});
	}

	// Mobile
	if ( $(window).width() < 768 ){
		$('.mobile-category-list').css('top', $('.current-mobile-category-menu').outerHeight() + 'px');

		// Category menu
		$('.current-mobile-category-menu').click(function(event) {
			if ( $(this).hasClass('visible') ){
				$(this).removeClass('visible');
				$('.mobile-category-list').slideUp('slow');
			} else {
				$(this).addClass('visible');
				$('.mobile-category-list').slideDown('slow');
			}
		});

		// Filter menu
		$('.product-category-top-filter-quantity').prependTo('.products-filter-wrapper');

		// Open filter
		$('.mobile-filter-button').click(function(event) {
			$('.products-filter-wrapper').addClass('visible');
			$('.search-modal-dark-overlay').addClass('visible');
			$('html').addClass('overflow-hidden');
		});

		// Close filter
		$('.search-modal-dark-overlay').click(function(event) {
			$('.products-filter-wrapper').removeClass('visible');
			$('.search-modal-dark-overlay').removeClass('visible');
			$('html').removeClass('overflow-hidden');
		});
	}

	// Modal Size Charts
	$('.products-filter-sizes-table-link').on('click', function(event) {
		event.preventDefault();
		
		$('.modal-size-table').addClass('visible');
		$('.search-modal-dark-overlay').addClass('visible');
		$('html').addClass('overflow-hidden');
	});

	$('.search-modal-dark-overlay, .modal-size-table-close-btn').on('click', function(event) {
		event.preventDefault();

		$('.modal-size-table').removeClass('visible');
		$('.search-modal-dark-overlay').removeClass('visible');
		$('html').removeClass('overflow-hidden');
	});
});