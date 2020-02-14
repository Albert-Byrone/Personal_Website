jQuery(window).on('load', function() {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	// Document on load.
	$(function(){
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
	});







	    // HIDE PRELOADER
		$(".preloader").addClass("hide-preloader");   
    
		// SHOW/ANIMATE ANIMATION CONTAINER
		setTimeout(function(){
	
			$("#intro .animation-container").each(function() {
	
				var e = $(this);
	
				setTimeout(function(){
	
					e.addClass("run-animation");
	
				}, e.data("animation-delay") );
	
			});
	
		}, 700 );
	
		
	});
	
	
	jQuery(document).ready(function($) {
		"use strict";
		
		
		// SMOOTH SCROLL FOR SAME PAGE LINKS
		$(document).on('click', 'a.smooth-scroll', function(event) {
			
			event.preventDefault();
	
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top - 80
			}, 500);
			
		});
		
		
		// SCROLL REVEAL SETUP
		window.sr = ScrollReveal();
		sr.reveal(".scroll-animated-from-right", { 
			duration: 600,
			delay: 0,
			origin: "right",
			rotate: { x: 0, y: 0, z: 0 },
			opacity: 0,
			distance: "20vh",
			viewFactor: 0.4,
			scale: 1,
		});
		
		
		// AJAX CONTACT FORM SUBMIT
		$("#contact-form").submit(function(e) {
	
			e.preventDefault();
			var postdata = $(this).serialize();
	
			$.ajax({
	
				type: "POST",
				url: "assets/php/contact.php",
				data: postdata,
				dataType: "json",
				success: function(json) {
	
					$("#contact-form input, #contact-form textarea").removeClass("error");
	
					setTimeout(function(){
	
						if (json.nameMessage !== "") {
	
							$("#contact-form-name").addClass("error");
	
						}
	
						if (json.emailMessage !== "") {
	
							$("#contact-form-email").addClass("error");
	
						}
	
						if (json.messageMessage !== "") {
	
							$("#contact-form-message").addClass("error");
	
						}
	
					}, 10);
	
					if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {
	
						$("#contact-form.error input, #contact-form.error textarea").removeClass("error");
						$('#contact-form').addClass("success");
						$('#contact-form textarea, #contact-form input').attr("placeholder","");
						$('#contact-form input, #contact-form button, #contact-form textarea').val('').prop('disabled', true);
	
					}
	
				}
	
			});
	
		});
	


}());




