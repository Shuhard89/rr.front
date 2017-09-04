	<div class="help-sidebar-wrapper">
		<h2 class="help-sidebar-header">Помощь</h2>
		<nav>
			<ul class="help-sidebar-nav-list">
				<li class="<?php if ( strpos( $currentpage, 'help_order_status.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_order_status.php">Статус заказа</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_shipment.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_shipment.php">Доставка</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_payment.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_payment.php">Оплата</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_exchange_refund.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_exchange_refund.php">Обмен и возврат</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_size_charts.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_size_charts.php">Таблица размеров</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_privacy_policy.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_privacy_policy.php">Политика конфиденциальности</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_terms_of_use.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_terms_of_use.php">Услови использования</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_for_partners.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_for_partners.php">Партнерам</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'category_vacancies.php' ) == true || strpos( $currentpage, 'single_vacancy.php' ) == true ){ echo 'active'; } ?>">
					<a href="category_vacancies.php">Вакансии</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_feedback.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_feedback.php">Оставить отзыв</a>
				</li>
				<li class="<?php if ( strpos( $currentpage, 'help_contact_us.php' ) == true ){ echo 'active'; } ?>">
					<a href="help_contact_us.php">Связаться с нами</a>
				</li>
			</ul>
		</nav>
	</div>