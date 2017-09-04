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
	<div class="pa-profile-add-address-content">
		<a href="pa_profile.php" class="pa-order-details-back-link">Назад</a>
		<div class="pa-profile-add-address-content-wrapper">
			<h1>Добавление нового адреса</h1>
			<form action="#" method="POST" class="profile-add-address-form" id="profile-add-address-form">
				<div class="login-form-input-wrapper">
					<input type="text" name="user-address-name" id="user-address-name">
					<label for="user-address-name">Название адреса *</label>
				</div>
				<div class="login-form-input-wrapper">
					<input type="text" name="user-address-country" id="user-address-country" value="Украина">
					<label for="user-address-country">Cтрана *</label>
				</div>
				<div class="shipment-radio-wrapper">
					<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-add-address">
						<input type="radio" name="shipment-type" id="shipment-type-np">
						<label for="shipment-type-np">Доставка новой почтой</label>
					</div>
					<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-add-address">
						<input type="radio" name="shipment-type" id="shipment-type-sr">
						<label for="shipment-type-sr">Шоурум roy robson</label>
					</div>
				</div>
				<button type="submit" class="login-register-btn">Добавить адрес</button>
			</form>
		</div>
	</div>
</div>