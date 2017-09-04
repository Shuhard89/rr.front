$(document).ready(function() {
	// Form login
	function profileForm(){
		var $form = $('#profile-add-address-form'),
			$formFields = $form.find('input'),
			$inputAddressName = $form.find('#user-address-name'),
			$inputAddressCountry = $form.find('#user-address-country'),
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

		// Submit form
		$form.on('submit', function(event) {
			if ( $inputAddressName.val() != '' && $inputAddressCountry.val() != '' ){

			} else {
				event.preventDefault();

				if ( $inputAddressName.val() == '' ){
					$inputAddressName.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputAddressCountry.val() == '' ){
					$inputAddressCountry.parent('.login-form-input-wrapper').addClass('invalid');
				}
			}
		});

		// Remove invalid class on focus
		$formFields.focus(function(event) {
			$(this).parent('.login-form-input-wrapper').removeClass('invalid');
		});
	};

	profileForm();
});