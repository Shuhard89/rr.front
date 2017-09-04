<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Roy Robson</title>
	<!-- MAIN CSS -->
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="fonts/fonts.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/mediaq.css">
	<!-- MAIN CSS (END) -->

	<!-- SPECIFIC CSS -->
	<?php
		$currentpage = $_SERVER['REQUEST_URI'];
		if ( $currentpage == '/' || $currentpage == '/projects/rr/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
			<!-- PAGE - FRONT PAGE ONLY CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<link rel="stylesheet" href="css/jquery.mThumbnailScroller.css">
			<!-- PAGE - FRONT PAGE ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category_products.php' ) == true ) { ?>
			<!-- CATEGORY - PRODUCTS ONLY CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<!-- CATEGORY - PRODUCTS ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_blog_lookbook.php' ) == true ) { ?>
			<!-- SINGLE - BLOG LOOKBOOK ONLY CSS -->
			<link rel="stylesheet" href="css/jquery.mThumbnailScroller.css">
			<!-- SINGLE - BLOG LOOKBOOK ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category_looks.php' ) == true ) { ?>
			<!-- CATEGORY - LOOKS ONLY CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<!-- CATEGORY - LOOKS ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'pa_favourite.php' ) == true ) { ?>
			<!-- PAGE - PA FAVOURITE ONLY CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<!-- PAGE - PA FAVOURITE ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'single_product.php' ) == true ) { ?>
			<!-- PAGE - SINGLE PRODUCT ONLY CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<!-- PAGE - SINGLE PRODUCT ONLY CSS (END) -->
		<?php }
		if ( strpos( $currentpage, 'search.php' ) == true ) { ?>
			<!-- PAGE - PAGE SEARCH CSS -->
			<link rel="stylesheet" href="css/slick.css">
			<!-- PAGE - PAGE SEARCH CSS (END) -->
		<?php }
	?>
	<!-- SPECIFIC CSS (END) -->
</head>
<body>
	<!-- HEADER -->
	<header class="main-header <?php if ( strpos( $currentpage, 'about_brand.php' ) == true ) { echo 'main-header-transparent'; } 
	if ( strpos( $currentpage, 'single_blog_lookbook.php' ) == true 
	|| strpos( $currentpage, 'login.php' ) == true 
	|| strpos( $currentpage, 'restore_password.php' ) == true 
	|| strpos( $currentpage, 'restore_password_step_2.php' ) == true 
	|| strpos( $currentpage, 'register.php' ) == true 
	|| strpos( $currentpage, 'pa_favourite.php' ) == true 
	|| strpos( $currentpage, 'pa_orders_history_list.php' ) == true 
	|| strpos( $currentpage, 'pa_order_details.php' ) == true 
	|| strpos( $currentpage, 'pa_profile.php' ) == true 
	|| strpos( $currentpage, 'pa_profile_add_address.php' ) == true 
	|| strpos( $currentpage, 'response.php' ) == true ) { echo 'main-header-hide'; } ?>"> <!-- Add class to header if this is "About Brand" page or "Single LookBook Blog Post" -->
		<div class="main-upper-header clearfix">
			<span class="header-search-btn" role="button"></span>
			<nav class="header-profile-nav">
				<ul class="clearfix">
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
		<div class="header-nav-wrapper clearfix">
			<a href="index.php" class="header-logo"></a>
			<nav class="header-nav">
				<ul class="clearfix">
					<li>
						<a href="category_products.php">Костюмы</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_products.php">Верхняя одежда</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_products.php">Одежда</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_products.php">Брюки</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_products.php">Обувь</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_products.php">Аксессуары</a>
						<div class="sub-menu-wrapper clearfix">
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Футболки</a>
								</li>
								<li>
									<a href="category_products.php">Поло</a>
								</li>
								<li>
									<a href="category_products.php">Рубашки</a>
								</li>
								<li>
									<a href="category_products.php">Тениски</a>
								</li>
							</ul>
							<ul class="sub-menu-list">
								<li>
									<a href="category_products.php">Кардиганы</a>
								</li>
								<li>
									<a href="category_products.php">Кофты</a>
								</li>
								<li>
									<a href="category_products.php">Свитера</a>
								</li>
								<li>
									<a href="category_products.php">Гольфы</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a href="category_looks.php">Look</a>
					</li>
					<li class="about-brand-link">
						<a href="about_brand.php">О бренде</a>
					</li>
					<li>
						<a href="category_blog.php">Блог</a>
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<div class="mobile-header">
		<a href="index.php" class="mobile-header-logo">
			<img src="img/logo.svg" alt="Roy Robson">
		</a>
		<span role="button" class="open-header-menu-button">
			<span></span>
			<span></span>
			<span></span>
		</span>
		<a href="#" class="mobile-header-btn cart"></a>
		<a href="#" class="mobile-header-btn search"></a>
	</div>
	<div class="mobile-header-menu-sidebar">
		<ul class="mobile-header-menu-list">
			<li>
				<a href="category_products.php">Костюмы</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_products.php">Верхняя одежда</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_products.php">Одежда</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_products.php">Брюки</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_products.php">Обувь</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_products.php">Аксессуары</a>
				<ul>
					<li>
						<a href="category_products.php">Футболки</a>
					</li>
					<li>
						<a href="category_products.php">Поло</a>
					</li>
					<li>
						<a href="category_products.php">Кардиганы</a>
					</li>
					<li>
						<a href="category_products.php">Рубашки</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="category_looks.php">Look</a>
			</li>
			<li>
				<a href="about_brand.php">О бренде</a>
			</li>
			<li>
				<a href="category_blog.php">Блог</a>
			</li>
		</ul>
		<ul class="mobile-menu-user-links">
			<li class="mobile-profile-link">
				<a href="login.php">Личный кабинет</a>
			</li>
			<li class="mobile-favourite-link">
				<a href="pa_favourite.php">Избранное</a>
			</li>
		</ul>
	</div>
	<!-- HEADER (END) -->