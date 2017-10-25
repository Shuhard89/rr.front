$(document).ready(function() {
	// Form product count
	$('.single-product-field-count span').on('click', function(event) {
		event.preventDefault();

		var count = +$('.single-product-field-count input').val();
		
		if ( $(this).hasClass('count-plus') ){
			if ( count > 0 ){
				$('.single-product-field-count input').val(count+1);
			}
		} else if ( $(this).hasClass('count-minus') ) {
			if ( count > 1 ){
				$('.single-product-field-count input').val(count-1);
			}
		}
	});

	if ( $(window).width() > 767 ){
		// Product section equal height
		$(".single-product-gallery-wrapper, .single-product-info-container").stick_in_parent({
			offset_top: $('.main-header').height()
		});

		// Look section equal height
		$(".section-single-product-look-content-img, .section-single-product-look-content-complect").stick_in_parent({
			offset_top: $('.main-header').height()
		});
	}

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
		$(".section-single-product-look-may-like-content").imagesLoaded( function() {
			$(".front-products-list-wrapper").mThumbnailScroller({
				axis: "x",
				speed: 100,
				type: "hover-70",
				markup:{ 
					thumbnailsContainer: ".front-products-list",
					thumbnailContainer: ".front-products-list > li"
				},
		        advanced:{
		            updateOnContentResize:true,
		            updateOnImageLoad:true
		        }
			});
		} );
	}


	// Size charts slider
	function sizeChartsSlider(){
		var $sliderList = $('.size-charts-costumes-slider-list-wrapper > ul'),
			$sliderListItem = $sliderList.children('li'),
			$sliderControls = $('.size-charts-costumes-slider-controls-wrapper > ul > li');

		// Build slider
		$sliderControls.eq(0).addClass('active');
		$sliderListItem.eq(0).addClass('active');

		// Controls
		$sliderControls.on('click', function() {
			var thisIndex = $(this).index();

			$sliderControls.removeClass('active');
			$sliderListItem.removeClass('active');
			$sliderControls.eq(thisIndex).addClass('active');
			$sliderListItem.eq(thisIndex).addClass('active');
			if ( $(window).width() > 767 ){
				$sliderList.css('transform', 'translateX(-' + thisIndex*560 + 'rem)');
			} else {
				$sliderList.css('transform', 'translateX(-' + thisIndex*300 + 'rem)');
			}
			
		});
	};

	sizeChartsSlider();

	// Size charts measure help
	function measureHelp(){
		var $circles = $('.size-charts-measure-help-man-circle'),
			$helpTips = $('.size-charts-measure-help-text p');

		// Show Tip
		$circles.on('mouseenter', function() {
			var thisId = $(this).attr('id');

			$helpTips.removeClass('active');
			$('.' + thisId).addClass('active');
		});
	};

	measureHelp();

	// Modal Size Charts
	$('.single-product-size-table').on('click', function(event) {
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

	// Modal Product Gallery
	function modalProductGallery(){
		var $productThumbnails = $('.single-product-gallery-list > li > a'),
			$modal = $('.modal-product-gallery'),
			$modalContent = $modal.find('.modal-product-gallery-content'),
			$closeModalBtn = $('.modal-product-gallery-close-btn');

		// Open Modal
		$productThumbnails.click(function(event) {
			event.preventDefault();

			var thisIndex = $(this).parent('li').index();

			if ( $(window).width() > 767 ){
				$('body').addClass('overflow-hidden');
				$modal.addClass('visible');
				$modalContent.scrollTop($modalContent.find('img').eq(thisIndex).parent().scrollTop() + $modalContent.find('img').eq(thisIndex).offset().top - $modalContent.find('img').eq(thisIndex).parent().offset().top );
			}
		});

		// Close modal
		$closeModalBtn.click(function(event) {
			$('body').removeClass('overflow-hidden');
			$modal.removeClass('visible');
		});
	};

	modalProductGallery();

	// Mobile products images slider
	if ( $(window).width() < 768 ){
		function mobileProductThumbnailsSlider(sliderId){
			var $sliderList = $(sliderId).find('.single-product-gallery-list'),
				$slide = $sliderList.children('li'),
				slidesNumber = $slide.length,
				$sliderControls = $(sliderId).find('.single-product-mobile-slider-controls > div');

			// Build Slider
			$slide.eq(0).addClass('active');
			$sliderControls.eq(0).addClass('active');

			// Controls
			$sliderControls.on('click', function(event) {
				event.preventDefault();

				var thisIndex = $(this).index();

				$slide.removeClass('active');
				$sliderControls.removeClass('active');
				$slide.eq(thisIndex).addClass('active');
				$sliderControls.eq(thisIndex).addClass('active');
				$sliderList.css('transform', 'translateX(-' + thisIndex*100 + 'vw)');
			});

			// Swipes
			$sliderList.on('swipeleft', function(event) {
				var currentSlide = $sliderList.find('li.active'),
					currentSlideIndex = currentSlide.index();

				if ( currentSlide.next('li').length > 0 ){
					$slide.removeClass('active');
					$sliderControls.removeClass('active');
					$slide.eq(currentSlideIndex+1).addClass('active');
					$sliderControls.eq(currentSlideIndex+1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (currentSlideIndex+1)*100 + 'vw)');
				} else {
					$slide.removeClass('active');
					$sliderControls.removeClass('active');
					$slide.eq(0).addClass('active');
					$sliderControls.eq(0).addClass('active');
					$sliderList.css('transform', 'translateX(0)');
				}
			});

			$sliderList.on('swiperight', function(event) {
				var currentSlide = $sliderList.find('li.active'),
					currentSlideIndex = currentSlide.index();

				if ( currentSlide.prev('li').length > 0 ){
					$slide.removeClass('active');
					$sliderControls.removeClass('active');
					$slide.eq(currentSlideIndex-1).addClass('active');
					$sliderControls.eq(currentSlideIndex-1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (currentSlideIndex-1)*100 + 'vw)');
				} else {
					$slide.removeClass('active');
					$sliderControls.removeClass('active');
					$slide.eq(slidesNumber-1).addClass('active');
					$sliderControls.eq(slidesNumber-1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (slidesNumber-1)*100 + 'vw)');
				}
			});
		};

		mobileProductThumbnailsSlider('#product-gallery-mobile-slider');
	}
});