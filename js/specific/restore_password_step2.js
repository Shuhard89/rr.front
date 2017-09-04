$(document).ready(function() {
	// Form restore password step 1
	function restorePasswordStep1Form(){
		var $form = $('#restore-step1-form'),
			$formFields = $form.find('input'),
			$inputPassword1 = $form.find('#user-password'),
			$inputPassword2 = $form.find('#user-password-2'),
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
			if ( $inputPassword1.val() != '' && $inputPassword2.val() != '' && $inputPassword1.val() == $inputPassword2.val() ){

			} else {
				event.preventDefault();

				if ( $inputPassword1.val() == '' ){
					$inputPassword1.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPassword2.val() == '' ){
					$inputPassword2.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPassword1.val() !=  $inputPassword2.val() ){
					$inputPassword1.parent('.login-form-input-wrapper').addClass('invalid');
					$inputPassword2.parent('.login-form-input-wrapper').addClass('invalid');
				}
			}
		});

		// Remove invalid class on focus
		$formFields.focus(function(event) {
			$(this).parent('.login-form-input-wrapper').removeClass('invalid');
		});
	};

	restorePasswordStep1Form();
});