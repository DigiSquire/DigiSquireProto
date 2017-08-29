/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/
(function ($) {
	'use strict';

	jQuery(document).ready(function () {

		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
		});

		$("#clients-logo").owlCarousel({
			autoPlay: 3000,
			items: 3,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3],
		});

		//Responsive Nav
		$('li.dropdown').find('.fa-angle-down').each(function () {
			$(this).on('click', function () {
				if ($(window).width() < 768) {
					$(this).parent().next().slideToggle();
				}
				return false;
			});
		});

		/* Scroll To Top */

		$(window).scroll(function () {
			if ($(this).scrollTop() >= 500) {
				$('.scroll-to-top').fadeIn();
			} else {
				$('.scroll-to-top').fadeOut();
			}
		});


		$('.scroll-to-top').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

		//Initiat WOW JS
		new WOW().init();
		// portfolio filter--Need to check
		/* Statistics Counter */
		$('.statistics').appear(function() {
			 var counter = $(this).find('.statistics-count');
			 var toCount = counter.data('count');
			 $(counter).countTo({
			 from: 0,
			 to: toCount,
			 speed: 5000,
			 refreshInterval: 50
			 })
			 });

	});

})(jQuery);
