<div class="pa-page-wrapper">
	<div class="pa-header">
		<a href="index.php" class="pa-header-logo"></a>
		<nav class="pa-nav">
			<ul>
				<li class="active">
					<a href="pa_profile.php">Личный профиль</a>
				</li>
				<li>
					<a href="pa_favourite.php">Избранное</a>
				</li>
				<li>
					<a href="pa_orders_history_list.php">История заказов</a>
				</li>
			</ul>
		</nav>
		<nav class="header-profile-nav pa-header-profile-nav">
			<ul class="clearfix">
				<li class="header-search-link">
					<a href="#">Поиск</a>
				</li>
				<li class="header-profile-link">
					<a href="login.php">Профиль</a>
				</li>
				<li class="header-favourite-link">
					<a href="pa_favourite.php">Избранное</a>
				</li>
				<li class="header-cart-link">
					<a href="#">Корзина</a>
				</li>
			</ul>
		</nav>
	</div>
	<div class="pa-mobile-header">
		<ul>
			<li class="active">
				<a href="pa_profile.php">Личный профиль</a>
			</li>
			<li>
				<a href="pa_favourite.php">Избранное</a>
			</li>
			<li>
				<a href="pa_orders_history_list.php">История заказов</a>
			</li>
		</ul>
	</div>
	<div class="pa-profile-content">
		<div class="pa-profile-content-container">
			<h2>Общая информация</h2>
			<form action="#" method="POST" class="profile-edit-form" id="profile-edit-form">
				<div class="register-flex-inputs-wrapper">
					<div class="login-form-input-wrapper">
						<input type="text" name="user-name" id="user-name" value="Ростислав">
						<label for="user-name">Имя *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="text" name="user-surname" id="user-surname" value="Горбаченко">
						<label for="user-surname">Фамилия *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="email" name="user-email" id="user-email" value="rostislav@rossery.com">
						<label for="user-email">Email *</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="tel" name="user-phone" id="user-phone" value="+38073 464 52 61">
						<label for="user-phone">Телефон *</label>
					</div>
				</div>
				<div class="change-password-wrapper">
					<div class="login-form-input-wrapper">
						<input type="password" name="user-password" id="user-password">
						<label for="user-password">Пароль</label>
					</div>
					<div class="login-form-input-wrapper">
						<input type="password" name="user-password-new" id="user-password-new">
						<label for="user-password-new">Новый пароль</label>
					</div>
				</div>
				<div class="clearfix">
					<span class="change-password-open-btn">Изменить пароль</span>
				</div>
				<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-profile">
					<input type="checkbox" name="send-newsletter" id="send-newsletter">
					<label for="send-newsletter">Подписаться на новости от Roy Robson</label>
				</div>
				<div class="register-btn-wrapper register-btn-wrapper-profile">
					<button type="submit" class="login-register-btn">Сохранить изменения</button>
				</div>
			</form>
		</div>
		<a href="#" class="profile-logout-btn">Выйти из личного кабинета</a>
	</div>
</div>