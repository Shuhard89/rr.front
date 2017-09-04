$(document).ready(function() {
	// Form restore password step 1
	function orderForm(){
		var $form = $('#order-form'),
			$formFields = $form.find('input'),
			$submitBtn = $form.find('button');

		// Form fields label up
		$formFields.on('keyup', function(event) {
			if ( $(this).val() != '' ){
				$(this).addClass('not-empty');
			} else {
				$(this).removeClass('not-empty');
			}
		});

		$formFields.each(function(index, el) {
			if ( $(this).val() != '' ){
				$(this).addClass('not-empty');
			} else {
				$(this).removeClass('not-empty');
			}
		});
	};

	orderForm();

	// Collapsed blocks
	
	$('input[name="order-create-account"]').change(function(event) {
		if ( $(this).is(':checked') ){
			$('.order-flex-inputs-wrapper-news-user').slideDown('slow');
		} else {
			$('.order-flex-inputs-wrapper-news-user').slideUp('slow');
		}
	});

	$('input[name="user-shipment"]').change(function(event) {
		$('input[name="user-saved-address"]').prop('checked', false);
		if ( $(this).is('#user-shipment-np') ){
			if ( $(this).is(':checked') ){
				$('.np-adresses-wrapper').slideDown('slow');
				$('.showroom-inputs-wrapper').slideUp('slow');
			}
		} else if ( $(this).is('#user-shipment-showroom') ){
			if ( $(this).is(':checked') ){
				$('.showroom-inputs-wrapper').slideDown('slow');
				$('.np-adresses-wrapper').slideUp('slow');
			}
		}
	});

	$('input[name="user-np-type"]').change(function(event) {
		$('input[name="user-saved-address"]').prop('checked', false);
		if ( $(this).is('#user-np-warehouse') ){
			if ( $(this).is(':checked') ){
				$('.user-np-warehouse-inputs-wrapper').slideDown('slow');
				$('.user-np-address-inputs-wrapper').slideUp('slow');
			}
		} else if ( $(this).is('#user-np-address') ){
			if ( $(this).is(':checked') ){
				$('.user-np-address-inputs-wrapper').slideDown('slow');
				$('.user-np-warehouse-inputs-wrapper').slideUp('slow');
			}
		}
	});

	$('input[name="user-saved-address"]').change(function(event) {
		if ( $(this).is(':checked') ) {
			$('input[name="user-shipment"]').prop('checked', false);
			$('input[name="user-np-type"]').prop('checked', false);
			$('.showroom-inputs-wrapper').slideUp('slow');
			$('.np-adresses-wrapper').slideUp('slow');
			$('.user-np-address-inputs-wrapper').slideUp('slow');
			$('.user-np-warehouse-inputs-wrapper').slideUp('slow');
		}
	});

	$('.showroom-city-info-label .showroom-input-wrapper input').click(function(event) {
		if ( $(this).parent().hasClass('list-visible') ){
			$('.showroom-cities-radio-wrapper').stop().slideUp('slow');
			$(this).parent().removeClass('list-visible');
		} else {
			$('.showroom-cities-radio-wrapper').stop().slideDown('slow');
			$(this).parent().addClass('list-visible');
		}
	});

	$('.showroom-number-info-label .showroom-input-wrapper input').click(function(event) {
		if ( $(this).parent().hasClass('list-visible') ){
			$('.showroom-shops-radio-wrapper').stop().slideUp('slow');
			$(this).parent().removeClass('list-visible');
		} else {
			$('.showroom-shops-radio-wrapper').stop().slideDown('slow');
			$(this).parent().addClass('list-visible');
		}
	});

	// Showroom select
	$('.showroom-city-list > li').click(function(event) {
		var thisContent = $(this).html();

		$('input[name="showroom-city"]').val(thisContent).parent().removeClass('list-visible');
		$('.showroom-cities-radio-wrapper').stop().slideUp('normal');
	});

	$('.showroom-shops-list > li').click(function(event) {
		var thisContent = $(this).find('p').html();

		$('input[name="showroom-number"]').val(thisContent).parent().removeClass('list-visible');
		$('.showroom-shops-radio-wrapper').stop().slideUp('normal');
	});
});