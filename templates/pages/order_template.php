<div class="page-wrapper">
	<div class="order-page-wrapper">
		<form action="invoice.php" method="POST" class="order-form" id="order-form">
			<div class="order-form-content">
				<!-- OPTIONAL (if user is logged out) -->
				<section class="order-log-in-text-wrapper">
					<p>Усли у вас уже есть аккаунт – <a href="login.php">войдите</a></p>
				</section>
				<section class="section-order-user-info">
					<h2>Информация о клиенте</h2>
					<div class="order-flex-inputs-wrapper">
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
					</div>
					<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-order">
						<input type="checkbox" name="send-newsletter" id="send-newsletter">
						<label for="send-newsletter">Подписаться на новости от Roy Robson</label>
					</div>
					<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-order-new-user">
						<input type="checkbox" name="order-create-account" id="order-create-account">
						<label for="order-create-account">Создать аккаунт для дальнейших покупок</label>
					</div>
					<div class="order-flex-inputs-wrapper order-flex-inputs-wrapper-news-user clearfix">
						<div class="login-form-input-wrapper">
							<input type="password" name="user-password" id="user-password">
							<label for="user-password">Пароль *</label>
						</div>
						<div class="login-form-input-wrapper">
							<input type="password" name="user-password-2" id="user-password-2">
							<label for="user-password-2">Пароль еще раз *</label>
						</div>
					</div>
				</section>
				<section class="shipment-user-info">
					<h2>Информация о доставке</h2>
					<div class="clearfix">
						<div class="shipment-user-info-left">
							<div class="order-flex-inputs-wrapper">
								<div class="login-form-input-wrapper">
									<input type="text" name="user-country" id="user-country" value="Украина">
									<label for="user-country">Страна</label>
								</div>
							</div>
							<div class="shipment-radios-wrapper">
								<div class="register-newsletter-checkbox-wrapper">
									<input type="radio" name="user-shipment" id="user-shipment-np">
									<label for="user-shipment-np">Доставка «Нова Пошта»</label>
								</div>
								<div class="np-adresses-wrapper">
									<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-sub">
										<input type="radio" name="user-np-type" id="user-np-warehouse">
										<label for="user-np-warehouse">Доставка на отделение</label>
									</div>
									<div class="user-np-warehouse-inputs-wrapper">
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-warehouse-state" id="user-warehouse-state">
												<label for="user-warehouse-state">Введите область</label>
											</div>
										</div>
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-warehouse-city" id="user-warehouse-city">
												<label for="user-warehouse-city">Введите город</label>
											</div>
										</div>
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-warehouse-number" id="user-warehouse-number">
												<label for="user-warehouse-number">Введите номер отделения</label>
											</div>
										</div>
									</div>
									<div class="register-newsletter-checkbox-wrapper register-newsletter-checkbox-wrapper-sub">
										<input type="radio" name="user-np-type" id="user-np-address">
										<label for="user-np-address">Адресная доставка</label>
									</div>
									<div class="user-np-address-inputs-wrapper">
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-address-state" id="user-address-state">
												<label for="user-address-state">Введите область</label>
											</div>
										</div>
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-address-city" id="user-address-city">
												<label for="user-address-city">Введите город</label>
											</div>
										</div>
										<div class="order-flex-inputs-wrapper">
											<div class="login-form-input-wrapper">
												<input type="text" name="user-address" id="user-address">
												<label for="user-address">Введите адрес доставки</label>
											</div>
										</div>
									</div>
								</div>
								<div class="register-newsletter-checkbox-wrapper">
									<input type="radio" name="user-shipment" id="user-shipment-showroom">
									<label for="user-shipment-showroom">Магазин Roy Robson</label>
								</div>
								<div class="showroom-inputs-wrapper">
									<div class="showroom-city-input-wrapper">
										<div class="showroom-city-info-label">
											<div class="showroom-input-wrapper">
												<input autocomplete="off" type="text" name="showroom-city" class="showroom-city-info-text" placeholder="Выберите город">
											</div>
											<div class="showroom-cities-radio-wrapper">
												<div class="showroom-city-radio-wrapper">
													<ul class="showroom-city-list">
														<li>Киев</li>
														<li>Черкассы</li>
														<li>Харьков</li>
														<li>Львов</li>
														<li>Одесса</li>
														<li>Сумы</li>
														<li>Винница</li>
														<li>Мариуполь</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div class="showroom-number-input-wrapper">
										<div class="showroom-number-info-label">
											<div class="showroom-input-wrapper">
												<input autocomplete="off" type="text" name="showroom-number" class="showroom-city-info-text" placeholder="Выберите магазин">
											</div>
											<div class="showroom-shops-radio-wrapper">
												<div class="showroom-city-radio-wrapper">
													<ul class="showroom-shops-list">
														<li>
															<p>Магазин roy robson no. 1</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 2</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 3</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 4</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 5</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 6</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
														<li>
															<p>Магазин roy robson no. 7</p>
															<address>
																Киев, ул. Гетьмана 6
																<br>
																+38(044) 355 53 35
															</address>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="shipment-user-info-right">
							<p>Выберите из вашей адресной книги</p>
							<div class="user-shipment-addresses-wrapper">
								<div class="user-shipment-address-item">
									<input type="radio" name="user-saved-address" id="user-saved-address1">
									<label for="user-saved-address1">
										<p class="user-saved-address-name">Рабочий адрес</p>
										<address>
											Киев, Украина
											<br>
											Новая Почта: Отделение № 11
										</address>
									</label>
								</div>
								<div class="user-shipment-address-item">
									<input type="radio" name="user-saved-address" id="user-saved-address2">
									<label for="user-saved-address2">
										<p class="user-saved-address-name">Домашний адрес</p>
										<address>
											Киев, Украина
											<br>
											ул. Леси Украинки 22, кв. 78
										</address>
									</label>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="payment-user-info">
					<h2>Информация об оплате</h2>
					<div class="payment-inputs-wrapper">
						<div class="register-newsletter-checkbox-wrapper">
							<input type="radio" name="user-pay" id="user-pay-card">
							<label for="user-pay-card">Оплата банковской картой на сайте (Visa / Mastercard)</label>
						</div>
						<div class="register-newsletter-checkbox-wrapper">
							<input type="radio" name="user-pay" id="user-pay-after">
							<label for="user-pay-after">Оплата наличными при получении (наложенный платеж)</label>
						</div>
						<div class="register-newsletter-checkbox-wrapper">
							<input type="radio" name="user-pay" id="user-pay-bank">
							<label for="user-pay-bank">Оплата банковским переводом</label>
						</div>
					</div>
				</section>
			</div>
			<section class="total-items-section">
				<h2>Ваш заказ</h2>
				<div class="order-details-products-wrapper">
					<div class="order-details-products-mobile-wrapper">
						<div class="order-details-products-header">
							<ul class="order-details-products-header-list clearfix">
								<li>Наименование</li>
								<li>Детали</li>
								<li>К-во</li>
								<li>Цена</li>
							</ul>
						</div>
						<div class="order-details-products-list-wrapper">
							<ul class="order-details-products-list">
								<li class="clearfix">
									<div class="order-details-product-img">
										<img src="img/placeholder_content/products/thumbnails/suit_01.png" alt="Black Classic Suit by Roy Robson">
									</div>
									<div class="order-details-product-name">
										<h2>
											<a href="#">Black Classic Suit by Roy Robson</a>
										</h2>
										<p>Style No. 50330733</p>
									</div>
									<div class="order-details-product-options">
										<ul>
											<li>
												<span class="key">Размер</span>
												<span class="value">102</span>
											</li>
											<li>
												<span class="key">Посадка</span>
												<span class="value">SLIM</span>
											</li>
										</ul>
									</div>
									<div class="order-details-product-count-price">
										<span class="minus-quantity"></span>
										<span class="quantity-placeholder">1</span>
										<span class="plus-quantity"></span>
										<input type="hidden" name="product-quantity-50330733" value="1">
									</div>
									<div class="order-details-product-count-price">
										<span>45 000 грн.</span>
									</div>
									<div class="order-remove-product-btn" title="Удалить из корзины"></div>
								</li>
								<li class="clearfix">
									<div class="order-details-product-img">
										<img src="img/placeholder_content/category_looks/complects/bag.png" alt="Black Classic Small Shoulder Bag">
									</div>
									<div class="order-details-product-name">
										<h2>
											<a href="#">Black Classic Small Shoulder Bag</a>
										</h2>
										<p>Style No. 50330734</p>
									</div>
									<div class="order-details-product-options">
										<ul>
											<li>
												<span class="key">Размер</span>
												<span class="value">One Size</span>
											</li>
										</ul>
									</div>
									<div class="order-details-product-count-price">
										<span class="minus-quantity"></span>
										<span class="quantity-placeholder">1</span>
										<span class="plus-quantity"></span>
										<input type="hidden" name="product-quantity-50330734" value="1">
									</div>
									<div class="order-details-product-count-price">
										<span>7 600 грн.</span>
									</div>
									<div class="order-remove-product-btn" title="Удалить из корзины"></div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="clearfix">
					<div class="order-submit-wrapper">
						<div class="order-submit-total-price">
							<span>Всего</span>
							<span>64 000 ГРН</span>
						</div>
						<button type="submit" class="order-btn-submit">Оформить заказ</button>
						<p>
							Нажимая на эту кнопку вы соглащаетесь с
							<br>
							<a href="help_terms_of_use.php">Условиями пользовательского соглашения</a>
						</p>
					</div>
				</div>
			</section>
		</form>
	</div>
</div>