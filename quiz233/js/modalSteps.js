/*
*modalsteps js for quiz2333
*by lynnprosper
*/


$(function() {		
			modalSteps();
			function modalSteps() {
				var index = 0;
				var res=document.cookie.substring(5, 16);
				var aSteps = $('.modal-body').children();
				var afingers = $('.finger');
				$('#nextStepBtn').on('click', function() {
					if(index == 4) {
						$('#my').modal('hide');
					}else {
						aSteps.eq(index++).fadeOut(500, function() {
							aSteps.eq(index).fadeIn(500, function() {
								if(index == 1) {
									afingers.eq(index - 1).animate({marginLeft: 150, marginTop: -20}, 1000, 'swing');
								} else if(index == 2) {
									afingers.eq(index - 1).animate({marginLeft: 100, marginTop: -30}, 1000, 'swing');
								} else if(index == 3) {
									afingers.eq(index - 1).animate({marginLeft: 350, marginTop: -40}, 2000, 'swing');
								} else {

								}
							});
						});
					}
				});

				$('#guide').on('click', function() {
					index = 0;
					aSteps[0].style.display = 'block';
					aSteps[1].style.display = 'none';
					aSteps[2].style.display = 'none';
					aSteps[3].style.display = 'none';
					aSteps[4].style.display = 'none';
					for(var i = 0; i < 3; i++) {
						afingers[i].style.margin = 0;
					}
					$('#my').modal();
				});
				if(res != "www.quiz233"){
					$('#my').modal();
					var oDate=new Date();
					oDate.setDate(oDate.getDate()+30);
					document.cookie="name=www.quiz233.com;expires="+oDate;
				}
			}
		});			