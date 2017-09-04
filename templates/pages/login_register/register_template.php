<div class="page-login-register-wrapper clearfix">
	<div class="page-login-register-content">
		<div class="login-register-header">
			<a href="index.php" class="login-register-header-logo"></a>
			<a href="login.php" class="close-login-register back"></a>
		</div>
		<div class="register-content-container clearfix">
			<p class="register-text">Регистрация нового пользователя</p>
			<form action="login.php" method="POST" class="login-register-form" id="register-form">
				<div class="register-flex-inputs-wrapper">
					<div class="login-form-input-wrapper">
						<input type="text" name="user-name" id="user-name">
						<label for="user-name">Имя *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="text" name="user-surname" id="user-surname">
						<label for="user-surname">Фамилия *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="email" name="user-email" id="user-email">
						<label for="user-email">Email *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="tel" name="user-phone" id="user-phone">
						<label for="user-phone">Телефон *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="password" name="user-password" id="user-password">
						<label for="user-password">Пароль</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="password" name="user-password-2" id="user-password-2">
						<label for="user-password-2">Пароль еще раз *</label>
					</div>
				</div>
				<div class="register-newsletter-checkbox-wrapper">
					<input type="checkbox" name="send-newsletter" id="send-newsletter">
					<label for="send-newsletter">Подписаться на новости от Roy Robson</label>
				</div>
				<div class="register-btn-wrapper">
					<button type="submit" class="login-register-btn">Зарегистрироваться</button>
				</div>
				<p class="register-terms-text">
					Нажимая на эту кнопку вы соглашаетесь с
					<br>
					<a href="help_terms_of_use.php">Условиями пользовательского соглашения</a>
				</p>
			</form>
		</div>
	</div>
	<div class="page-login-register-image-wrapper">
		<img src="img/login_register/register_photo.jpg" alt="Roy Robson">
	</div>
</div>