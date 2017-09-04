<div class="page-login-register-wrapper clearfix">
	<div class="page-login-register-content">
		<div class="login-register-header">
			<a href="index.php" class="login-register-header-logo"></a>
			<a href="login.php" class="close-login-register back"></a>
		</div>
		<div class="login-register-content-container clearfix">
			<div class="restore-content-container">
				<p class="restore-text">Введите ваш Email и мы вышлем вам ваш пароль</p>
				<form action="restore_password_step_2.php" method="POST" class="login-register-form" id="restore-step1-form">
					<div class="login-form-input-wrapper login-form-input-wrapper-label-center">
						<input type="email" name="user-email" id="user-email">
						<label for="user-email">Email</label>
					</div>
					<button type="submit" class="login-register-btn restore">Выслать пароль</button>
				</form>
			</div>
		</div>
	</div>
	<div class="page-login-register-image-wrapper">
		<img src="img/login_register/restore_photo.jpg" alt="Roy Robson">
	</div>
</div>