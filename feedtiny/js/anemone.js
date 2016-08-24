var Animone = function() {
	this.x = [];
	// this.len = [];
	this.headX = [];
	this.headY = [];
	this.amp = [];
	this.alpha = 0;
};

Animone.prototype = {
	num: 50,
	init: function(height) {
		for(var i = 0; i < this.num; i++) {
			this.x[i] = Math.random() * 20 + i * 16;
			// this.len[i] = Math.random() * 50 + 200;
			this.headX[i] = this.x[i];
			this.headY[i] = height - (250 - Math.random() * 50);

			this.amp[i] = Math.random() * 50 + 50;
		}
	},
	draw: function(ctx, canvasHeight, deltaTime) {
		this.alpha += deltaTime * 0.0008;
		var l = Math.sin(this.alpha);
		ctx.save();
		ctx.globalAlpha = 0.6;
		ctx.lineWidth = 20;
		ctx.lineCap = 'round';
		ctx.strokeStyle = '#3b154e';
		for(var i = 0; i < this.num; i++) {
			ctx.beginPath();
			ctx.moveTo(this.x[i], canvasHeight);
			// ctx.lineTo(this.x[i], canvasHeight - this.len[i]);
			this.headX[i] = this.x[i] + l * this.amp[i];
			ctx.quadraticCurveTo(this.x[i], canvasHeight - 100, this.headX[i], this.headY[i]);
			ctx.stroke();
		}

		ctx.restore();
	}

};
