jQuery( document ).ready( function( $ ){

	// Intro size setup

	setupIntro(); // On ready, resize intro

	$( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );		
		var titleBox = $( '.info').find('.container');
		$('.info').find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 2) + 'px' );
	}


	// Making navigation sticky on scroll

	$( '#nav' ).sticky( { topSpacing:0 });
	$( '#nav ul' ).onePageNav( { scrollSpeed: 400 } );

	$(window).scroll(function(){
		if($(window).scrollTop() < $(window).height()/2) {
			$('#nav').find('li').removeClass('current');
		}
	});
	
	// Full background image
	$( '.backstretch' ).find('.info').backstretch('static/images/backstretch.jpg');

	// Toggle navBar
	$("#navbar-toggle").on('click', toggleNavBar);

	function toggleNavBar(){		
		$('#nav').toggleClass('nav--show');
	}
});