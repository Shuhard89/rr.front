$(document).ready(function() {

	// Post header slider
	function postHeaderSlider(sliderId){
		var $sliderList = $(sliderId).find('.blog-post-slider-list'),
			$slide = $sliderList.children('li'),
			slidesNumber = $slide.length,
			$sliderControls = $(sliderId).find('.blog-post-slider-controls > div'),
			$sliderControlsArrows = $(sliderId).find('.blog-post-slider-arrow');

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
			$sliderList.css('transform', 'translateX(-' + thisIndex*$slide.outerWidth() + 'px)');
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
				$sliderList.css('transform', 'translateX(-' + (currentSlideIndex + 1)*$slide.outerWidth() + 'px)');
			} else { // If this is last slide
				$slide.eq(0).addClass('active');
				$sliderControls.eq(0).addClass('active');
				$sliderList.css('transform', 'translateX(0)');
			}
		}, 6000);

		// Arrows
		$sliderControlsArrows.on('click', function() {
			var currentSlide = $sliderList.find('li.active'),
				currentSlideIndex = currentSlide.index();

			clearInterval(autoplay); // Disable autoplay

			$slide.removeClass('active');
			$sliderControls.removeClass('active');

			if ( $(this).hasClass('right') ){
				if ( currentSlide.next('li').length > 0 ){ // If exists next slide
					$slide.eq(currentSlideIndex + 1).addClass('active');
					$sliderControls.eq(currentSlideIndex + 1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (currentSlideIndex + 1)*$slide.outerWidth() + 'px)');
				} else { // If this is last slide
					$slide.eq(0).addClass('active');
					$sliderControls.eq(0).addClass('active');
					$sliderList.css('transform', 'translateX(0)');
				}
			} else {
				if ( currentSlide.prev('li').length > 0 ){ // If exists prev slide
					$slide.eq(currentSlideIndex - 1).addClass('active');
					$sliderControls.eq(currentSlideIndex - 1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (currentSlideIndex - 1)*$slide.outerWidth() + 'px)');
				} else { // If this is last slide
					$slide.eq(slidesNumber - 1).addClass('active');
					$sliderControls.eq(slidesNumber - 1).addClass('active');
					$sliderList.css('transform', 'translateX(-' + (slidesNumber - 1)*$slide.outerWidth() + 'px)');
				}
			}
		});
	};

	postHeaderSlider('#blog-post-slider');

	// Parallax Second News Column
	if ( $(window).width() > 767 ){
		$(window).stellar({
			positionProperty: 'transform',
			horizontalScrolling: false,
			responsive: true,
			hideDistantElements: false
		});
	}


	// Photos lightbox
	function PhotosLightbox(){
		var lightbox = $('.photos-lightbox');
		var sliderList = $('.lightbox-photos-list');
		var controls = $('.lightbox-photos-controls > span');
		var closeLightbox = $('.close-photos-lightbox');
		var previewItem = $('.blog-article-content a:has(img)');
		var slides;
		var slidesNumber;

		// Open lightbox and build slider
		previewItem.on('click', function(event) {
			event.preventDefault();

			var currentPhotos = $(this).parents('.blog-article-content').find('a:has(img)');
			var thisIndex = $.inArray( this, previewItem );

			if ( previewItem.length < 2 ){
				controls.parent().addClass('hidden');
			}

			sliderList.html('');
			currentPhotos.each(function(index, el) {
				var thisHref = $(this).attr('href');
				sliderList.append('<li><img src="' + thisHref + '"></li>');
			});

			// Build slider
			slides = sliderList.find('li');
			slidesNumber = slides.length;
			sliderList.css('width', slidesNumber*100+100 + '%');
			slides.removeClass('active');
			slides.eq(thisIndex).addClass('active');
			sliderList.css('transform', 'translateX(-' + (thisIndex)*100 + 'vw)');
			lightbox.addClass('visible');
			setTimeout(function(){
				lightbox.addClass('transition');
			}, 1000);
			$('html').addClass('overflow-hidden');
		});



		// Move slider
		controls.on('click', function(event) {
			event.preventDefault();

			var activeSlide = $('.lightbox-photos-list > li.active');
			var activeIndex = activeSlide.index();
			
			if ( $(this).is(':first-of-type') ){
				if ( activeSlide.prev('li').length > 0 ){
					slides.removeClass('active');
					slides.eq(activeIndex-1).addClass('active');
					sliderList.css('transform', 'translateX(-' + (activeIndex-1)*100 + 'vw)');
				} else {
					slides.removeClass('active');
					slides.eq(slidesNumber-1).addClass('active');
					sliderList.css('transform', 'translateX(-' + (slidesNumber-1)*100 + 'vw)');
				}
			}
			if ( $(this).is(':last-of-type') ){
				if ( activeSlide.next('li').length > 0 ){
					slides.removeClass('active');
					slides.eq(activeIndex+1).addClass('active');
					sliderList.css('transform', 'translateX(-' + (activeIndex+1)*100 + 'vw)');
				} else {
					slides.removeClass('active');
					slides.eq(0).addClass('active');
					sliderList.css('transform', 'translateX(0)');
				}
			}
		});

		// On swipe
		sliderList.on('swipeleft', function(event) {
			var activeSlide = $('.lightbox-photos-list > li.active');
			var activeIndex = activeSlide.index();

			if ( activeSlide.next('li').length > 0 ){
				slides.removeClass('active');
				slides.eq(activeIndex+1).addClass('active');
				sliderList.css('transform', 'translateX(-' + (activeIndex+1)*100 + 'vw)');
			} else {
				slides.removeClass('active');
				slides.eq(0).addClass('active');
				sliderList.css('transform', 'translateX(0)');
			}
		});

		sliderList.on('swiperight', function(event) {
			var activeSlide = $('.lightbox-photos-list > li.active');
			var activeIndex = activeSlide.index();

			if ( activeSlide.prev('li').length > 0 ){
				slides.removeClass('active');
				slides.eq(activeIndex-1).addClass('active');
				sliderList.css('transform', 'translateX(-' + (activeIndex-1)*100 + 'vw)');
			} else {
				slides.removeClass('active');
				slides.eq(slidesNumber-1).addClass('active');
				sliderList.css('transform', 'translateX(-' + (slidesNumber-1)*100 + 'vw)');
			}
		});

		// Close lightbox
		closeLightbox.on('click', function(event) {
			lightbox.removeClass('visible');
			setTimeout(function(){
				lightbox.removeClass('transition');
			}, 1000);
			$('html').removeClass('overflow-hidden');
		});

	};

	PhotosLightbox();
});