$(document).ready(function() {
	// White header on scroll
	function whiteHeaderScroll(){
		var oneRem = $(window).width()/1360;
		var $header = $('.main-header');

		if ( $(window).scrollTop() > 110*oneRem ){
			$header.removeClass('main-header-transparent');
		}

		$(window).on('scroll', function() {
			if ( $(window).scrollTop() > 110*oneRem ){
				$header.removeClass('main-header-transparent');
			} else {
				$header.addClass('main-header-transparent');
			}
		});
	};

	if ( $(window).width() > 767 ){
		whiteHeaderScroll();
	}

	// History slider
	function historySlider(){
		var $sliderList1 = $('.history-slider1-container > ul'),
			$sliderList2 = $('.history-slider2-container > ul'),
			$sliderList1Slides = $sliderList1.children('li'),
			$sliderList2Slides = $sliderList2.children('li'),
			slidesNumber = $sliderList1Slides.length,
			$sliderTextList = $('.history-text-wrapper > ul'),
			$sliderTextListItems = $sliderTextList.children('li'),
			$controls = $('.history-slider-control-indicator'),
			slideHeight = $sliderList1Slides.eq(0).height(),
			textSlideWidth = $sliderTextListItems.eq(0).outerWidth();

		// Build slider
		$sliderList1Slides.eq(0).addClass('active');
		$sliderList2Slides.eq(slidesNumber - 1).addClass('active');
		$sliderTextListItems.eq(0).addClass('active');
		$controls.parents('.history-slider-controls-wrapper').find('li').eq(0).find($controls).addClass('active');
		$sliderList2.css('transform', 'translateY(-' + slideHeight*(slidesNumber-1) + 'px)');

		// Controls
		$controls.on('click', function() {
			var thisIndex = $(this).parent('li').index();

			clearInterval(autoplay);
			$sliderList1Slides.removeClass('active');
			$sliderList2Slides.removeClass('active');
			$sliderTextListItems.removeClass('active');
			$controls.removeClass('active');

			$sliderList1Slides.eq(thisIndex).addClass('active');
			$sliderList2Slides.eq(slidesNumber - thisIndex - 1).addClass('active');
			$sliderTextListItems.eq(thisIndex).addClass('active');
			$controls.parents('.history-slider-controls-wrapper').find('li').eq(thisIndex).find($controls).addClass('active');

			$sliderList1.css('transform', 'translateY(-' + slideHeight*thisIndex + 'px)');
			$sliderList2.css('transform', 'translateY(-' + slideHeight*(slidesNumber-thisIndex-1) + 'px)');
			$sliderTextList.css('transform', 'translateX(-' + textSlideWidth*thisIndex + 'px)');
		});

		// Autoplay

		var autoplay = setInterval(function(){
			var $currentSlide = $sliderList1.find('li.active'),
				currentIndex = $currentSlide.index();

			if ( $currentSlide.next('li').length > 0 ){
				$sliderList1Slides.removeClass('active');
				$sliderList2Slides.removeClass('active');
				$sliderTextListItems.removeClass('active');
				$controls.removeClass('active');

				$sliderList1Slides.eq(currentIndex+1).addClass('active');
				$sliderList2Slides.eq((slidesNumber - 1) - (currentIndex + 1)).addClass('active');
				$sliderTextListItems.eq(currentIndex+1).addClass('active');
				$controls.parents('.history-slider-controls-wrapper').find('li').eq(currentIndex+1).find($controls).addClass('active');

				$sliderList1.css('transform', 'translateY(-' + slideHeight*(currentIndex+1) + 'px)');
				$sliderList2.css('transform', 'translateY(-' + slideHeight*((slidesNumber-1)-currentIndex-1) + 'px)');
				$sliderTextList.css('transform', 'translateX(-' + textSlideWidth*(currentIndex+1) + 'px)');
			} else {
				$sliderList1Slides.removeClass('active');
				$sliderList2Slides.removeClass('active');
				$sliderTextListItems.removeClass('active');
				$controls.removeClass('active');

				$sliderList1Slides.eq(0).addClass('active');
				$sliderList2Slides.eq(slidesNumber - 1).addClass('active');
				$sliderTextListItems.eq(0).addClass('active');
				$controls.parents('.history-slider-controls-wrapper').find('li').eq(0).find($controls).addClass('active');

				$sliderList1.css('transform', 'translateY(0)');
				$sliderList2.css('transform', 'translateY(-' + slideHeight*(slidesNumber-1) + 'px)');
				$sliderTextList.css('transform', 'translateX(0)');
			}
		}, 6000);
	};

	historySlider();

	// Parallax Intro Image (stellar.js)
	if ( $(window).width() > 767 ){
		$(window).stellar({
			positionProperty: 'transform',
			horizontalScrolling: false
		});
	}

	// Background image reveal
	function aboutBrandBgImageReveal(){
		$(window).scroll(function(event) {
			var revealPosition = $('.section-about-brand-page-content-row1').position(),
				revealPositionTop = revealPosition.top - $(window).height()/3,
				hidePosition = $('.section-about-brand-page-instagram').position(),
				hidePositionTop = hidePosition.top - $(window).height()/2;

			if ( $(window).scrollTop() > revealPositionTop && $(window).scrollTop() < hidePositionTop ){
				$('.about-brand-page-fixed-bg').addClass('visible');
			} else {
				$('.about-brand-page-fixed-bg').removeClass('visible');
			}
			console.log($(window).scrollTop(),hidePositionTop);
		});
	};

	aboutBrandBgImageReveal();
});