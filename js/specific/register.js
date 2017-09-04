$(document).ready(function() {
	// Form login
	function registerForm(){
		var $form = $('#register-form'),
			$formFields = $form.find('input'),
			$inputName = $form.find('#user-name'),
			$inputSurname = $form.find('#user-surname'),
			$inputEmail = $form.find('#user-email'),
			$inputPhone = $form.find('#user-phone'),
			$inputPassword = $form.find('#user-password'),
			$inputPasswordRepeat = $form.find('#user-password-2'),
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
		function validateName($name) {
			var nameReg = /^[a-zA-Zа-яА-Я. ]{2,3000}$/;
			return nameReg.test( $name );
		}
		function validatePhone($phone) {
			var phoneReg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			return phoneReg.test( $phone );
		}
		function validateEmail($email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/;
			return emailReg.test( $email );
		}

		// Submit form
		$form.on('submit', function(event) {
			if ( validateName($inputName.val()) && validateName($inputSurname.val()) && validateEmail($inputEmail.val()) && validatePhone($inputPhone.val()) && $inputPassword.val() != '' && $inputPasswordRepeat.val() != '' ){

			} else {
				event.preventDefault();

				if ( !validateName($inputName.val()) ){
					$inputName.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( !validateName($inputSurname.val()) ){
					$inputSurname.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( !validateEmail($inputEmail.val()) ){
					$inputEmail.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( !validatePhone($inputPhone.val()) ){
					$inputPhone.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPassword.val() == '' ){
					$inputPassword.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPasswordRepeat.val() == '' ){
					$inputPasswordRepeat.parent('.login-form-input-wrapper').addClass('invalid');
				}

				if ( $inputPassword.val() != $inputPasswordRepeat.val() ){
					$inputPassword.parent('.login-form-input-wrapper').addClass('invalid');
					$inputPasswordRepeat.parent('.login-form-input-wrapper').addClass('invalid');
				}
			}
		});

		// Remove invalid class on focus
		$formFields.focus(function(event) {
			$(this).parent('.login-form-input-wrapper').removeClass('invalid');
		});
	};

	registerForm();
});