/*
    Author : DigiSquire Team
    Website : www.digisquite.co
    Support : www.digisquite.co
*/

/*
   Table Of Content

   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Testimonial Carousel/Slider
   7. Statistics Counter
   8. Google Map
*/


(function ($) {
	'use strict';

	jQuery(document).ready(function () {

		/* Preloader */
		$(window).on('load', function () {
			$('body').addClass('loaded');
		});
		//  Script to Activate the Carousel
		$('.carousel').carousel({
			interval: 6000, //changes the speed
			pause: "true"
		})

		/* Smooth Scroll */

		// $('a.smoth-scroll').on("click", function (e) {
		//     var anchor = $(this);
		//     $('html, body').stop().animate({
		//         scrollTop: $(anchor.attr('href')).offset().top - 50
		//     }, 1000);
		//     e.preventDefault();
		// });


		/* Scroll Naviagation Background Change with Sticky Navigation */

		// $(window).on('scroll', function () {
		//     if ($(window).scrollTop() > 100) {
		//         $('.header-top-area').addClass('navigation-background');
		//     } else {
		//         $('.header-top-area').removeClass('navigation-background');
		//     }
		// });

		/* Mobile Navigation Hide or Collapse on Click */

		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});
		$('body').scrollspy({
			target: '.navbar-collapse',
			offset: 195

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

		/* Testimonial Carousel/Slider */

		// $(".testimonial-carousel-list").owlCarousel({
		//     items: 1,
		//     autoPlay: true,
		//     stopOnHover: false,
		//     navigation: true,
		//     navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
		//     itemsDesktop: [1199, 1],
		//     itemsDesktopSmall: [980, 1],
		//     itemsTablet: [768, 1],
		//     itemsTabletSmall: false,
		//     itemsMobile: [479, 1],
		//     autoHeight: true,
		//     pagination: false,
		//     transitionStyle : "backSlide"
		// });


		/* Statistics Counter */

		// $('.statistics').appear(function() {
		//    var counter = $(this).find('.statistics-count');
		//    var toCount = counter.data('count');
		//
		//    $(counter).countTo({
		//    from: 0,
		//    to: toCount,
		//    speed: 5000,
		//    refreshInterval: 50
		//    })
		//    });


		/* Google Map */

		//  $('#my-address').gMap({
		//     zoom: 5,
		//     scrollwheel: true,
		//     maptype: 'ROADMAP',
		//     markers:[
		//     {
		//     address: "New York",  /* You can change your address from here */
		//     html: "<b>Address</b>: <br> Area-2, Rose Area, New York, U.S.A.",   /* You can change display address text from here */
		//     popup: true
		//     }
		//     ]
		//     });


	});

})(jQuery);