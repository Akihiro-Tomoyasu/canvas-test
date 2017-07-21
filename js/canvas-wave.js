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

	var s1 = s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = s10 = 0;
	function loop(){ //繰り返される関数
		ctx.clearRect(0, 0, w, h);
		
		//波1
		drawWave('blue', 2, 2, 100, s1); //(色,線幅,周期,振幅,速度)
		s1 += 10; //速度
		
		//波2
		drawWave('yellow', 2, 2, 90, s2); //(色,線幅,周期,振幅,速度)
		s2 += 10; //速度
		
		//波3
		drawWave('red', 2, 2, 80, s3); //(色,線幅,周期,振幅,速度)
		s3 += 10; //速度
		
		//波4
		drawWave('pink', 2, 2, 70, s4); //(色,線幅,周期,振幅,速度)
		s4 += 10; //速度
		
		//波5
		drawWave('green', 2, 2, 60, s5); //(色,線幅,周期,振幅,速度)
		s5 += 10; //速度

		drawWave('green', 2, 2, 50, s6); //(色,線幅,周期,振幅,速度)
		s6 += 10; //速度
		
		drawWave('green', 2, 2, 40, s7); //(色,線幅,周期,振幅,速度)
		s7 += 10; //速度
		
		drawWave('green', 2, 2, 30, s8); //(色,線幅,周期,振幅,速度)
		s8 += 10; //速度
		

		//外枠
		ctx.beginPath();
		ctx.strokeStyle = "rgb(0, 0, 0)";
		ctx.strokeRect(0, 0, w, h);
		
		//繰り返し
		requestAnimationFrame(loop);
	};

	loop();

	function drawWave(lineColor,lineH,T,H,S){
		ctx.beginPath();
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = lineH;
		var shiten = (-1 * (h / 2 - lineH)) * Math.sin((2 * Math.PI / (w * T)) * S) + (h / 2); //始点 = 幅振 * sinうんたら
		ctx.moveTo(0, shiten); //始点
		for (var x = 0; x < w; x++) {
			var y = (-1 * (h / 2 - lineH)) * Math.sin((2 * Math.PI / (w * T)) * (S + x)) * (0.01 * H);
			ctx.lineTo(x, y + (h / 2));
		}
		ctx.stroke();
	}
}