$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$( '.c p' ).toggleClass( 'ab' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$( '.d p' ).toggleClass( 'ab' );
	});
		$(".right> li> .font2").click(function(){
		$(this).next().slideToggle();
		$( '.e p' ).toggleClass( 'ab' );
	});
		$(".right> li> .font3").click(function(){
		$(this).next().slideToggle();
		$( '.f p' ).toggleClass( 'ab' );
	});
		$(".right> li> .font4").click(function(){
		$(this).next().slideToggle();
		$( '.g p' ).toggleClass( 'ab' );
	});
		$(".right> li> .font5").click(function(){
		$(this).next().slideToggle();
		$( '.h p' ).toggleClass( 'ab' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

































































