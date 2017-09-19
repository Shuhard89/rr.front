$(document).ready(function() {
	// Intro slider
	function introSlider(sliderId){
		var $sliderList = $(sliderId).find('.intro-slider-list'),
			$slide = $sliderList.children('li'),
			slidesNumber = $slide.length,
			$sliderControls = $(sliderId).find('.intro-slider-controls > div');

		// Build Slider
		$slide.eq(0).addClass('active');
		$sliderControls.eq(0).addClass('active');

		// Controls
		$sliderControls.on('click', function(event) {
			event.preventDefault();
			
			clearInterval(autoplay); // Disable autoplay

			var thisIndex = $(this).index();

			$slide.removeClass('active');
			$sliderControls.removeClass('active');
			$slide.eq(thisIndex).addClass('active');
			$sliderControls.eq(thisIndex).addClass('active');
			$sliderList.css('transform', 'translateX(-' + thisIndex*100 + 'vw)');
		});

		// Swipes
		$sliderList.on('swipeleft', function(event) {
			clearInterval(autoplay);
			
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
			clearInterval(autoplay);
			
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

		// Autoplay
		var autoplay = setInterval(function(){
			var currentSlide = $sliderList.find('li.active'),
				currentSlideIndex = currentSlide.index();

			$slide.removeClass('active');
			$sliderControls.removeClass('active');

			if ( currentSlide.next('li').length > 0 ){ // If exists next slide
				$slide.eq(currentSlideIndex + 1).addClass('active');
				$sliderControls.eq(currentSlideIndex + 1).addClass('active');
				$sliderList.css('transform', 'translateX(-' + (currentSlideIndex + 1)*100 + 'vw)');
			} else { // If this is last slide
				$slide.eq(0).addClass('active');
				$sliderControls.eq(0).addClass('active');
				$sliderList.css('transform', 'translateX(0)');
			}
		}, 6000);
	};

	introSlider('#intro-slider');

	// Parallax elements in LOOK section (stellar.js)
	if ( $(window).width() > 767 ){
		$(window).stellar({
			positionProperty: 'transform'
		});
	} else {
		$('.parallax-info-cards').insertAfter('.section-front-look > a');

		// Mobile Look Slider
		function mobileLookSlider(sliderId){
			var $sliderList = $(sliderId).find('.parallax-info-cards-mobile-slider'),
				$slide = $sliderList.children('li'),
				slidesNumber = $slide.length,
				$sliderControls = $(sliderId).find('.parallax-info-cards-mobile-slider-controls > div');

			// Build Slider
			$slide.eq(0).addClass('active');
			$sliderControls.eq(0).addClass('active');

			// Controls
			$sliderControls.on('click', function(event) {
				event.preventDefault();
				
				clearInterval(autoplay); // Disable autoplay

				var thisIndex = $(this).index();

				$slide.removeClass('active');
				$sliderControls.removeClass('active');
				$slide.eq(thisIndex).addClass('active');
				$sliderControls.eq(thisIndex).addClass('active');
				$sliderList.css('transform', 'translateX(-' + thisIndex*100 + 'vw)');
			});

			// Swipes
			$sliderList.on('swipeleft', function(event) {
				clearInterval(autoplay);
				
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
				clearInterval(autoplay);
				
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

			// Autoplay
			var autoplay = setInterval(function(){
				var currentSlide = $sliderList.find('li.active'),
					currentSlideIndex = currentSlide.index();

				$slide.removeClass('active');
				$sliderControls.removeClass('active');

				if ( currentSlide.next('li').length > 0 ){ // If exists next slide
					$slide.eq(currentSlideIndex + 1).addClass('active');
					$sliderControls.eq(currentSlideIndex + 1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (currentSlideIndex + 1)*100 + 'vw)');
				} else { // If this is last slide
					$slide.eq(0).addClass('active');
					$sliderControls.eq(0).addClass('active');
					$sliderList.css('transform', 'translateX(0)');
				}
			}, 6000);
		};

		mobileLookSlider('#mobile-look-slider');
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

	// News mouse scroll
	if ( $(window).width() > 767 ){
		$('.front-news-slider-wrapper').imagesLoaded( function() {
			$(".front-news-slider-wrapper").mThumbnailScroller({
				axis: "x",
				speed: 100,
				type: "hover-70",
				updateOnContentResize: true,
				markup:{ 
					thumbnailsContainer: ".front-news-list",
					thumbnailContainer: ".front-news-card"
				},
		        advanced:{
		            updateOnContentResize:false,
		            updateOnImageLoad:false,
		        }
			});
		});
	}

	// Instafeed
	var feed = new Instafeed({
	    accessToken: '3444127112.1677ed0.c0f06cec4c9f4cf98089f4174049cd8a',
		get: 'user',
		userId: '3444127112',
		template: '<li><a target="_blank" href="{{link}}" id="{{id}}" class="instagram-block"><img src="{{image}}" class="instagram-image" /><span class="instagram-icon"></span></a></li>',
		resolution: 'low_resolution',
		limit: 4
	});
	feed.run();
});