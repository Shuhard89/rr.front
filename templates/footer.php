	<!-- FOOTER -->
	<footer class="main-footer <?php if ( strpos( $currentpage, 'single_blog_lookbook.php' ) == true 
	|| strpos( $currentpage, 'help_size_charts.php' ) == true 
	|| strpos( $currentpage, 'help_shipment.php' ) == true 
	|| strpos( $currentpage, 'help_order_status.php' ) == true 
	|| strpos( $currentpage, 'help_contact_us.php' ) == true 
	|| strpos( $currentpage, 'help_feedback.php' ) == true 
	|| strpos( $currentpage, 'help_payment.php' ) == true 
	|| strpos( $currentpage, 'help_exchange_refund.php' ) == true 
	|| strpos( $currentpage, 'help_privacy_policy.php' ) == true 
	|| strpos( $currentpage, 'help_terms_of_use.php' ) == true 
	|| strpos( $currentpage, 'help_for_partners.php' ) == true 
	|| strpos( $currentpage, 'category_vacancies.php' ) == true 
	|| strpos( $currentpage, 'single_vacancy.php' ) == true 
	|| strpos( $currentpage, 'category_shops_map.php' ) == true 
	|| strpos( $currentpage, 'single_shops_map.php' ) == true 
	|| strpos( $currentpage, 'login.php' ) == true
	|| strpos( $currentpage, 'restore_password.php' ) == true
	|| strpos( $currentpage, 'restore_password_step_2.php' ) == true 
	|| strpos( $currentpage, 'register.php' ) == true 
	|| strpos( $currentpage, 'pa_orders_history_list.php' ) == true 
	|| strpos( $currentpage, 'response.php' ) == true 
	|| strpos( $currentpage, 'registration_success.php') == true 
	|| strpos( $currentpage, 'login-wrong.php' ) == true 
	|| strpos( $currentpage, '404.php' ) == true ) { echo 'main-footer-hide'; } ?>"> <!-- Add class to footer if this is "Single LookBook Blog Post" -->
		<div class="clearfix">
			<div class="footer-menu-wrapper clearfix">
				<div class="footer-menu-container clearfix">
					<p>Помощь</p>
					<ul class="footer-menu-list">
						<li>
							<a href="help_order_status.php">Статус заказа</a>
						</li>
						<li>
							<a href="help_payment.php">Оплата</a>
						</li>
						<li>
							<a href="help_shipment.php">Доставка</a>
						</li>
						<li>
							<a href="help_exchange_refund.php">Возврат</a>
						</li>
						<li>
							<a href="help_size_charts.php">Таблица размеров</a>
						</li>
					</ul>
				</div>
				<div class="footer-menu-container footer-menu-container-wout-heading clearfix">
					<ul class="footer-menu-list">
						<li>
							<a href="help_contact_us.php">Связаться с нами</a>
						</li>
						<li>
							<a href="help_privacy_policy.php">Политика конфиденциальности</a>
						</li>
						<li>
							<a href="help_terms_of_use.php">Условия использования</a>
						</li>
						<li>
							<a href="help_feedback.php">Оставить отзыв</a>
						</li>
					</ul>
				</div>
				<div class="footer-menu-container clearfix">
					<p>Roy Robson</p>
					<ul class="footer-menu-list">
						<li>
							<a href="about_brand.php">О бренде</a>
						</li>
						<li>
							<a href="category_shops_map.php">Карта магазинов</a>
						</li>
						<li>
							<a href="category_vacancies.php">Вакансии</a>
						</li>
						<li>
							<a href="help_for_partners.php">Партнерам</a>
						</li>
					</ul>
				</div>
			</div>
			<ul class="footer-scials-list clearfix">
				<li>
					<a href="#" target="_blank">
						<i class="fa fa-facebook-official" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="#" target="_blank">
						<i class="fa fa-instagram" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</div>
		<span class="footer-copy">&copy; 2017 ROY ROBSON Все права защищены</span>
	</footer>
	<!-- FOOTER (END) -->

	<div class="page-dark-overlay"></div>
	<div class="search-modal-dark-overlay"></div>

	<!-- SEARCH MODAL -->
	<div class="modal-search">
		<form action="#" method="POST" class="modal-search-form">
			<input type="text" name="modal-search-input" id="modal-search-input">
			<label for="modal-search-input">Поиск <span>в магазине Roy Robson</span></label>
			<button type="submit"></button>
		</form>
		<div class="modal-search-result-wrapper">
			<!-- <p class="modal-search-result-no-items">К сожалению, мы ничего не нашли по вашему запросу</p> -->

<!-- 		<div class="modal-search-result-categories-container">
				<h6>Категории</h6>
				<ul>
					<li>
						<a href="category_products.php">Костюмы</a>
					</li>
					<li>
						<a href="category_products.php">Костюмы / Бизнес костюмы</a>
					</li>
					<li>
						<a href="category_products.php">Костюмы / Премиум костюмы</a>
					</li>
					<li>
						<a href="category_products.php">Костюмы / Вечерние костюмы</a>
					</li>
					<li>
						<a href="category_products.php">Костюмы / Премиум костюмы</a>
					</li>
				</ul>
				<p class="modal-search-result-items-found">
					По вашему запросу найдено 
					<span>158 товаров</span>
				</p>
				<a href="#" class="modal-search-result-full-link">Показать все</a>
			</div> -->

<!-- 			<div class="modal-search-result-categories-container">
				<ul class="modal-shopping-cart-list">
					<li>
						<div class="modal-shopping-cart-item-preview">
							<a href="single_product.php">
								<img src="img/placeholder_content/products/thumbnails/suit_01.png" alt="Title">
							</a>
						</div>
						<div class="modal-shopping-cart-item-info">
							<a href="category_products.php" class="modal-shopping-cart-item-category-link">Костюмы Roy Robson</a>
							<h6>
								<a href="single_product.php">Темно-серый костюм</a>
							</h6>
							<div class="modal-shopping-cart-item-price-del-wrapper">
								<span class="modal-shopping-cart-item-attr-price">45 000 ГРН</span>
								<span class="modal-shopping-cart-item-attr-old-price">75 000 ГРН</span>
							</div>
						</div>
					</li>
					<li>
						<div class="modal-shopping-cart-item-preview">
							<a href="single_product.php">
								<img src="img/placeholder_content/category_looks/complects/shoes.png" alt="Title">
							</a>
						</div>
						<div class="modal-shopping-cart-item-info">
							<a href="category_products.php" class="modal-shopping-cart-item-category-link">Туфли Roy Robson</a>
							<h6>
								<a href="single_product.php">Черные классические туфли</a>
							</h6>
							<div class="modal-shopping-cart-item-price-del-wrapper">
								<span class="modal-shopping-cart-item-attr-price">19 000 ГРН</span>
							</div>
						</div>
					</li>
				</ul>
				<p class="modal-search-result-items-found">
					По вашему запросу найдено 
					<span>158 товаров</span>
				</p>
				<a href="#" class="modal-search-result-full-link">Показать все</a>
			</div> -->
		</div>
	</div>

	<!-- FAST VIEW MODAL -->
	<div class="modal-fast-view">
		<div class="modal-fast-view-close-btn"></div>
		<div class="modal-fast-view-content">
			<div class="fast-view-image-slider-wrapper">
				<ul class="fast-view-image-slider-list">
					<li>
						<img src="img/placeholder_content/products/fast-view.png" alt="Title">
					</li>
					<li>
						<img src="img/placeholder_content/products/fast-view.png" alt="Title">
					</li>
					<li>
						<img src="img/placeholder_content/products/fast-view.png" alt="Title">
					</li>
				</ul>
			</div>
			<div class="clearfix">
				<div class="fast-view-image-slider-controls clearfix">
					<div class="fast-view-image-slider-control left"></div>
					<div class="fast-view-image-slider-control right"></div>
				</div>
			</div>
			<div class="fast-view-form-wrapper">
				<a href="category_products.php" class="single-product-category-link">Костюмы от Roy Robson</a>
				<br>
				<h1 class="single-product-variation-name">Темно-серый костюм</h1>
				<span class="single-product-articul">Style No. 50330733</span>
				<form action="#" method="POST" class="single-product-form" id="single-product-form">
					<div class="single-product-field-wrapper">
						<div class="single-product-field-heading clearfix">
							<span class="single-product-field-caption">Цвет</span>
							<span class="single-product-field-value">Black</span>
						</div>
						<div class="clearfix">
							<ul class="single-product-colors-list clearfix">
								<li>
									<input type="radio" name="color" value="black" id="color-black" checked>
									<label for="color-black" style="background-color: #242733;"></label>
								</li>
								<li>
									<input type="radio" name="color" value="grey" id="color-grey">
									<label for="color-grey" style="background-color: #504c4d;"></label>
								</li>
							</ul>
						</div>
					</div>
					<div class="single-product-field-wrapper">
						<div class="single-product-field-heading clearfix">
							<span class="single-product-field-caption">Паттерн</span>
							<span class="single-product-field-value">Grey Wool Pattern</span>
						</div>
						<div class="clearfix">
							<ul class="single-product-colors-list clearfix">
								<li>
									<input type="radio" name="pattern" value="black" id="pattern-black">
									<label for="pattern-black" style="background-color: #242733;"></label>
								</li>
								<li>
									<input type="radio" name="pattern" value="grey" id="pattern-grey" checked>
									<label for="pattern-grey" style="background-color: #504c4d;"></label>
								</li>
							</ul>
						</div>
					</div>
					<div class="single-product-field-wrapper single-product-field-wrapper-size">
						<div class="single-product-field-heading clearfix">
							<span class="single-product-field-caption">Размер</span>
						</div>
						<div class="clearfix">
							<ul class="single-product-sizes-list clearfix">
								<li>
									<input type="radio" name="size" value="44" id="size-44" disabled>
									<label for="size-44">44</label>
								</li>
								<li>
									<input type="radio" name="size" value="46" id="size-46">
									<label for="size-46">46</label>
								</li>
								<li>
									<input type="radio" name="size" value="48" id="size-48">
									<label for="size-48">48</label>
								</li>
								<li>
									<input type="radio" name="size" value="50" id="size-50">
									<label for="size-50">50</label>
								</li>
								<li>
									<input type="radio" name="size" value="52" id="size-52">
									<label for="size-52">52</label>
								</li>
								<li>
									<input type="radio" name="size" value="54" id="size-54">
									<label for="size-54">54</label>
								</li>
								<li>
									<input type="radio" name="size" value="56" id="size-56" checked>
									<label for="size-56">56</label>
								</li>
								<li>
									<input type="radio" name="size" value="58" id="size-58">
									<label for="size-58">58</label>
								</li>
								<li>
									<input type="radio" name="size" value="94" id="size-94">
									<label for="size-94">94</label>
								</li>
								<li>
									<input type="radio" name="size" value="98" id="size-98">
									<label for="size-98">98</label>
								</li>
								<li>
									<input type="radio" name="size" value="102" id="size-102">
									<label for="size-102">102</label>
								</li>
								<li>
									<input type="radio" name="size" value="106" id="size-106">
									<label for="size-106">106</label>
								</li>
								<li>
									<input type="radio" name="size" value="25" id="size-25">
									<label for="size-25">25</label>
								</li>
								<li>
									<input type="radio" name="size" value="26" id="size-26">
									<label for="size-26">26</label>
								</li>
								<li>
									<input type="radio" name="size" value="27" id="size-27" disabled>
									<label for="size-27">27</label>
								</li>
								<li>
									<input type="radio" name="size" value="28" id="size-28" disabled>
									<label for="size-28">28</label>
								</li>
							</ul>
						</div>
						<div class="clearfix">
							<a href="help_size_charts.php" target="_blank" class="single-product-size-table">Таблица размеров</a>
						</div>
					</div>
					<div class="single-product-field-wrapper single-product-field-wrapper-price">
						<div class="single-product-field-heading clearfix">
							<span class="single-product-field-caption">Цена</span>
							<span class="single-product-field-value">45 000 ГРН</span>
						</div>
					</div>
					<div class="single-product-field-wrapper single-product-field-wrapper-count">
						<div class="single-product-field-heading clearfix">
							<span class="single-product-field-caption">Количество</span>
							<div class="single-product-field-count">
								<span class="count-minus"></span>
								<input type="number" name="count" id="count" value="1" min="1">
								<span class="count-plus"></span>
							</div>
						</div>
					</div>
					<button type="submit" class="single-product-form-btn add-to-cart" data-text-hover="Добавить в корзину">
						<span>Добавить в корзину</span>
					</button>
					<a href="pa_favourite.php" class="single-product-form-btn add-to-favourites" data-text-hover="Добавить в избранное">
						<span>Добавить в избранное</span>
					</a>
					<a href="single_product.php" class="single-product-form-btn more" data-text-hover="Подробнее">
						<span>Подробнее</span>
					</a>
				</form>
			</div>
		</div>
	</div>

	<!-- SHOPPING CART MODAL -->
	<div class="modal-shopping-cart">
		<div class="modal-shopping-cart-close-btn"></div>
		<div class="modal-shopping-cart-content">
			<ul class="modal-shopping-cart-list">
				<li>
					<div class="modal-shopping-cart-item-preview">
						<a href="single_product.php">
							<img src="img/placeholder_content/products/thumbnails/suit_01.png" alt="Title">
						</a>
					</div>
					<div class="modal-shopping-cart-item-info">
						<a href="category_products.php" class="modal-shopping-cart-item-category-link">Костюмы Roy Robson</a>
						<h6>
							<a href="single_product.php">Темно-серый костюм</a>
						</h6>
						<ul class="modal-shopping-cart-item-attr-list">
							<li>102</li>
							<li>Slim</li>
							<li class="modal-shopping-cart-item-attr-count">Количество: 1</li>
						</ul>
						<div class="modal-shopping-cart-item-price-del-wrapper">
							<span class="modal-shopping-cart-item-attr-price">45 000 ГРН</span>
							<span class="modal-shopping-cart-item-attr-old-price">75 000 ГРН</span>
							<a href="#" class="modal-shopping-cart-item-del-btn"></a>
						</div>
					</div>
				</li>
				<li>
					<div class="modal-shopping-cart-item-preview">
						<a href="single_product.php">
							<img src="img/placeholder_content/category_looks/complects/shoes.png" alt="Title">
						</a>
					</div>
					<div class="modal-shopping-cart-item-info">
						<a href="category_products.php" class="modal-shopping-cart-item-category-link">Туфли Roy Robson</a>
						<h6>
							<a href="single_product.php">Черные классические туфли</a>
						</h6>
						<ul class="modal-shopping-cart-item-attr-list">
							<li>44</li>
							<li class="modal-shopping-cart-item-attr-count">Количество: 1</li>
						</ul>
						<div class="modal-shopping-cart-item-price-del-wrapper">
							<span class="modal-shopping-cart-item-attr-price">19 000 ГРН</span>
							<a href="#" class="modal-shopping-cart-item-del-btn"></a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="modal-shopping-cart-bottom">
			<div class="modal-cart-total clearfix">
				<span class="modal-cart-total-heading">Всего</span>
				<span class="modal-cart-total-price">75 000 грн</span>
			</div>
			<a href="order.php" class="modal-cart-submit-btn">Оформить заказ</a>
		</div>
	</div>

	<!-- MAIN JS -->
	<script src="js/libs/jquery-3.2.1.min.js"></script>
	<script src="js/libs/jquery-migrate-3.0.0.min.js"></script>
	<script src="js/libs/jquery.mobile.custom.min.js"></script>
	<script src="js/libs/imagesloaded.pkgd.min.js"></script>
	<script src="js/libs/ofi.min.js"></script>
	<script src="js/main.js"></script>
	<!-- MAIN JS (END) -->

	<!-- SPECIFIC JS -->
	<?php
		$currentpage = $_SERVER['REQUEST_URI'];
		if ( $currentpage == '/' || $currentpage == '/projects/rr/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
			<!-- PAGE - FRONT PAGE JS -->
			<script src="js/libs/jquery.stellar.min.js"></script>
			<script src="js/libs/slick.min.js"></script>
			<script src="js/libs/jquery.mThumbnailScroller.min.js"></script>
			<script src="js/libs/instafeed.min.js"></script>
			<script src="js/specific/page-frontpage.js"></script>
			<!-- PAGE - FRONT PAGE JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'about_brand.php' ) == true ) { ?>
			<!-- PAGE - ABOUT BRAND PAGE JS -->
			<script src="js/libs/jquery.stellar.min.js"></script>
			<script src="js/specific/page-about-brand.js"></script>
			<!-- PAGE - ABOUT BRAND PAGE JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category_products.php' ) == true ) { ?>
			<!-- CATEGORY - PRODUCTS JS -->
			<script src="js/libs/slick.min.js"></script>
			<script src="js/specific/category-products.js"></script>
			<!-- CATEGORY - PRODUCTS JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category_blog.php' ) == true ) { ?>
			<!-- CATEGORY - BLOG JS -->
			<script src="js/libs/jquery.stellar.min.js"></script>
			<script src="js/specific/category_blog.js"></script>
			<!-- CATEGORY - BLOG JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_blog_lookbook.php' ) == true ) { ?>
			<!-- SINGLE - BLOG LOOKBOOK JS -->
			<script src="js/libs/jquery.mThumbnailScroller.min.js"></script>
			<script src="js/specific/single_blog_lookbook.js"></script>
			<!-- SINGLE - BLOG LOOKBOOK JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_blog_default_post.php' ) == true ) { ?>
			<!-- SINGLE - BLOG DEFAULT POST JS -->
			<script src="js/libs/jquery.stellar.min.js"></script>
			<script src="js/specific/single_blog_default_post.js"></script>
			<!-- SINGLE - BLOG DEFAULT POST JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category_looks.php' ) == true ) { ?>
			<!-- CATEGORY - LOOKS JS -->
			<script src="js/libs/slick.min.js"></script>
			<script src="js/specific/category_looks.js"></script>
			<!-- CATEGORY - LOOKS JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'help_size_charts.php' ) == true ) { ?>
			<!-- HELP - SIZE CHARTS JS -->
			<script src="js/specific/help_size_charts.js"></script>
			<!-- HELP - SIZE CHARTS JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'help_contact_us.php' ) == true ) { ?>
			<!-- HELP - CONTACT US JS -->
			<script src="js/specific/help_contact_us.js"></script>
			<!-- HELP - CONTACT US JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'help_feedback.php' ) == true ) { ?>
			<!-- HELP - FEEDBACK JS -->
			<script src="js/specific/help_feedback.js"></script>
			<!-- HELP - FEEDBACK JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'login.php' ) == true || strpos( $currentpage, 'login-wrong.php' ) == true ) { ?>
			<!-- PAGE - LOGIN JS -->
			<script src="js/specific/login.js"></script>
			<!-- PAGE - LOGIN JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'restore_password.php' ) == true ) { ?>
			<!-- PAGE - RESTORE PASSWORD JS -->
			<script src="js/specific/restore_password_step1.js"></script>
			<!-- PAGE - RESTORE PASSWORD JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'restore_password_step_2.php' ) == true ) { ?>
			<!-- PAGE - RESTORE PASSWORD STEP 2 JS -->
			<script src="js/specific/restore_password_step2.js"></script>
			<!-- PAGE - RESTORE PASSWORD STEP 2 JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'register.php' ) == true ) { ?>
			<!-- PAGE - REGISTER JS -->
			<script src="js/specific/register.js"></script>
			<!-- PAGE - REGISTER JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'pa_favourite.php' ) == true ) { ?>
			<!-- PAGE - PA FAVOURITE JS -->
			<script src="js/libs/slick.min.js"></script>
			<script src="js/libs/jquery.mThumbnailScroller.min.js"></script>
			<script src="js/specific/pa_favourite.js"></script>
			<!-- PAGE - PA FAVOURITE JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'pa_orders_history_list.php' ) == true ) { ?>
			<!-- PAGE - PA ORDERS HISTORY LIST JS -->
			<script src="js/libs/jquery.mThumbnailScroller.min.js"></script>
			<script src="js/specific/pa_orders_history_list.js"></script>
			<!-- PAGE - PA ORDERS HISTORY LIST JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'pa_profile.php' ) == true ) { ?>
			<!-- PAGE - PA PROFILE JS -->
			<script src="js/specific/pa_profile.js"></script>
			<!-- PAGE - PA PROFILE JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'pa_profile_add_address.php' ) == true ) { ?>
			<!-- PAGE - PA PROFILE ADD ADDRESS JS -->
			<script src="js/specific/pa_profile_add_address.js"></script>
			<!-- PAGE - PA PROFILE ADD ADDRESS JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_product.php' ) == true ) { ?>
			<!-- PAGE - SINGLE PRODUCT JS -->
			<script src="js/libs/slick.min.js"></script>
			<script src="js/libs/jquery.mThumbnailScroller.min.js"></script>
			<script src="js/libs/sticky_kit.js"></script>
			<script src="js/specific/single_product.js"></script>
			<!-- PAGE - SINGLE PRODUCT JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'order.php' ) == true ) { ?>
			<!-- PAGE - PAGE ORDER JS -->
			<script src="js/specific/order.js"></script>
			<!-- PAGE - PAGE ORDER JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'search.php' ) == true ) { ?>
			<!-- PAGE - PAGE ORDER JS -->
			<script src="js/libs/slick.min.js"></script>
			<script src="js/specific/page_search.js"></script>
			<!-- PAGE - PAGE ORDER JS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_shops_map.php' ) == true ) { ?>
			<!-- SHOPS MAP - SINGLE JS -->
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFJl-oqf0NECka4ZBhXlOVfeUnLvAa-Yw"></script>
			<script>
				$(document).ready(function() {

					// make a .hover event
					$('.shops_map-sidebar-single-nav-list > li').hover(
						// mouse in
						function () {
							// first we need to know which <div class="marker"></div> we hovered
							var index = $('.shops_map-sidebar-single-nav-list > li').index(this);
							eval('marker'+index).setIcon(highlightedIcon());
						},
						// mouse out
						function () {
							// first we need to know which <div class="marker"></div> we hovered
							var index = $('.shops_map-sidebar-single-nav-list > li').index(this);
							eval('marker'+index).setIcon(normalIcon());
						}

					);

					var map;
					var mapOptions = {
						zoom: 12,
						scrollwheel: true,
						center: new google.maps.LatLng(50.449390, 30.479536),
						disableDefaultUI: true,
						draggable: true,
						styles:
							[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
					};

					// functions that return icons.  Make or find your own markers.
					function normalIcon() {
						return {
							url: 'img/icons/icon-pin.svg',
							anchor: new google.maps.Point(12, 11)
						};
					}
					function highlightedIcon() {
						return {
							url: 'img/icons/icon-pin-hover-01.svg',
							anchor: new google.maps.Point(19, 17)
						};
					}

					// initiate Google maps
					map = new google.maps.Map(document.getElementById('map-wrapper'), mapOptions);

					var marker0 = new google.maps.Marker({
						position: new google.maps.LatLng(50.450813, 30.441457),
						title: 'Roy Robson No. 1',
						map: map,
						icon: normalIcon()
					});

					var marker1 = new google.maps.Marker({
						position: new google.maps.LatLng(50.449276, 30.525668),
						title: 'Roy Robson No. 2',
						map: map,
						icon: normalIcon()
					});

					var marker2 = new google.maps.Marker({
						position: new google.maps.LatLng(50.445057, 30.521960),
						title: 'Roy Robson No. 3',
						map: map,
						icon: normalIcon()
					});

					marker0.addListener('mouseover', function() {
						$('.shops_map-single-map-wrapper').removeClass('visible');
						$('.shops_map-sidebar-single-nav-list > li').removeClass('active');
						$('.shops_map-sidebar-single-nav-list > li').eq(0).addClass('active');
						$('.shops_map-sidebar-single-wrapper').stop().animate({
							scrollTop: $('.shops_map-sidebar-single-wrapper').scrollTop() + $('.shops_map-sidebar-single-nav-list > li.active').position().top
						}, 600);
						this.setIcon({
							url: 'img/icons/icon-pin-hover-01.svg',
							anchor: new google.maps.Point(19, 17)
						})
					});
					marker0.addListener('mouseout', function() {
						$('.shops_map-sidebar-single-nav-list > li').eq(0).removeClass('active');
						this.setIcon({
							url: 'img/icons/icon-pin.svg',
							anchor: new google.maps.Point(12, 11)
						})
					});

					marker1.addListener('mouseover', function() {
						$('.shops_map-single-map-wrapper').removeClass('visible');
						$('.shops_map-sidebar-single-nav-list > li').removeClass('active');
						$('.shops_map-sidebar-single-nav-list > li').eq(1).addClass('active');
						$('.shops_map-sidebar-single-wrapper').stop().animate({
							scrollTop: $('.shops_map-sidebar-single-wrapper').scrollTop() + $('.shops_map-sidebar-single-nav-list > li.active').position().top
						}, 600);
						this.setIcon({
							url: 'img/icons/icon-pin-hover-01.svg',
							anchor: new google.maps.Point(19, 17)
						})
					});
					marker1.addListener('mouseout', function() {
						$('.shops_map-sidebar-single-nav-list > li').eq(1).removeClass('active');
						this.setIcon({
							url: 'img/icons/icon-pin.svg',
							anchor: new google.maps.Point(12, 11)
						})
					});

					marker2.addListener('mouseover', function() {
						$('.shops_map-single-map-wrapper').removeClass('visible');
						$('.shops_map-sidebar-single-nav-list > li').removeClass('active');
						$('.shops_map-sidebar-single-nav-list > li').eq(2).addClass('active');
						$('.shops_map-sidebar-single-wrapper').stop().animate({
							scrollTop: $('.shops_map-sidebar-single-wrapper').scrollTop() + $('.shops_map-sidebar-single-nav-list > li.active').position().top
						}, 600);
						this.setIcon({
							url: 'img/icons/icon-pin-hover-01.svg',
							anchor: new google.maps.Point(19, 17)
						})
					});
					marker2.addListener('mouseout', function() {
						$('.shops_map-sidebar-single-nav-list > li').eq(2).removeClass('active');
						this.setIcon({
							url: 'img/icons/icon-pin.svg',
							anchor: new google.maps.Point(12, 11)
						})
					});

					if ( $(window).width() < 768 ){
						$('.shops_map-sidebar-single-nav-list > li').click(function(event) {
							$('.shops_map-single-map-wrapper').addClass('visible');
							$('.shops_map-sidebar-single-nav-list > li').removeClass('active');
						});
					}
				});
			</script>
			<!-- SHOPS MAP - SINGLE JS (END) -->
		<?php }
	?>
	<!-- SPECIFIC JS (END) -->
</body>
</html>