/*
*quizPart main js for quiz2333
*by lynnprosper
*/

$(function() {
	// var aRadios = $('#answers input[type="radio"]');
	// for(var i = 0, len = aRadios.length; i < len; i++) {
	// 	aRadios.eq(i).on('click', function() {
	// 		//console.log('a')
	// 		for(var j = 0; j < aRadios.length; j++) {
	// 		 	aRadios.eq(j).next().removeClass();
	// 		//console.log('remove')
	// 		}
	// 		$('input:checked').next().addClass('answer-active');
	// 		//console.log('add')
	// 	});
	// }
	var type = sessionStorage.getItem('scopeType');
	$('#selectedType').html(type);
	var quizGeted = [];
	var index = 0;
	var indexMax = 0;
	var userAnswer;
	var userDidNumber = 0;
	var $arrRadios;
	var result = [];
	var isDisabled = false;
	(function() {
		//test
		var data = sessionStorage.getItem('quizData');
		quizGeted = JSON.parse(data);
		
		// var data = sessionStorage.getItem('quizData');
		// quizGeted = JSON.parse(data);
		index = 0;
		indexMax = quizGeted.length - 1;
		userDidNumber = 0;
		quizNumber = indexMax + 1;
		userAnswer = new Array(quizNumber);
		for(var i = 0; i < quizNumber; i++) {
			result.push(quizGeted[i].result);
		}
		//alert(result)
		//console.log(quizGeted[0]);
		insertQuiz(0);
		quizView();

	})();
	// $.ajax({
	// 	url: '../quizData/quizTest.json',
	// 	type: 'GET',
	// 	dataType: 'json',
	// 	success: function(data) {
	// 		quizGeted = data;
	// 		index = 0;
	// 		indexMax = quizGeted.length - 1;
	// 		userDidNumber = 0;
	// 		quizNumber = indexMax + 1;
	// 		userAnswer = new Array(quizNumber);
	// 		for(var i = 0; i < quizNumber; i++) {
	// 			result.push(quizGeted[i].result);
	// 		}
	// 		//alert(result)
	// 		//console.log(quizGeted[0]);
	// 		insertQuiz(0);
	// 		quizView();
	// 	},
	// 	error: function(){
	// 		console.log('error')
	// 	}
	//});
	//console.log(quizGeted);
	//test for one
	function insertQuiz(index) {
		var questionNumber = quizGeted[index];
		console.log(questionNumber)
		$('.num').html('NO.' + (index + 1) + ' :');
		//console.log(questionNumber);
		var firstChar = questionNumber.question.substring(0, 1);
		var quizHtml = '<div class="question">'
					 + '<p><h3>&nbsp;&nbsp;&nbsp;&nbsp;' + firstChar + '&nbsp;</h3>' + questionNumber.question.substring(1) + '</p></div>'
					 + '<div class="choose-answer" id="answers">'
					 + '<label for="A">'
					 + '<input type="radio" id="A" name="answer" value="A"/>'
					 + '<p>' + questionNumber.answer[0] + '</p>'
					 + '</label>'
					 + '<label for="B">'
					 + '<input type="radio" id="B" name="answer" value="B"/>'
					 + '<p>' + questionNumber.answer[1] + '</p>'
					 + '</label>'
					 + '<label for="C">'
					 + '<input type="radio" id="C" name="answer" value="C"/>'
					 + '<p>' + questionNumber.answer[2] + '</p>'
					 + '</label>'
					 + '<label for="D">'
					 + '<input type="radio" id="D" name="answer" value="D"/>'
					 + '<p>' + questionNumber.answer[3] + '</p>'
					 + '</label>'
					 + '</div>';
		$('.question-info').html(quizHtml);
		$('.question').css('display', 'none').fadeIn(600);
		$('#answers').css('display', 'none').slideDown(600);
		//$('#answers').css('display', 'none').show(1000);
		//$('#answers').css('display', 'none').fadeIn(1000);
		// if(userAnswer[index]) {
		// 	$('input[value="' + userAnswer[index] + '"]').prop('checked', true);
		// }
		var oInfo = $('.acomplish-info .acomplished');
		var oBar = $('.acomplish-info .progress .progress-bar');
		if(index == 0 && !userAnswer[0] && !userAnswer[1] && !userAnswer[2] && !userAnswer[3]) {
			oInfo.html('acomplished 0&nbsp;&nbsp;');
			oBar.html('0/' + (indexMax + 1));
			oBar.css('width', '0')

		}
		var $arrRadios = $('input[type="radio"]');
		$arrRadios.each(function(i, ele) {
			$(ele).change(function() {
				//console.log(index);
				userAnswer[index] = $('input[type="radio"]:checked').val();
				//console.log('useranswer.length: ' + userAnswer.length)
				for(var i = 0, len = userAnswer.length, didNumber = 0; i < len; i++) {
					if(userAnswer[i]) {
						didNumber ++;
					}
				}
				//console.log(didNumber)
				userDidNumber = didNumber;
				oInfo.html('acomplished ' + userDidNumber + '&nbsp;&nbsp;');
				oBar.html(userDidNumber + '/' + (indexMax + 1));
				oBar.css('width', (userDidNumber / quizNumber) * 100 + '%');
				//console.log(userAnswer[index - 1]);
				//console.log(userDidNumber);
			});
		});

		// $arrRadios.each(function(i, ele) {
		// 	$(ele).change(function() {'acomplished 4&nbsp;&nbsp;'
		// 		//console.log(index);
		// 		console.log('change')
		// 		console.log(userAnswer)
		// 		for(var i = 0, len = userAnswer.length; i < len; i++) {
		// 			if(userAnswer[i]) {
		// 				userDidNumber++;
		// 				console.log(userDioNumber);		
		// 			}
		// 		}
		// 	});
		// });
		// userAnswer[index] = $('input:checked').val();
		// console.log($('input[type="radio"]').length);
	}
	function quizView() {
		$('#pre').attr('disabled', true);
		$('#next').on('click',function() {
			//console.log(index + 'max: ' + indexMax)
			if(index < indexMax) {
				//recordAnswer();
				insertQuiz(++index);
				if(isDisabled) {
					$('input[type="radio"]').prop('disabled', true);
					//console.log('disabled')
				}
				if(userAnswer[index]) {
					$('input[value="' + userAnswer[index] + '"]').prop('checked', true);
				}
				$('#pre').attr('disabled', false);
				if(index == indexMax) {
					$(this).attr('disabled', true);
				}
			}
			//console.log('')
		});
		$('#pre').on('click', function() 	{
			//console.log(index);
			console.log(isDisabled)
			if(index > 0) {
				//recordAnswer();
				insertQuiz(--index);
				if(isDisabled) {
					$('input[type="radio"]').prop('disabled', true);
					//console.log('disabled')
				}
				if(userAnswer[index]) {
					$('input[value="' + userAnswer[index] + '"]').prop('checked', true);
				}
				$('#next').attr('disabled', false);
				if(index == 0) {
					$(this).attr('disabled', true);
				}
			}
		});
		
		$('#submit').on('click', function() {
			//recordAnswer();
			console.log("submit");
			var flag = true;
			//console.log(userAnswer)
			for(var i = 0, len = userAnswer.length; i < len; i++) {
				if(!userAnswer[i]) {
					flag = false;
				}
			}
			//console.log(flag);
			if(!flag) {
				if(!confirm('存在未完成的题目，是否继续提交?')) {
					return;
				}
			}
			//alert('success');
			// data-toggle="tooltip" 
    		//data-placement="left" //可选auto  如果是auto left 则尽量在左边 实在不行就在右边
    		//data-original-title="提示框居左" 
        //  title=""
			callModal();
			isDisabled = true;
			$('input[type="radio"]').prop('disabled', true);
			$(this).prop('disabled', true);
				   // .attr('type', 'button')
				   // .attr('data-toggle', 'tooltip')
				   // .attr('data-placement', 'bottom')
				   // .attr('data-original-title', '禁止重复提交');

			var checkBtn = $('<button class="btn btn-info" id="checkAnswerBtn">查看错题</button>').on('click', function() {
				callModal();
			});
			console.log(checkBtn)
			$('.buttons').append(checkBtn);

		});
	}

	function recordAnswer() {
		userAnswer[index] = $('input:checked').val();
		//console.log(userAnswer);
	}
	
	function callModal() {
		var quizResult = '';
		var number = 0;
		var wrongAnswer = [];
		for(var i = 0; i < quizNumber; i++) {
			if(!userAnswer[i]) {
				userAnswer[i] = '空';
			}
			quizResult += userAnswer[i] + ' ';
			if(userAnswer[i] == result[i]) {
				number++;
			} else {
				wrongAnswer.push({
					index: i,
					content: quizGeted[i].question,
					quizAnswers: quizGeted[i].answer,
					userGived: userAnswer[i],
					correctAnswer: result[i]
				});
			}
		}
		//var content = 'Your had got ' + <strong style='color: red'>number</strong> + ' answers.<br />The correct answers is B A B A<br />Your answers is ' + result;
		if(wrongAnswer.length == 0) {
			var allCorrectModal = '<h1 style="color: green">全部答对！GoodJob!</h1>'
			$('.modal-body').html('').html(allCorrectModal);

		} else {
// 			{
// 	"index": "3",
// 	"question": "333使用数码相机日光白平衡拍摄时，雪地中的阴影在照片上呈现出微微的?",
// 	"answer": ["A、333蓝色", "B、333黄色", "C、333高感光度时偏蓝，低感光度时偏黄", "D、333阿达阿啊"],
// 	"result": "B",
// 	"reason": "333啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
// },
			var oModalResult = $('.modal-body .modal-result-info');
			var oModalFooterPre = $('.modal-footer .btn-toolbar');
			oModalFooterPre.html('');
			var  getCorrectAnswer = function(resultIndex) {
				$('.modal-body p').eq(0).html('你答对了 <strong style="color:green">' + number + '</strong>题, 做错了' 
					+ '<strong style="color:red">' + (quizNumber - number) + '</strong>题')
					//<br />The correct answers is ' + result + '<br />Your answers is ' + quizResult);
				//console.log(wrongAnswer[resultIndex].content)

				oModalResult.find('.result-content').html(quizGeted[resultIndex].question);
				//oModalResult.find('.result-answer').html(wrongAnswer[resultIndex].quizAnswers);
				$(quizGeted[resultIndex].answer).each(function(index, item) {
					oModalResult.find('.result-answer p').eq(index).html(quizGeted[resultIndex].answer[index]);
				});

				oModalResult.find('.correct-answer').html('正确答案: ' + quizGeted[resultIndex].result + ',&nbsp;&nbsp;你的答案: '
					+ userAnswer[resultIndex] + '&nbsp;&nbsp;');
				oModalResult.css('display', 'none').fadeIn(1000);

				oModalResult.find('.reason-of-answer').html(quizGeted[resultIndex].reason);
			}

			$(wrongAnswer).each(function(i, item) {
				var btnInGroup = $('<button class="btn btn-danger btn-group">' + (item.index + 1) + '</button>');
				oModalFooterPre.append(btnInGroup);
			});

			var oModalFooterBtn = $('.modal-footer .btn-toolbar').find('.btn');
			$(oModalFooterBtn).each(function(index, item) {
				$(item).on('click', function() {
					//console.log(parseInt($(this).html()) - 1);
					getCorrectAnswer(parseInt($(this).html()) - 1);
				})
			})
			getCorrectAnswer(wrongAnswer[0].index);
		}
		$('#myModal').modal();
	}

	$('#back-to-index').on('click', function() {
		if(!isDisabled) {
			alert('请先提交答案');
			return false;
		}
		setTimeout(function(){
			window.open('../index.html', '_self');
		}, 1000);
	});

	$('#collect-quiz').on('click', function() {
		var myAlert = $('<div>收藏成功</div>');
		myAlert.css({
			width: '200px',
			height: '60px',
			background: 'rgba(255,255,255,0.4)',
			border: '2px solid white',
			color: 'green',
			opacity: '0',
			borderRadius: '10px',
			textAlign: 'center',
			position: 'absolute',
			top: '35%',
			left: '50%',
			marginLeft: '-100px',
			fontSize: '1.5em',
			lineHeight: '60px'

		});
		$('body').append(myAlert);
		myAlert.animate({
			top: '45%',
			opacity: '1'
		}, 600, 'easeOutCubic')
		.animate({
			top: '55%',
			opacity: '0'		
		}, 600, 'easeInCubic', function() {
			$(this).css('display', 'none');
		});
	});

	$('#go-on').on('click', function() {
		if(isDisabled) {
			var type = sessionStorage.getItem('scopeType');
			$.ajax({
				url: 'question_find',

				//test
				url: '../quizData/quizTest1.json',
				
				type: 'GET',
				//test
				dataType: 'json',
				
				data: 'scope=' + type, 
				success: function(data) {
					console.log(data);
					//quizGeted = parseJSON(data);
					
					quizGeted = data;
					index = 0;
					indexMax = quizGeted.length - 1;
					userDidNumber = 0;
					quizNumber = indexMax + 1;
					userAnswer = new Array(quizNumber);
					for(var i = 0; i < quizNumber; i++) {
						result.push(quizGeted[i].result);
					}
					insertQuiz(0);
					quizView();
					isDisabled = false;
					$('input[type="radio"]').prop('disabled', false);
					$('#submit').prop('disabled', false);
					$('#checkAnswerBtn').remove();
				},
				error: function(error, text){
					console.log(text);
				}
			});
		} else {
			alert('请先提交答案');
		}
	});

	$('#evalution').on('click', function() {
		alert('还没写');
	});


	$('#about-us').on('click', function() {
		$('#myModalAbout').modal();
	});
});
