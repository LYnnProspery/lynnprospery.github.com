/*
*moving animation js for quiz2333
*by lynnprosper
*/


		function getStyle(obj, attr) {
				if(obj.currentStyle) {
					return obj.currentStyle[attr];
				} else {
					return getComputedStyle(obj, false)[attr];
				}			
			}


			var timer = null;
			function startMoving(obj, json, fn) {
				
				clearInterval(obj.timer);
				obj.timer = setInterval(function() {
					var bStop = true;			//所有运动都停止了
					for(attr in json){
						//取当前的值
						var iCur = 0;
				
						if(attr == 'opacity'){
							iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
						} else {
							 iCur = parseInt(getStyle(obj, attr));
						}	
						//算速度
						var iSpeed = (json[attr] - iCur) / 8;
						iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
						//检测停止
						if(json[attr] != iCur) {
							bStop = false;
						}
						if(attr == 'opacity') {
							obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
							obj.style.opacity = (iCur + iSpeed) / 100;				
						} else{
							obj.style[attr] = iCur + iSpeed +'px';					
						}		
					}
					if(bStop == true) {
						clearInterval(obj.timer);
						if(fn){
							fn();
						}
					}
				}, 30);
			}	


















