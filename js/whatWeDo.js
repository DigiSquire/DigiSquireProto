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
			items: 5,
			itemsDesktop: [1199, 5],
			itemsDesktopSmall: [979, 5],
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


		//Initiat WOW JS
		new WOW().init();
		// portfolio filter--Need to check


	});

})(jQuery);
