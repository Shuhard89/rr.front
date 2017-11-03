$(document).ready(function() {
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

	// sizeChartsSlider();

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

	// measureHelp();
});