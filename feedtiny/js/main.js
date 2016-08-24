$(function() {
	//window.onload = gameInit;
	var lastTime;
	var deltaTime;
	var canvasHeight = 0;
	var canvasWidth = 0;
	var mouseX;
	var mouseY;
	var oCanvasOuter = null;
	var oCanvasInner = null;
	var oContextOuter = null;
	var oContextInner = null;

	var animone = null;
	var fruits = null;
	var momFish = null;
	var babyFish = null;
	var score = null;
	var wave = null;
	var num = 0;

	var bg = new Image();

	window.onload = function() {
		var arrImg = [
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyEye0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyEye1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade7.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade8.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade9.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade10.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade11.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade12.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade13.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade14.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade15.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade16.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade17.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade18.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade19.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail7.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/background.jpg',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigEye0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigEye1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim7.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue7.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail7.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/blue.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust0.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust1.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust2.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust3.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust4.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust5.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust6.png',
			'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/fruit.png'
		];
		arrImg.forEach(function(item, index) {
			var image = new Image();
			var number = arrImg.length;
			image.src = item;
			image.onload = function() {
				num++;
				$('.loading p').eq(0).text((num / number * 100).toFixed(0) + '%');
				num === number && (function() {
					$('.loading').css({
						'visibility': 'hidden',
						'opacity': '0'
					});
					$('.loading-text').css({
						'visibility': 'hidden',
						'opacity': '0'
					});
					gameStart();
				})();
			};
			image.onerror = function() {
				console.log('error');
			};
		});
	};

	function gameStart() {
		$('.restart').css({
			'visibility': 'hidden',
			'opacity': '0'
		});
		gameInit();
		lastTime = Date.now();
		deltaTime = 0;
		gameLoop();
	}

	function gameInit() {
		oCanvasOuter = $('.canvas-outer')[0];
		oCanvasInner = $('.canvas-inner')[0];

		// $(oCanvasOuter).width($(window).width());
		// $(oCanvasInner).width($(window).width());

		oContextOuter = oCanvasOuter.getContext('2d');
		oContextInner = oCanvasInner.getContext('2d');

		canvasHeight = oCanvasOuter.height;
		canvasWidth = oCanvasOuter.width;

		mouseX = canvasWidth / 2 ;
		mouseY = canvasHeight / 2 ;
		bg.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/background.jpg";
		// bg.width = '100%';
		// bg.height = '100%';

		// oContextInner.drawImage(bg, 0, 0, canvasWidth, canvasHeight);
		$(oCanvasOuter).on('mousemove', onMouseMove);

		animone = new Animone();
		animone.init(canvasHeight, deltaTime);

		fruits = new Fruit();
		fruits.init(animone);

		momFish = new MomFish();
		momFish.init(canvasWidth, canvasHeight);

		babyFish = new BabyFish();
		babyFish.init(canvasWidth, canvasHeight);

		score = new Score();

		wave = new Wave();
		wave.init();

		dust = new Dust();
		dust.init(canvasWidth, canvasHeight);
	}	

	function gameLoop() {
		window.requestAnimFrame(gameLoop);

		var currentTime = Date.now();
		deltaTime = currentTime - lastTime;
		if (deltaTime > 40) {
			deltaTime = 40;
		}

		lastTime = currentTime;
 
		drawBackground(oContextInner, bg,canvasWidth, canvasHeight);
		animone.draw(oContextInner, canvasHeight, deltaTime);
		fruits.draw(oContextInner, canvasHeight, deltaTime, animone);
		fruits.monitor(animone, canvasHeight);

		oContextOuter.clearRect(0, 0, canvasWidth, canvasHeight);
		momFish.draw(oContextOuter, mouseX, mouseY, deltaTime, score);
 
		babyFish.draw(oContextOuter, mouseX, mouseY, momFish, deltaTime, score);

		isEat();
		isFeed();
		score.draw(oContextOuter, canvasWidth, canvasHeight, deltaTime);
		wave.draw(oContextOuter, deltaTime, canvasHeight);
		dust.draw(oContextOuter, deltaTime);
	}

	function drawBackground(ctx, bg, width, height) {
		ctx.drawImage(bg, 0, 0, width, height);
	}

	function onMouseMove(ev) {
		if (!score.isDead) {
			mouseX = ev.pageX - $(oCanvasOuter).offset().left;
			mouseY = ev.pageY - $(oCanvasOuter).offset().top;
		}
	}
	function isEat() {
		if (!score.isDead) {
			for(var i = 0; i < fruits.num; i++) {
				if (fruits.alive[i]) {
					if (calLength2(fruits.x[i], canvasHeight - fruits.y[i], momFish.x, momFish.y) < 625) {
						if (fruits.type[i] === 'blue') {
							score.isDouble++;
						}
						score.fruitNum++;
						fruits.alive[i] = false;
						wave.born(fruits.x[i], fruits.y[i], '#fff');

						
					}
				}
			}
		}
	}
	function isFeed() {
		if (!score.isDead && score.fruitNum > 0) {
			if (calLength2(babyFish.x, babyFish.y, momFish.x, momFish.y) < 900) {
				score.addScore();
				var count = babyFish.bodyCount - (score.fruitNum + 2) * score.isDouble;
				if (count < 0) {
					count = 0;
				}
				babyFish.bodyCount = count;
				wave.born(babyFish.x, babyFish.y, 'rgb(203,91,0)');

				score.fruitNum = 0;
				score.isDouble = 1;
			}
		}
	}
	$('.restart').on('click', function() {
		$(this).css({
					'visibility': 'hidden',
					'opacity': '0'
		});
		gameStart();
	});

});
