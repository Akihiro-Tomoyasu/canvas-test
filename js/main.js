window.addEventListener('load', draw, false);

function draw(){
	var r = 50; //振幅
	var T  = 1900; // 周期
	var degree = 0; //角度

	var w = document.documentElement.clientWidth;
	var h = 340;
	
	//リサイズ
	window.addEventListener('resize',function(){
		w = document.documentElement.clientWidth;
		T = w / 2
	},false);
	
	var canvas = document.getElementById('testCanvas');
	canvas.width = w
	canvas.height = h;
	
	
	var ctx = canvas.getContext("2d");

	function loop(){ //繰り返される関数
		ctx.clearRect(0, 0, w, h);
		ctx.beginPath();
		ctx.strokeStyle = 'green';
		ctx.lineWidth = 5;
		
		drawWave(degree);
		
		ctx.stroke();
		degree += 10;
		
		requestAnimationFrame(loop);
	}

	loop();

	function drawWave(degree) {
		var shiten = -r * Math.sin((2 * Math.PI / T) * degree) + (h / 2);
		ctx.moveTo(0, shiten); //始点
		for (var x = 0; x < w; x++) {
			var y = -r * Math.sin((2 * Math.PI / T) * (degree + x));
			console.log('y',y);
			ctx.lineTo(x, y + (h / 2));
		}
	}
}