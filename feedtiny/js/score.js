var Score = function() {
	this.fruitNum = 0;
	this.isDouble = 1;
	this.score = 0;
	this.isDead = false;
	this.alpha = 0;
};
Score.prototype = {
	draw: function(ctx, width, height, deltaTime) {
		ctx.save();



		ctx.fillStyle = 'white';
		ctx.font = '20px Verdana';
		ctx.textAlign = 'center';
		ctx.shadowBlur = 10;
		ctx.shadowColor = 'white';
		ctx.fillText('果实: ' + this.fruitNum, width / 2, height - 80);
		ctx.fillText('加倍: ' + this.isDouble, width / 2, height - 50);
		ctx.fillText('得分: ' + this.score, width / 2, 50);

		if (this.isDead) {
			this.alpha += deltaTime * 0.003; 
			ctx.font = '30px Verdana';
			ctx.fillStyle = 'rgba(255,255,255,' + this.alpha+ ')';
			ctx.fillText('GAMEOVER', width / 2, height / 2 - 100);
		}
		ctx.restore();
	},
	addScore: function() {
		this.score += this.fruitNum * this.isDouble;
	}
};
