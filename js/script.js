(function($) {
	
	"use strict";
    
	
	
	//1.Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}	
	
	//2.Update header style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			if (windowpos >= 250) {
				$('.main-header').addClass('fixed-header');
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.main-header').removeClass('fixed-header');
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}	
	headerStyle();	
	
	//3.Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').click('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
		
		
		//Disable dropdown parent link
		$('.navigation li.dropdown > a').click('click', function(e) {
			e.preventDefault();
		});
	}

    
//====Main menu===
function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').click(function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

}



//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}



//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").click(function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

if ($('.our-history .bxslider').length) {
	$('.our-history .bxslider').bxSlider({
        nextSelector: '.our-history #slider-next',
        prevSelector: '.our-history #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        minSlides:'3',
        maxSlides:'3',
        mode: 'vertical',
        auto: 'true',
        speed: '3000',
        pagerCustom: '.our-history .slider-pager .thumb-box'
    });
    }
    
	  //13. Countdown Timer
	if ($('.countdown').length) {
	    $('.countdown').countdown('2019/1/1', function (event) {
	        var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><br>Days</div> ' + '<div class="counter-column"><span class="count">%H</span><span class="colon"></span><br>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="colon"></span><br>Mutines</div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="colon"></span><br>Seconds</div>'));
	    });
	}

    
	//4.Main BX-Slider
	if($('.events-slide').length){
		$('.events-slide').bxSlider({
			auto:true,
			mode:'vertical',
			nextSelector: '.events-section #slider-next',
	        prevSelector: '.events-section #slider-prev',
	        nextText: '<i class="fa fa-angle-right"></i>',
	        prevText: '<i class="fa fa-angle-left"></i>',
			maxSlides: 3,
			minSlides: 3,
			moveSlides: 1,
			pause: 5000,
			speed: 700,
			pagerCustom: '.events-section .slider-pager .thumb-box'
		});
	}	

	//5.Search Toggle Btn
    if($('.toggle-search').length){
        $('.toggle-search').click('click', function() {
            $('.header-search').slideToggle(300);
        });

    }	
		//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}	
	
	//7.Mixitup Gallery
	if($('.mixitup-gallery').length){
		$('.mixitup-gallery').mixItUp({});
	}	
	
	//8.Sortable Masonary with Filters
	function enableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : 0 
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').click(function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.bind('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.click('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}	
	enableMasonry();

   //9.Gallery masonary style
	if ($('.item-container').length) {
	   $('.item-container').isotope({
	   layoutMode:'masonry'
	   });
	}	

	//10.PieChart RoundCircle
	function expertizeRoundCircle () {
		var rounderContainer = $('.piechart');
		if (rounderContainer.length) {
			rounderContainer.each(function () {
				var Self = $(this);
				var value = Self.data('value');
				var size = Self.parent().width();
				var color = Self.data('fg-color');

				Self.find('span').each(function () {
					var expertCount = $(this);
					expertCount.appear(function () {
						expertCount.countTo({
							from: 1,
							to: value*100,
							speed: 3000
						});
					});

				});
				Self.appear(function () {					
					Self.circleProgress({
						value: value,
						size: 142,
						thickness: 10,
						emptyFill: '#24c4f4',
						animation: {
							duration: 3000
						},
						fill: {
							color: color
						}
					});
				});
			});
		};
	}

	//11.progressBarConfig
	function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 100);

	        Self.find('span.value').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 100
	        });
	      });
	    })
	  }
	}

    //12.Fact Counter
	function CounterNumberChanger () {
	 var timer = $('.timer');
	 if(timer.length) {
	  timer.appear(function () {
	   timer.countTo();
	  })
	 }
	}

	// Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}

	//14.Accordion Box
	if ($('.accordion-box').length) {
        $('.accordion-box .acc-btn').click('click', function() {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-btn').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }
    
    //Testimonials Slider
 if ($('.testimonial-slider').length) {
  $('.testimonial-slider').owlCarousel({
   loop:true,
   margin:75,
   nav:true,
   smartSpeed: 3000,
   autoplay: 4000,
   navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
   responsive:{
    0:{
     items:1
    },
    400:{
     items:1
    },
    600:{
     items:1
    },
    800:{
     items:1
    },
    1200:{
     items:1
    }
   }
  });      
 }
	
	//15.Sponsors Slider
	if ($('.sponsors-slider').length) {
		$('.sponsors-slider').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 400,
			autoplay: 4000,
			navText: [],
			responsive:{
				300:{
					items:1
				},
				400:{
					items:1
				},
				800:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}	

	//16.Four Column Carousel Slider
	if ($('.four-column-carousel').length) {
		$('.four-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:0
				},
				1070:{
					items:0
				}
			}
		});    		
	}
	
    //Three Column Slider
	if ($('.column-carousel.three-column').length) {
		$('.column-carousel.three-column').owlCarousel({
			loop:true,
			margin:15,
			nav:true,
			autoplayHoverPause:false,
			autoplay: 5000,
			smartSpeed: 700,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:3
				},
				1100:{
					items:3
				}
			}
		});    		
	}
    
	
	//18.Two Column Carousel Slider
	if ($('.two-column-carousel').length) {
		$('.two-column-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				1200:{
					items:2
				}
			}
		});    		
	}	
	
	//19.Single Item Slider
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 4000,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}	

	//20.Jquery Tabs Box
	if($('.tabs-box').length){
		//Tabs
		$('.tabs-box .tab-buttons .tab-btn').click('click', function(e) {
			
			e.preventDefault();
			var target = $($(this).attr('href'));
			
			target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
			$(this).addClass('active-btn');
			target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
			target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
			$(target).fadeIn(300);
			$(target).addClass('active-tab');
		});		
	}
	
	//21.Tabbed Floor Plans Function
	if($('.tabbed-floor-plans .floor-btn').length){
		
		//Floor Details Hide Show
		$('.tabbed-floor-plans .floor-btn').click('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('.tabbed-floor-plans .floor-btn').removeClass('active');
			$(this).addClass('active');
			$('.tabbed-floor-plans .floor-details').removeClass('collapsed');
			$('.tabbed-floor-plans .floor-details ').fadeOut(0);
			$(target).fadeIn(300);
		});		
	}
	
	//22.LightBox / Fancybox
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			openEffect  : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}	
	
	//23.videoFancybox
	function videoFancybox () {
	 if ($('.video-fancybox').length) {
	  $('.video-fancybox').click('click', function () {
	   $(this).fancybox({
	    'padding' : 0,
	    'autoScale' : false, 
	    'transitionIn' : 'none', 
	    'transitionOut' : 'none', 
	    'title' : this.title, 
	    'width' : 640, 
	    'height' : 385, 
	    'href' : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'), 
	    'type' : 'swf', 
	    'swf' : { 'wmode' : 'transparent', 'allowfullscreen' : 'true' }
	   });
	   return false;
	  })
	 };
	}
	
	
	//25.Gallery Popup Hide / Show
	if($('.has-gallery-popup').length){
		
		//Show Gallery Popup
		$('.has-gallery-popup').click('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('href'));
			$('body').addClass('popup-visible');
			$(target).addClass('now-visible');
		});
		
		//Show Gallery Popup
		$('.gallery-box .btn-close,.gallery-box .bg-fade-layer').click('click', function() {
			$('.gallery-box').removeClass('now-visible');
			$('body').removeClass('popup-visible');
		});
		
	}

	//26.Gallery Popup Slider / Vertical Gallery Slider
	if($('.vertical-slider').length) {
		var slider = new MasterSlider();
		slider.setup('masterslider' , {
			width:850,
			height:470,
			space:10,
			view:'basic',
			dir:'v'
		});
		slider.control('arrows');	
		slider.control('scrollbar' , {dir:'v'});	
		slider.control('circletimer' , {color:"#FFFFFF" , stroke:9});
		slider.control('thumblist' , {autohide:false ,dir:'v'});
	}	
	
	//27.Appointment Calendar
	if($('#appoinment_calendar').length) {
		$('#appoinment_calendar').monthly();
	}
	
	//28.Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").click('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}

	//29.Select menu 
	function selectDropdown() {
	    if ($(".selectmenu").length) {
	        $(".selectmenu").selectmenu();

	        var changeSelectMenu = function(event, item) {
	            $(this).trigger('change', item);
	        };
	        $(".selectmenu").selectmenu({ change: changeSelectMenu });
	    };
	}	
	
	

	//31.donate popup
	function donatepopup() {	
		if($('#donate-popup').length){
			
			//Show Popup
			$('.donate-box-btn').click('click', function() {
				$('#donate-popup').addClass('popup-visible');
			});
			
			//Hide Popup
			$('.close-donate').click('click', function() {
				$('#donate-popup').removeClass('popup-visible');
			});
		}
	}

	
	//32.Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

//Main BX-Slider
 if($('.events-slide').length){
  $('.events-slide').bxSlider({

   auto:true,
   mode:'vertical',
   nextSelector: '#slider-next',
   nextText: '',
   navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
   maxSlides: 3,
   minSlides: 3,
   moveSlides: 1,
   pause: 5000,
   speed: 700,
   pager: false
  });
 }
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	jQuery(document).on('ready', function () {
		(function ($) {
			// add your functions
			headerStyle();
			progressBarConfig();
			selectDropdown();
			videoFancybox();
			donatepopup()
			CounterNumberChanger();
			expertizeRoundCircle();
			enableMasonry();
		})(jQuery);
	});
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		CounterNumberChanger();
        factCounter();
        stickyHeader()
	});
	
/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		expertizeRoundCircle();
	});

	

})(window.jQuery);