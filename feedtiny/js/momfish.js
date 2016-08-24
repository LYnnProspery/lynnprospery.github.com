var MomFish = function() {
	this.eye = new Image();
	// this.body = new Image();
	// this.tail = new Image();
};

MomFish.prototype = {
	init: function(width, height) {
		this.x = width / 2;
		this.y = height / 2;
		this.angle = 0;
		this.tailDeltaTime = 0;
		this.tailCount = 0;
		this.eyeDeltaTime = 0;
		this.eyeCount = 0;
		// this.eatCount = 0;
		this.arrTail = [];
		this.arrEye = [];
		this.arrBodyOrange = [];
		this.arrBodyBlue = [];
		this.interval = 2000;
		// this.eye.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigEye0.png";
		// this.body.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim0.png";
		// this.tail.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail0.png";

		for(var i = 0; i < 8; i++) {
			this.arrTail[i] = new Image(); 
			this.arrTail[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigTail' + i + '.png';
		}
		for(i = 0; i < 2; i++) {
			this.arrEye[i] = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigEye' + i + '.png';
		}
		for(i = 0; i < 8; i++) {
			this.arrBodyOrange[i] = new Image();
			this.arrBodyBlue[i] = new Image();
			this.arrBodyOrange[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwim' + i + '.png';
			this.arrBodyBlue[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/bigSwimBlue' + i + '.png';
		}
	},
	draw: function(ctx, mouseX, mouseY, deltaTime, score) {
		ctx.save();
		this.x = lerpDistance(mouseX, this.x, 0.98);
		this.y = lerpDistance(mouseY, this.y, 0.98);
		this.angle = lerpAngle(Math.atan2(mouseY - this.y, mouseX - this.x) + Math.PI, this.angle, 0.8);
		ctx.translate(this.x, this.y);

		ctx.rotate(this.angle);

		this.tailDeltaTime += deltaTime;
		this.eyeDeltaTime += deltaTime;

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
		// this.tail.src = this.arrTail[this.tailCount];
		this.eye.src = this.arrEye[this.eyeCount];
		this.tail = this.arrTail[this.tailCount];
		var eatCount = score.fruitNum;
		if (eatCount > 7) {
			eatCount = 7;
		}
		if (score.isDouble === 1) {
			this.body = this.arrBodyOrange[eatCount];
		} else {
			this.body = this.arrBodyBlue[eatCount];
		}

		ctx.drawImage(this.tail, -this.tail.width / 2 + 30, -this.tail.height / 2);
		ctx.drawImage(this.body, -this.body.width / 2, -this.body.height / 2);
		ctx.drawImage(this.eye, -this.eye.width / 2, -this.eye.height / 2);

		ctx.restore();
	}
};