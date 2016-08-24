var Wave = function() {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.r = [];
	this.color = [];
};

Wave.prototype = {
	num: 15,
	init: function() {
		for(var i = 0; i < this.num; i++) {
			this.alive[i] = false;
		}
	},
	draw: function(ctx, deltaTime, canvasHeight) {
		ctx.save();
		ctx.shadowBlur = 10;
		
		for(var i = 0; i < this.num; i++) {
			if (this.alive[i]) {
				ctx.shadowColor = this.color[i];
				if (this.color[i] === '#fff') {
					ctx.lineWidth = 2;
					this.r[i] += deltaTime * 0.02;
					if (this.r[i] > 60) {
						this.alive[i] = false;
						break;
					}
					var alpha = 1 - this.r[i] / 60;
				} else {
					ctx.lineWidth = 4;
					this.r[i] += deltaTime * 0.05;
					if (this.r[i] > 80) {
						this.alive[i] = false;
						break;
					}
					var alpha = 1 - this.r[i] / 80;
				}
				
				ctx.beginPath();
				if (this.color[i] === '#fff') {
					ctx.arc(this.x[i], canvasHeight - this.y[i], this.r[i], 0, Math.PI * 2);
				} else {
					ctx.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
				}
				ctx.closePath();
				// ctx.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
				if (this.color[i] === '#fff') {
					ctx.strokeStyle = 'rgba(255,255,255,' + alpha + ')';
				} else {
					ctx.strokeStyle = 'rgba(203,91,0,' + alpha + ')';
				}
				ctx.stroke();

			}
		}
		ctx.restore();
	},
	born: function(x, y, color) {
		for(var i = 0; i < this.num; i++) {
			if (!this.alive[i]) {
				this.r[i] = 20;
				this.alive[i] = true;
				this.x[i] = x;
				this.y[i] = y;
				this.color[i] = color;
				return;
			}
		}
	}
};