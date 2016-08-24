var BabyFish = function() {
	this.eye = new Image();
	// this.body = new Image();
	// this.tail = new Image();
};

BabyFish.prototype = {
	init: function(width, height) {
		this.x = width / 2 - 50;
		this.y = height / 2 + 50;
		this.angle = 0;
		this.tailDeltaTime = 0;
		this.tailCount = 0;
		this.eyeDeltaTime = 0;
		this.eyeCount = 0;
		this.bodyCount = 0;
		this.bodyDeltaTime = 0;
		this.arrBody = [];
		this.arrTail = [];
		this.arrEye = [];
		this.interval = 2000;
		// this.eye.src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyEye0.png';
		// this.body.src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade0.png';

		for(var i = 0; i < 8; i++) {
			this.arrTail[i] = new Image();
			this.arrTail[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail' + i + '.png';
		}
		for(i = 0; i < 2; i++) {
			// this.arrEye[i] = new Image();
			this.arrEye[i] = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyEye' + i + '.png';
		}
		for(i = 0; i < 20; i++) {
			this.arrBody[i] = new Image();
			this.arrBody[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyFade' + i + '.png';
		}
		// this.tail.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/babyTail0.png";
	},
	draw: function(ctx, mouseX, mouseY, momFish, deltaTime, score) {
		ctx.save();
		this.x = lerpDistance(momFish.x, this.x, 0.98);
		this.y = lerpDistance(momFish.y, this.y, 0.98);
		this.angle = lerpAngle(Math.atan2(momFish.y - this.y, momFish.x - this.x) + Math.PI, this.angle, 0.6);
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		this.tailDeltaTime += deltaTime;
		this.eyeDeltaTime += deltaTime;
		this.bodyDeltaTime += deltaTime;
		if (this.tailDeltaTime > 50) {
			this.tailCount = (this.tailCount + 1) % 8;
			this.tailDeltaTime %= 50;

		}
		if (this.eyeDeltaTime > this.interval) {
			this.eyeCount = (this.eyeCount + 1) % 2;
			this.eyeDeltaTime %= this.interval;

			if(this.eyeCount === 0) {
				this.interval = Math.random() * 2000 + 2500;
			} else {
				this.interval = 200;
			}
		}
		if (this.bodyDeltaTime > 300) {
			this.bodyCount = this.bodyCount + 1;
			this.bodyDeltaTime %= 300;
			if (this.bodyCount > 19) {
				this.bodyCount = 19;
				score.isDead = true;
				$('.restart').css({
					'visibility': 'visible',
					'opacity': '1'
				});
			}
		}

		//this.tail.src = this.arrTail[this.tailCount];
		this.eye.src = this.arrEye[this.eyeCount];
		// this.body.src = this.arrBody[this.bodyCount];
		
		ctx.drawImage(this.arrTail[this.tailCount], -this.arrTail[this.tailCount].width / 2 + 23, -this.arrTail[this.tailCount].height / 2);
		// ctx.drawImage(this.body, -this.body.width / 2, -this.body.height / 2);
		ctx.drawImage(this.arrBody[this.bodyCount], -this.arrBody[this.bodyCount].width / 2, -this.arrBody[this.bodyCount].height / 2);
		ctx.drawImage(this.eye, -this.eye.width / 2, -this.eye.height / 2);

		ctx.restore();
	}
};

