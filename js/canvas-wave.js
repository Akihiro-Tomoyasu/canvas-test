window.addEventListener('load', canvasWave, false);

function canvasWave(){
	var lineColor; //色
	var lineH; //線幅
	var T; // 周期
	var speed; //速度

	var heightRatio = 10; //高さ
	var w = document.documentElement.clientWidth;
	var h = w / heightRatio;
	
	var canvas = document.getElementById('canvasWave');
	canvas.width = w
	canvas.height = h;
	
	//リサイズ
	window.addEventListener('resize',function(){
		w = document.documentElement.clientWidth;
		h = w / heightRatio;
		canvas.width = w;
		canvas.height = h;
	},false);
	
	
	var ctx = canvas.getContext("2d");

	var s1 = s2 = s3 = s4 = s5 = 0;
	function loop(){ //繰り返される関数
		ctx.clearRect(0, 0, w, h);
		
		//波1
		drawWave('blue', 2, 1.6, s1); //(色,線幅,周期,速度)
		s1 += 5; //速度
		
		//波2
		drawWave('yellow', 2, 2.2, s2); //(色,線幅,周期,速度)
		s2 += 10; //速度
		
		//波3
		drawWave('red', 2, 3, s3); //(色,線幅,周期,速度)
		s3 += 15; //速度
		
		//波4
		drawWave('pink', 2, 4.1, s4); //(色,線幅,周期,速度)
		s4 += 20; //速度
		
		//波5
		drawWave('green', 2, 5.2, s5); //(色,線幅,周期,速度)
		s5 += 30; //速度

		//外枠
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.strokeRect(0, 0, w, h);
		
		//繰り返し
		requestAnimationFrame(loop);
	};

	loop();

	function drawWave(lineColor,lineH,T,degree){
		ctx.beginPath();
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = lineH;
		var shiten = (-1 * (h / 2 - lineH)) * Math.sin((2 * Math.PI / (w * T)) * degree) + (h / 2); //始点 = 幅振 * sinうんたら
		ctx.moveTo(0, shiten); //始点
		for (var x = 0; x < w; x++) {
			var y = (-1 * (h / 2 - lineH)) * Math.sin((2 * Math.PI / (w * T)) * (degree + x));
			ctx.lineTo(x, y + (h / 2));
		}
		ctx.stroke();
	}
}