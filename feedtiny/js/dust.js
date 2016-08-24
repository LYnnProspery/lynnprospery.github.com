var Dust = function() {
	this.x = [];
	this.y = [];
	this.amp = [];
	this.imgNo = [];
	this.dustNo = [];
	this.alpha;
};

Dust.prototype = {
	num: 30,
	init: function(width, height) {
		for(var i = 0; i < 7; i++) {
			this.imgNo[i] = new Image();
			this.imgNo[i].src = 'http://7xwgqm.com1.z0.glb.clouddn.com/feedtiny/img/dust' + i + '.png';
		}
		for(var i = 0; i < this.num; i++) {
			this.x[i] = Math.random() * width;
			this.y[i] = Math.random() * height;
			this.amp[i] = Math.random() * 15 + 20;
			this.dustNo[i] = Math.floor(Math.random() * 7);
			this.alpha = 0;
		}
	},
	draw: function(ctx, deltaTime) {
		this.alpha += deltaTime * 0.0008;
		var l = Math.sin(this.alpha);

		for(var i = 0; i < this.num; i++) {
			ctx.drawImage(this.imgNo[this.dustNo[i]], this.x[i] + l * this.amp[i], this.y[i]);
		}
	}
};