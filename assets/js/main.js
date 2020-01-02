$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -61, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('show')){
			$('.navbar-collapse').removeClass('show');
		}
		
	});
	
	/* ======= Fixed Header animation ======= */ 
        
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0 ) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');             
         }
    }); 

    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    
    $('#bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 6000
    });

    
    /* ===== Bootstrap DateTime Picker ==== */
    
    $('.make-datepicker').datetimepicker({
        format: 'MMM Do YYYY',
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar-o',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right'
        },
        defaultDate: new Date()
    });
    
    $('.make-timepicker').datetimepicker({
        format: 'LT',
        stepping: 15,
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar-o',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right'
        }
    });

    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".reserve-form").validate({
		messages: {
		    date: {
				required: 'Please enter a date' //You can customise this message
			},
			time: {
				required: 'Please enter a time' //You can customise this message
			},
		    name: {
    			required: 'Please enter your name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},
			phone: {
				required: 'Please enter your phone number' //You can customise this message
			}
		}
	});
	
	$(".subscribe-form").validate({
		messages: {
			email: {
				required: 'Please enter your email' //You can customise this message
			}
		}
	});
	
	/* ====== Fullscreen Modal ====== */
	// .modal-backdrop classes
    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });
	
	   

});