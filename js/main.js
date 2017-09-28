$(document).ready(function(){

// --------------------------------------------------
// Botao tela grande para trocar a língua para Inglês
// --------------------------------------------------
	$('.botao-visivel-en').on('click', function(){
		$('.pt').css({'display':'none'});
		$('.en').css({'display': 'inline-block'});
});

// --------------------------------------------------
// Botao tela grande para trocar a língua para Portuguës
// --------------------------------------------------
	$('.botao-visivel-pt').on('click', function(){
		$('.pt').css({'display':'inline-block'});
		$('.en').css({'display': 'none'});
});

// --------------------------------------------------
// Botao tela pequena para trocar a língua para Inglês
// --------------------------------------------------
	$('.botao-cel-en').on('click', function(){
		$('.pt').css({'display':'none'});
		$('.en').css({'display': 'inline-block'});
});

// --------------------------------------------------
// Botao tela pequena para trocar a língua para Porutuguês
// --------------------------------------------------
	$('.botao-cel-pt').on('click', function(){
		$('.pt').css({'display':'inline-block'});
		$('.en').css({'display': 'none'});
});

// --------------------------------------------------
// Crescer as barras de habilidades
// --------------------------------------------------

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=1600) {
				$('.barra').eq(0).children().animate({
				'width': $('.barra').eq(0).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=500){
				$('.barra').eq(0).children().animate({
				'width': $('.barra').eq(0).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=1700) {
				$('.barra').eq(1).children().animate({
				'width': $('.barra').eq(1).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=550){
				$('.barra').eq(1).children().animate({
				'width': $('.barra').eq(1).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=1800) {
				$('.barra').eq(2).children().animate({
				'width': $('.barra').eq(2).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=600){
				$('.barra').eq(2).children().animate({
				'width': $('.barra').eq(2).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=1900) {
				$('.barra').eq(3).children().animate({
				'width': $('.barra').eq(3).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=650){
				$('.barra').eq(3).children().animate({
				'width': $('.barra').eq(3).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2000) {
				$('.barra').eq(4).children().animate({
				'width': $('.barra').eq(4).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=700){
				$('.barra').eq(4).children().animate({
				'width': $('.barra').eq(4).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2300) {
				$('.barra').eq(5).children().animate({
				'width': $('.barra').eq(5).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=900){
				$('.barra').eq(5).children().animate({
				'width': $('.barra').eq(5).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2400) {
				$('.barra').eq(6).children().animate({
				'width': $('.barra').eq(6).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=950){
				$('.barra').eq(6).children().animate({
				'width': $('.barra').eq(6).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2500) {
				$('.barra').eq(7).children().animate({
				'width': $('.barra').eq(7).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=1000){
				$('.barra').eq(7).children().animate({
				'width': $('.barra').eq(7).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2600) {
				$('.barra').eq(8).children().animate({
				'width': $('.barra').eq(8).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=1050){
				$('.barra').eq(8).children().animate({
				'width': $('.barra').eq(8).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if ($(window).width < 769) {
			if (scroll>=2700) {
				$('.barra').eq(9).children().animate({
				'width': $('.barra').eq(9).children().attr('data-percent')
				}, 3000, function(){
				// Animação completa
				});
			};
		} else {
			if (scroll>=1100){
				$('.barra').eq(9).children().animate({
				'width': $('.barra').eq(9).children().attr('data-percent')
				}, 2000, function(){
				// Animação completa
				}); 
			};
		};
	})

	});