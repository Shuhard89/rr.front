<div class="page-wrapper help-page-wrapper">
	<!-- HELP SIDEBAR -->
	<?php include 'templates/pages/help/help_sidebar.php'; ?>
	<main class="help_default-content-wrapper">
		<div class="clearfix">
			<a href="#" class="pa-order-details-back-link help-sidebar-btn">Назад</a>
		</div>
		<article>
			<h1>Оставьте отзыв о roy robson</h1>
			<p class="feedback-text">Команда Roy Robson всегда открыта к вашим пожеланиям и замечаниям. Мы всегда стараемся удовлетворить желания нашего клиента, но также мы открыты к тому, чтобы вы подсказали нам как мы можем стать лучше.</p>
			<form action="#" method="POST" class="help-form">
				<div class="help-form-input-wrapper">
					<input type="text" name="user-name" id="user-name">
					<label for="user-name">Имя *</label>
				</div>
				<div class="help-form-input-wrapper">
					<input type="text" name="user-last-name" id="user-last-name">
					<label for="user-last-name">Фамилия *</label>
				</div>
				<div class="help-form-input-wrapper">
					<input type="email" name="user-email" id="user-email">
					<label for="user-email">Email *</label>
				</div>
				<div class="help-form-input-wrapper">
					<input type="tel" name="user-phone" id="user-phone">
					<label for="user-phone">Телефон *</label>
				</div>
				<div class="help-form-textarea-wrapper">
					<textarea name="user-message" id="user-message"></textarea>
					<label for="user-message">Ваш отзыв *</label>
				</div>
				<div class="help-form-sbmt-wrapper clearfix">
					<button type="submit">Отправить</button>
				</div>
			</form>
		</article>
	</main>
</div>
<div class="feedback-dark-overlay"></div>
<div class="feedback-modal-succes-msg">
	<div class="feedback-modal-succes-msg-block">
		<h6>Ваш отзыв отправлен</h6>
		<p>Благодарим вас за обращение в нашу компанию. В ближайшее время мы ответим на ваш запрос.</p>
	</div>
</div>