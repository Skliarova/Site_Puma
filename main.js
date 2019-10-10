$(document).ready(function(){
//	при клике на Н1 выводится сообщение
//		$('h1').click(function(){
//			alert('Ты кликнул по заголовку')
//		});
//	
//	меняется логотип Puma при клике
//		$('img#scroll_img').click(function(){
//		$(this).fadeOut(500,function(){
//			$(this).attr('src', 'img/img2.png').fadeIn(500)
//		});
//		});
//	прохождение курсора мыши над Н1 - трансформация шрифта, эфф. hover
	$('h1').mouseenter(function(){
		$(this).toggleClass('transf')
	});
	$('h1').mouseleave(function(){
		$(this).toggleClass('transf')
	});
	});