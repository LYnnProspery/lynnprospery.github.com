$(function() {
	//wrap-enter-animation
	$('#enter-wrap').animate({opacity: '1'}, 2000, function() {
		var _this = $(this);
		setTimeout(function() {
			_this.animate({opacity: '0'}, 2000, function() {
				_this.css('display', 'none');
			});
			$('#main').animate({opacity: '1'}, 2000);
		}, 1000)
	});
	$('#hello').animate({opacity: '1'}, 2000);


	//clock-update
	(function() {
		var date = 0;
		var up = function() {
			date = new Date() + '';
			$('#main-clock').html(date.substring(0, 25));
		}
		up();
		setInterval(up, 1000);
	})();


	//navigation-functions
	var oModal = $('#myModal');
	$('#visit-js').on('click', function() {
		oModal.find('.modal-title').html('My works mainly coded by original <strong>JavaScript</strong> : ');
		oModal.modal();
	});

	$('#visit-jq').on('click', function() {
		oModal.find('.modal-title').html('My works mainly with <strong>jQuery</strong> : ');
		oModal.find('.modal-body').append('<a href="quiz233/index.html">Quiz233: This is a website for quizes with many scopes .</a>')
		$('#myModal').modal();
	})

	$('#visit-angular').on('click', function() {
		oModal.find('.modal-title').html('My works mainly with <strong>AngularJS</strong> : ');
		$('#myModal').modal();
	})

	$('#visit-node').on('click', function() {
		oModal.find('.modal-title').html('My works using <strong>NodeJS for back-en</strong>d: ');
		$('#myModal').modal();
	})

	$('#visit-bootstrap').on('click', function() {
		oModal.find('.modal-title').html('My works using <strong>BootStrap</strong> : ');
		$('#myModal').modal();
	})


		

});