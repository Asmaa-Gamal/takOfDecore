

$('.grid-item').click(function(){
	
$('.grid-view').show();
	
});















// init Isotope
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid .col-md-4',
  percentPosition: true,

  
});
// filter items on button click
$('.filter-button-group button').click( function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


/*start counter*/
	
 $('.timer').countTo({
    from: 1,
    to: 100,
    speed: 2000,
    refreshInterval: 50,
    
  });


/*$(".nav-tabs a li").click(function(){
  $(this).next().css("backgroundColor","gray"); 
$(".nav-tabs a li")
		.not($(this).next()).css("backgroundColor","white");
});*/



/*$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
});
*/
/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});







var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

