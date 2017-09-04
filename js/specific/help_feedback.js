$(document).ready(function() {
	// Form contact us
	function contuctUsForm(){
		var $form = $('.help-form'),
			$formFields = $form.find('input, textarea'),
			$inputName = $form.find('#user-name'),
			$inputLastName = $form.find('#user-last-name'),
			$inputEmail = $form.find('#user-email'),
			$inputPhone = $form.find('#user-phone'),
			$inputMessage = $form.find('#user-message'),
			$submitBtn = $form.find('button'),
			hasEmptyFieldsArr = [];

		// Validation functions
		function validateName($name) {
			var nameReg = /^[a-zA-Zа-яА-Я. ]{2,3000}$/;
			return nameReg.test( $name );
		}
		function validatePhone($phone) {
			var phoneReg = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
			return phoneReg.test( $phone );
		}
		function validateMessage($message) {
			var messageReg = /^[a-zA-Zа-яА-Я0-9 ]{10,3000}$/;
			return messageReg.test( $message );
		}
		function validateEmail($email) {
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})$/;
			return emailReg.test( $email );
		}

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

		// Active submit button if no empty fields
		$formFields.on('keyup', function(event) {
			$formFields.each(function(index, el) {
				if ( $(this).val() == '' ){
					hasEmptyFieldsArr.push('true');
				} else {
					hasEmptyFieldsArr.push('false');
				}
			});
			
			var empty = hasEmptyFieldsArr.indexOf("true");

			if ( empty > -1 ){
				$submitBtn.removeClass('active');
			} else {
				$submitBtn.addClass('active');
			}
			hasEmptyFieldsArr = [];
		});



		// Submit form
		$form.on('submit', function(event) {
			if ( validateName($inputName.val()) && validateName($inputLastName.val()) && validateEmail($inputEmail.val()) && validatePhone($inputPhone.val()) ){

			} else {
				event.preventDefault();

				if ( !validateName($inputName.val()) ){
					$inputName.parent('.help-form-input-wrapper').addClass('invalid');
				}

				if ( !validateName($inputLastName.val()) ){
					$inputLastName.parent('.help-form-input-wrapper').addClass('invalid');
				}

				if ( !validateEmail($inputEmail.val()) ){
					$inputEmail.parent('.help-form-input-wrapper').addClass('invalid');
				}

				if ( !validatePhone($inputPhone.val()) ){
					$inputPhone.parent('.help-form-input-wrapper').addClass('invalid');
				}
			}
		});

		// Remove invalid class on focus
		$formFields.focus(function(event) {
			$(this).parent('.help-form-input-wrapper').removeClass('invalid');
		});
	};

	contuctUsForm();
});