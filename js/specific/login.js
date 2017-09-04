$(document).ready(function() {
	// Form login
	function loginForm(){
		var $form = $('#login-form'),
			$formFields = $form.find('input'),
			$inputEmail = $form.find('#user-email'),
			$inputPassword = $form.find('#user-password'),
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

		// Validation functions
		function validateEmail($email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/;
			return emailReg.test( $email );
		}

		// Submit form
		$form.on('submit', function(event) {
			if ( validateEmail($inputEmail.val()) && $inputPassword.val() != '' ){

			} else {
				event.preventDefault();

				if ( !validateEmail($inputEmail.val()) ){
					$inputEmail.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPassword.val() == '' ){
					$inputPassword.parent('.login-form-input-wrapper').addClass('invalid');
				}
			}
		});

		// Remove invalid class on focus
		$formFields.focus(function(event) {
			$(this).parent('.login-form-input-wrapper').removeClass('invalid');
		});
	};

	loginForm();
});