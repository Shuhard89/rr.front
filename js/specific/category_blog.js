$(document).ready(function() {
	if ( $(window).width() > 767 ){
		// Parallax Second News Column
		$(window).stellar({
			positionProperty: 'transform',
			horizontalScrolling: false,
			responsive: true,
			hideDistantElements: false
		});

		// Hide top section elements on scroll
		$(window).scroll(function(event) {
			var mainHeaderHeight = $('.main-header').height(),
				$socList = $('.category-blog-fixed-info-subscribe-list'),
				socListBreakPoint = $socList.position().top + mainHeaderHeight + $socList.height() + 80,
				$subheading = $('.category-blog-fixed-info-subscribe-wrapper > p'),
				subheadingBreakPoint = $subheading.position().top + mainHeaderHeight + $subheading.height() + 80,
				$heading = $('.category-blog-fixed-info-subscribe-wrapper > h2'),
				headingBreakPoint = $heading.position().top + mainHeaderHeight + $heading.height() + 80,
				column1BreakPoint = -($(window).scrollTop() - $('.category-blog-list-column1').offset().top),
				$navList = $('.category-blog-fixed-info-nav-wrapper'),
				navListBreakPoint = $navList.position().top + mainHeaderHeight + $navList.height() + 80,
				column2BreakPoint = -($(window).scrollTop() - $('.category-blog-list-column2 > li').eq(0).offset().top);

			if ( socListBreakPoint - column1BreakPoint > 0 ){
				$socList.addClass('hidden');
			} else {
				$socList.removeClass('hidden');
			}
			if ( subheadingBreakPoint - column1BreakPoint > 0 ){
				$subheading.addClass('hidden');
			} else {
				$subheading.removeClass('hidden');
			}
			if ( headingBreakPoint - column1BreakPoint > 0 ){
				$heading.addClass('hidden');
			} else {
				$heading.removeClass('hidden');
			}
			if ( navListBreakPoint - column2BreakPoint > 0 ){
				$navList.addClass('hidden');
			} else {
				$navList.removeClass('hidden');
			}
		});
	}
});