window.addEventListener('load', canvasWave, false);

function canvasWave(){
	var lineColor; //色
	var lineH; //線幅
	var T; // 周期
	var speed; //速度

	var heightRatio = 10; //高さ
	var w = document.documentElement.clientWidth;
	var h = w / heightRatio;
	
	var canvas = document.getElementById('testCanvas');
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

	function loop(){ //繰り返される関数
		ctx.clearRect(0, 0, w, h);
		wave1();
		wave2();
		wave3();
		requestAnimationFrame(loop);
	};

	loop();

	var degree = 0;
	function wave1(){
		lineColor = 'red'; //色
		lineH = 2; //線幅
		T = 2; // 周期
		speed = 20; //速度
		drawWave(lineColor,lineH,degree);
		degree += speed;
	}
	
	var degree2 = 0;
	function wave2(){
		lineColor = 'red'; //色
		lineH = 2; //線幅
		T = 3.5; // 周期
		speed = 5; //速度
		drawWave(lineColor,lineH,degree2);
		degree2 += speed;
	}

	var degree3 = 0;
	function wave3(){
		lineColor = 'red'; //色
		lineH = 2; //線幅
		T = 5; // 周期
		speed = 5; //速度
		drawWave(lineColor,lineH,degree3);
		degree3 += speed;
	}

	function drawWave(lineColor,lineH,degree) {
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