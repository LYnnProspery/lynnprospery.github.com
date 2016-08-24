var Fruit = function() {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.len = [];
	this.speed = [];
	this.type = [];
	this.animoneIndex = [];
	this.orangeFruit = new Image();
	this.blueFruit = new Image();

	this.orangeFruit.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/fruit.png";
	this.blueFruit.src = "http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/blue.png";
};

Fruit.prototype = {
	num: 30,
	init: function(animone) {
		for(var i = 0; i < this.num; i++) {
			this.alive[i] = false;
			this.speed[i] = Math.random() * 0.01 + 0.005;
		}

	},
	born: function(i, animone, canvasHeight) {
		this.alive[i] = true;
		this.animoneIndex[i] = Math.floor(Math.random() * 50);
		this.len[i] = 0;
		this.x[i] = animone.x[this.animoneIndex[i]];
		this.y[i] = canvasHeight - animone.headY[this.animoneIndex[i]];
		if (Math.random() > 0.85) {
			this.type[i] = 'blue';
		} else {
			this.type[i] = 'orange';
		}
		
	},
	draw: function(ctx, canvasHeight, deltaTime, animone) {

		for(var i = 0; i < this.num; i++) {
			if (this.alive[i]) {
				if (canvasHeight - this.y[i] < 5) {
					this.alive[i] = false;
				} else {
					if (this.len[i] <= 14) {
						this.x[i] = animone.headX[this.animoneIndex[i]];
						this.y[i] = canvasHeight - animone.headY[this.animoneIndex[i]];
						this.len[i] += this.speed[i] * deltaTime;
					} else {

						this.y[i] += this.speed[i] * 7 * deltaTime;
					}

					this.type[i] === 'blue' && ctx.drawImage(this.blueFruit, this.x[i] - this.len[i]  / 2, canvasHeight - this.y[i] - this.len[i], this.len[i], this.len[i]);
					this.type[i] === 'orange' && ctx.drawImage(this.orangeFruit, this.x[i] - this.len[i]  / 2, canvasHeight - this.y[i] - this.len[i], this.len[i], this.len[i]);
				}
			}
		}
	},
	monitor: function(animone, canvasHeight) {
		var number = 0;
		for(var i = 0; i < this.num; i++) {
			if (this.alive[i]) {
				number++;
			}
		}
		if (number < 15) {
			this.invokeFruit(animone, canvasHeight);
			return;
		}
	},
	invokeFruit: function(animone, canvasHeight) {
		for(var i = 0; i < this.num; i++) {
			if(!this.alive[i]) {
				this.born(i, animone, canvasHeight);
				return;
			}
		}
	}
};