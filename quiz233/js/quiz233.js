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
		var sloganHeight = $('.slogan1').height() - 100;
		//v = $('.quizContent1').height();
		var top = $(window).scrollTop();
		if(top < (boxHeight + sloganHeight )){
			$('#pic2').fadeOut(1000);
			$('#pic1').fadeIn(1000);
		} 
		if(top >= (boxHeight + sloganHeight ) && 
			 top < (boxHeight + 2*sloganHeight)){
			$('#pic1').fadeOut(1000);
			$('#pic2').fadeIn(1000);
			$('#pic3').fadeOut(1000);	
		}

		if(top >= (boxHeight + 2*sloganHeight) &&
		   top < (boxHeight + 3*sloganHeight)) {
			$('#pic2').fadeOut(1000);
			$('#pic3').fadeIn(1000);
			$('#pic4').fadeOut(1000);
		} 

		if(top >= (boxHeight + 3*sloganHeight) &&
		   top < (boxHeight + 4*sloganHeight)) {
			$('#pic3').fadeOut(1000);
			$('#pic4').fadeIn(1000);
			$('#pic5').fadeOut(1000);
		} 
		if(top >= (boxHeight + 4*sloganHeight) &&
		   top < (boxHeight + 5*sloganHeight + 100)) {
			$('#pic4').fadeOut(1000);
			$('#pic5').fadeIn(1000);
			$('#pic6').fadeOut(1000);
		} 
		if(top >= (boxHeight + 5*sloganHeight + 100) &&
		   top < (boxHeight + 6*sloganHeight)) {
			$('#pic5').fadeOut(1000);
			$('#pic6').fadeIn(1000);
		} 
	});


	$('.docker img').on('click', function() {
		linkToQuizPart($(this));
	})

	$('#topBox .carousel-inner button').on('click', function() {
		linkToQuizPart($(this));
	});

	$('#quizContents button').on('click', function() {
		linkToQuizPart($(this));
	});
	function linkToQuizPart(_this) {
		// var quizData = navigator.userAgent;
		// try{
		//   localStorage.setItem(data,quizData);
		// }catch(e){
		//   if(e === QUOTA_EXCEEDED_ERR){
		//     alert('无法存储数据，数据量超限');
		//   }
		// }
		// $.ajax({
		// 		url: 'quizData/quizTest2.json',
		// 		type: 'GET',
		// 		dataType: 'json',
		// 		success: function(data) {
		// 			//console.log(data.length);
		// 			//var jsonData = ;
		// 			//console.log(data);
		// 			try{
		// 			  localStorage.setItem('quizData',JSON.stringify(data));
		// 			  console.log('store success')
		// 			}catch(e){
		// 			  console.log(e);
		// 			}
		// 		},
		// 		error: function(error) {
		// 			console.log(error);
		// 		}

		// 	});
		//var _this = $(this);
		sessionStorage.setItem('scopeType', _this.attr('target'));
		$.ajax({
			//test
			url: 'quizData/quizTest2.json',
			dataType: 'json',

			
			//url: 'question_find',
			type: 'GET',
			data: 'scope=' + _this.attr('target'),
			success: function(data) {
				//console.log(data.length);
				//var jsonData = ;
				//console.log(data);
				//alert(data)
				try{
					//test
					sessionStorage.setItem('quizData',JSON.stringify(data));
					
					//sessionStorage.setItem('quizData',data);
				 	console.log('store success')
				}catch(e){
				 	console.log(e);
				}
			},
			error: function(error) {
				console.log(error);
			}
		})

		var wrap = $('<div id="wrap"></div>').css({
			position: 'fixed',
			width: '100%',
			top: '0',
			bottom: '0',
			background: 'black',
			opacity: '0',
			zIndex: '1000'
		});
		var hello = $('<h1 id="hello">Hello &nbsp;Quiz</h1>').css({
			position: 'fixed',
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

	}









	$('#loginBtn').on('click', function() {
		$('.login-box').fadeIn(600);
	});
	$('#signBtn').on('click', function() {
		$('.signup-box').fadeIn(600);
	});
	$('.btn-close-login').on('click', function() {
		$('.login-box').slideUp(600);
	});
	$('.btn-close-signup').on('click', function() {
		$('.signup-box').slideUp(600);
	});

	$('#signlink').on('click', function() {
		$('.login-box').fadeOut(1000);
		$('.signup-box').fadeIn(1000);
	});
	//console.log($('.carousel-inner button').length)

	$('#userLogin').on('click', function() {
		//console.log('a');
		$('.login-btn-group').fadeOut(600);
		$('.login-box').fadeOut(600, function() {
			$('.user-info').fadeIn(600);
		});
	});


    $('[data-toggle="tooltip"]').tooltip();
    
});

























