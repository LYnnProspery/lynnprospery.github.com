/*
*Js for Quiz233
*By lynnpropser
*/

$(function() {
	$('#topImgBox').carousel({
		interval:5000,
		pause: ''
	});
	$('#topImgBox a.left').on('click', function  () {
		$('.carousel').carousel("prev");
	});
	$('#topImgBox a.right').on('click', function  () {
		$('.carousel').carousel("next");
	});
	
	$(document).on('mousemove', function(ev) {
		var aImg = $('.quizItem img');
		var oDiv = $('.quizItem');
		for(var i = 0; i < aImg.length; i++) {
			var x = aImg.eq(i).offset().left + aImg.eq(i).width()/2;
			var y = aImg.eq(i).offset().top + aImg.eq(i).height()/2;
			var a = x - ev.pageX;
			var b = y - ev.pageY - oDiv.scrollTop();

			var dis = Math.sqrt(a * a + b * b);
			scale = 1 - dis/300;
			if(scale < 0.5) {
				scale = 0.5;
			}
			w = scale*128;
			aImg.eq(i).width(w);
		}
	});
	$(document).on('scroll', function() {
		var boxHeight = $('#topBox').height();
		var sloganHeight = $('.slogan1').height();
		var contentHeight = $('.quizContent1').height();
		var top = $(window).scrollTop();
		if(top < (boxHeight + sloganHeight + 10)){
			$('#pic2').fadeOut(1000);
			$('#pic1').fadeIn(1000);
		} 
		if(top >= (boxHeight + sloganHeight + 10) && 
			 top < (boxHeight + 2*sloganHeight + contentHeight+ 10)){
			$('#pic1').fadeOut(1000);
			$('#pic2').fadeIn(1000);
			$('#pic3').fadeOut(1000);	
		}

		if(top >= (boxHeight + 2*sloganHeight + contentHeight+ 10) &&
		   top < (boxHeight + 3*sloganHeight + 2*contentHeight+ 10)) {
			$('#pic2').fadeOut(1000);
			$('#pic3').fadeIn(1000);
			$('#pic4').fadeOut(1000);
		} 

		if(top >= (boxHeight + 3*sloganHeight + 2*contentHeight+ 10) &&
		   top < (boxHeight + 4*sloganHeight + 3*contentHeight+ 10)) {
			$('#pic3').fadeOut(1000);
			$('#pic4').fadeIn(1000);
			$('#pic5').fadeOut(1000);
		} 
		if(top >= (boxHeight + 4*sloganHeight + 3*contentHeight+ 10) &&
		   top < (boxHeight + 5*sloganHeight + 4*contentHeight+ 10)) {
			$('#pic4').fadeOut(1000);
			$('#pic5').fadeIn(1000);
			$('#pic6').fadeOut(1000);
		} 
		if(top >= (boxHeight + 5*sloganHeight + 4*contentHeight+ 10) &&
		   top < (boxHeight + 6*sloganHeight + 5*contentHeight+ 10)) {
			$('#pic5').fadeOut(1000);
			$('#pic6').fadeIn(1000);
		} 
	});

	$('#topBox .carousel-inner button').on('click', function() {
		var wrap = $('<div id="wrap"></div>').css({
			position: 'absolute',
			width: '100%',
			top: '0',
			bottom: '0',
			background: 'black',
			opacity: '0',
			zIndex: '1000'
		});
		var hello = $('<h1 id="hello">Hello &nbsp;Quiz</h1>').css({
			position: 'absolute',
			color: '#fff',
			width: '100%',
			textAlign: 'center',
			top: '100px',
			opacity: '0',
			zIndex: '1001',
			zoom: '2'
		})
		$('body').append(wrap);
		$('body').append(hello);
		wrap.animate({opacity: '1'}, 2000);
		hello.animate({opacity: '1'}, 2000, function() {
			setTimeout(function() {
				window.open('quziPart/index.html', '_self');
			}, 2000);
		});

	})
});

























