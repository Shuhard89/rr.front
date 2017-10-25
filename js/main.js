$(document).ready(function() {

	// Header submenu
	function headerSubmenu(){
		var $header = $('.header-nav-wrapper'),
			$upHeader = $('.main-upper-header'),
			$navLink = $('.header-nav > ul > li > a'),
			$subMenu = $('.sub-menu-wrapper'),
			$headerAndSubmenu = $('.header-nav-wrapper, .sub-menu-wrapper'),
			$darkOverlay = $('.page-dark-overlay');

		// Open submenu
		$navLink.on('mouseenter', function() {
			$subMenu.removeClass('visible');
			$navLink.removeClass('active');
			$(this).addClass('active');
			$(this).next('.sub-menu-wrapper').addClass('visible');
			$darkOverlay.addClass('visible');
		});

		// Close submenu
		$headerAndSubmenu.on('mouseleave', function() {
			$subMenu.removeClass('visible');
			$darkOverlay.removeClass('visible');
		});

		// Remove styles
		$subMenu.on('mouseleave', function() {
			$navLink.removeClass('active');
		});
		$navLink.on('mouseleave', function() {
			if ( !$(this).next($subMenu).length > 0 ){
				$navLink.removeClass('active');
			}
		});

		$upHeader.on('mouseenter', function() {
			$navLink.removeClass('active');
		});
	};
	
	headerSubmenu();

	// Animations on scroll
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = (element_top_position + element_height);

	    //check to see if this current container is within viewport
	    if ((element_bottom_position >= window_top_position) &&
	        (element_top_position <= window_bottom_position)) {
	      		$element.addClass('in-view');
	    } else {
	      // $element.removeClass('in-view');
	    }
	  });
	}

	if ( $(window).width() > 767 ){
		check_if_in_view();

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
	}

	// Sidebar Search
	function sidebarSearch(){
		var $searchInput = $('.modal-search-form input'),
			$searchResultContainer = $('.modal-search-result-wrapper'),
			$openBtn = $('.header-search-btn, .header-search-link > a, .mobile-header-btn.search'),
			$searchModal = $('.modal-search'),
			$pageOverlay = $('.search-modal-dark-overlay');

		// Open modal
		$openBtn.on('click', function(event) {
			event.preventDefault();
			if ( !$searchModal.hasClass('visible') ){
				$searchModal.addClass('visible');
				$pageOverlay.addClass('visible');

				$('.open-header-menu-button').removeClass('opened');
				$('.mobile-header-menu-sidebar').removeClass('visible');
				$('html').addClass('overflow-hidden');
			}
		});

		// Close modal
		$pageOverlay.on('click', function() {
			$searchModal.removeClass('visible');
			$pageOverlay.removeClass('visible');
			$('html').removeClass('overflow-hidden');
		});

		$searchInput.on('keyup', function() {
			if ( $(this).val() != '' ){
				$(this).addClass('not-empty');
			} else {
				$(this).removeClass('not-empty');
			}
			// AJAX HERE (remove example below)
			if ( 'костюмы'.indexOf( $(this).val().toLowerCase() ) > -1 && $(this).val().length > 2 && $(this).val() != '' ){
				$searchResultContainer.html('');
				$searchResultContainer.html('<div class="modal-search-result-categories-container"><h6>Категории</h6><ul><li><a href="category_products.php">Костюмы</a></li><li><a href="category_products.php">Костюмы / Бизнес костюмы</a></li><li><a href="category_products.php">Костюмы / Премиум костюмы</a></li><li><a href="category_products.php">Костюмы / Вечерние костюмы</a></li><li><a href="category_products.php">Костюмы / Премиум костюмы</a></li></ul><p class="modal-search-result-items-found">По вашему запросу найдено <span>158 товаров</span></p><a href="search.php" class="modal-search-result-full-link">Показать все</a></div>');
			}
			else if ( 'темно'.indexOf( $(this).val().toLowerCase() ) > -1 && $(this).val().length > 2 && $(this).val() != '' ){
				$searchResultContainer.html('');
				$searchResultContainer.html('<div class="modal-search-result-categories-container"><ul class="modal-shopping-cart-list"><li><div class="modal-shopping-cart-item-preview"><a href="single_product.php"><img src="img/placeholder_content/products/thumbnails/suit_01.png" alt="Title"></a></div><div class="modal-shopping-cart-item-info"><a href="category_products.php" class="modal-shopping-cart-item-category-link">Костюмы Roy Robson</a><h6><a href="single_product.php">Темно-серый костюм</a></h6><div class="modal-shopping-cart-item-price-del-wrapper"><span class="modal-shopping-cart-item-attr-price">45 000 ГРН</span><span class="modal-shopping-cart-item-attr-old-price">75 000 ГРН</span></div></div></li><li><div class="modal-shopping-cart-item-preview"><a href="single_product.php"><img src="img/placeholder_content/category_looks/complects/shoes.png" alt="Title"></a></div><div class="modal-shopping-cart-item-info"><a href="category_products.php" class="modal-shopping-cart-item-category-link">Туфли Roy Robson</a><h6><a href="single_product.php">Черные классические туфли</a></h6><div class="modal-shopping-cart-item-price-del-wrapper"><span class="modal-shopping-cart-item-attr-price">19 000 ГРН</span></div></div></li></ul><p class="modal-search-result-items-found">По вашему запросу найдено <span>158 товаров</span></p><a href="search.php" class="modal-search-result-full-link">Показать все</a></div>');

			}
			else if ( $(this).val().length < 3 ){
				$searchResultContainer.html('');
			}
			else if ( 'костюмы'.indexOf( $(this).val().toLowerCase() ) == -1 ){
				$searchResultContainer.html('<p class="modal-search-result-no-items">К сожалению, мы ничего не нашли по вашему запросу</p>');
			}
		});
	};

	sidebarSearch();

	// Help pages sidebar menu anchors
	function helpSidebarAnchors(){
		var $sidebarMenuActiveItem = $('.help-sidebar-nav-list > li.active'),
			activeItemPos = $sidebarMenuActiveItem;

		$('.help-sidebar-wrapper').scrollTop($('.help-sidebar-wrapper').scrollTop() + $sidebarMenuActiveItem.position().top - $('.help-sidebar-header').outerHeight());
	};

	if ( $('.help-sidebar-nav-list > li').length > 0 && $(window).width() > 767 ){
		helpSidebarAnchors();
	} else if ( $('.help-sidebar-nav-list > li').length > 0 && $(window).width() < 768 ) {
		$('.pa-order-details-back-link.help-sidebar-btn').click(function(event) {
			event.preventDefault();
			$('.help-sidebar-wrapper').addClass('visible');
			$('html').addClass('overflow-hidden');
		});
	}

	// Fast View Modal
	function fastViewModal(){
		var $fastViewBtn = $('.product-quick-view-btn'),
			$modal = $('.modal-fast-view'),
			$modalCloseBtn = $('.modal-fast-view-close-btn'),
			$overlay = $('.search-modal-dark-overlay');

		// Open modal and init slider
		$fastViewBtn.on('click', function(event) {
			event.preventDefault();

			// Form product count
			$('.single-product-field-count span').on('click', function(event) {
				event.preventDefault();

				var count = +$('.single-product-field-count input').val();
				
				if ( $(this).hasClass('count-plus') ){
					if ( count > 0 ){
						$('.single-product-field-count input').val(count+1);
					}
				} else if ( $(this).hasClass('count-minus') ) {
					if ( count > 1 ){
						$('.single-product-field-count input').val(count-1);
					}
				}
			});
			
			$modal.addClass('visible');
			$overlay.addClass('visible');
			$('.modal-fast-view-content').scrollTop(0);

			var $sliderList = $('.fast-view-image-slider-list'),
				$sliderListItem = $sliderList.children('li'),
				sliderListItemsNumber = $sliderListItem.length,
				$controls = $('.fast-view-image-slider-control');

			// Build slider
			$sliderListItem.removeClass('active');
			$sliderListItem.eq(0).addClass('active');
			$sliderList.css('transform', 'translateX(0)');

			$controls.on('click', function(event) {
				event.preventDefault();

				var $activeSlide = $sliderList.find('li.active'),
					activeSlideIndex = $activeSlide.index();
				
				if ( $(this).hasClass('right') ){
					if ( $activeSlide.next('li').length > 0 ){
						$sliderListItem.removeClass('active');
						$sliderListItem.eq(activeSlideIndex+1).addClass('active');
						$sliderList.css('transform', 'translateX(-' + (activeSlideIndex+1)*480 + 'rem)');
					} else {
						$sliderListItem.removeClass('active');
						$sliderListItem.eq(0).addClass('active');
						$sliderList.css('transform', 'translateX(0)');
					}
				} else if ( $(this).hasClass('left') ) {
					if ( $activeSlide.prev('li').length > 0 ){
						$sliderListItem.removeClass('active');
						$sliderListItem.eq(activeSlideIndex-1).addClass('active');
						$sliderList.css('transform', 'translateX(-' + (activeSlideIndex-1)*480 + 'rem)');
					} else {
						$sliderListItem.removeClass('active');
						$sliderListItem.eq(sliderListItemsNumber-1).addClass('active');
						$sliderList.css('transform', 'translateX(-' + (sliderListItemsNumber-1)*480 + 'rem)');
					}
				}
			});
		});

		// Close modal
		$('.modal-fast-view-close-btn, .search-modal-dark-overlay').on('click', function(event) {
			event.preventDefault();
			
			$modal.removeClass('visible');
			$overlay.removeClass('visible');
		});
	};

	fastViewModal();

	// Shopping Cart Modal
	function shoppingCartModal(){
		$cartBtn = $('.header-cart-link a, .mobile-header-btn.cart'),
		$modal = $('.modal-shopping-cart'),
		$closeBtn = $('.modal-shopping-cart-close-btn'),
		$overlay = $('.search-modal-dark-overlay');

		// Open modal
		$cartBtn.on('click', function(event) {
			event.preventDefault();
			
			$modal.addClass('visible');
			$overlay.addClass('visible');
			$('.modal-shopping-cart-content').scrollTop(0);

			$('.open-header-menu-button').removeClass('opened');
			$('.mobile-header-menu-sidebar').removeClass('visible');
			$('html').addClass('overflow-hidden');
		});

		// Close modal
		$('.modal-shopping-cart-close-btn, .search-modal-dark-overlay').on('click', function(event) {
			event.preventDefault();
			
			$modal.removeClass('visible');
			$overlay.removeClass('visible');
			$('html').removeClass('overflow-hidden');
		});
	};

	shoppingCartModal();

	// User profile mobile center menu
	if ( $('.pa-mobile-header').length > 0 ){
		var maxScrollLeft = $(".pa-mobile-header").scrollLeft('.pa-mobile-header').prop('scrollWidth') - $(".pa-mobile-header").width();
		var left = $('.pa-mobile-header > ul > li.active').offset().left
		var width = $(".pa-mobile-header").width();
		var diff = left - width/2
		$(".pa-mobile-header").scrollLeft($(".pa-mobile-header").scrollLeft()+diff)
	}

	// Mobile menu sidebar
	if ( $(window).width() < 768 ){
		function mobileMenu(){
			var $menuSidebar = $('.mobile-header-menu-sidebar'),
				$burger = $('.open-header-menu-button'),
				$menuLink = $('.mobile-header-menu-list > li > a');

			$burger.click(function(event) {
				if ( $(this).hasClass('opened') ){
					$(this).removeClass('opened');
					$menuSidebar.removeClass('visible');
					$('html').removeClass('overflow-hidden');
				} else {
					$(this).addClass('opened');
					$menuSidebar.addClass('visible');
					$('html').addClass('overflow-hidden');
				}

			});

			$menuLink.click(function(event) {
				if ( $(this).hasClass('opened') ){
					event.preventDefault();
					$(this).removeClass('opened');
					$(this).next('ul').slideUp('slow');
				} else if ( $(this).next('ul').length > 0 ) {
					event.preventDefault();
					$(this).addClass('opened');
					$(this).next('ul').slideDown('slow');
				}
			});
		};

		mobileMenu();
	}

	// Object fit polyfill
	objectFitImages();

	// Basic modal object
	var basicModal = {
		modal: 			$('.modal-basic'),
		modalHeading: 			$('.basic-modal-heading'),
		modalText: 			$('.basic-modal-text'),
		closeBtn: 		$('.close-basic-modal-btn'),
		html: 			$('html'),
		openBasicModal: function(){
			this.modal.addClass('visible');
			this.html.addClass('overflow-hidden');
		},
		closeBasicModal: function(){
			this.modal.removeClass('visible');
			this.html.removeClass('overflow-hidden');
		}
	};

	// Close modal
	basicModal.closeBtn.on('click', function(event) {
		event.preventDefault();
		basicModal.closeBasicModal();
	});

	// Open modal and change content
	$('.add-to-favourites, .add-to-cart').on('click', function(event) {
		event.preventDefault();

		var thisModalHeadingContent = $(this).attr('data-modal-heading'),
			thisModalTextContent = $(this).attr('data-modal-text');

		basicModal.modalHeading.html(thisModalHeadingContent);
		basicModal.modalText.html(thisModalTextContent);
		basicModal.openBasicModal();
	});

	// jQuery AJAX progress bar
	$(document).ajaxStart( function () {
		if ($("#loadingbar").length === 0) {
			$("body").append("<div id='loadingbar'></div>")
			$("#loadingbar").addClass("waiting").append($("<dt/><dd/>"));
			$("#loadingbar").width((50 + Math.random() * 30) + "%");
		}
	});

	$(document).ajaxComplete(function () {
		$("#loadingbar").width("101%").delay(200).fadeOut(400, function () {
			$(this).remove();
		});
	})
});