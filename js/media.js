document.addEventListener("DOMContentLoaded", function(event) { 

	let dx = 4;
	let dy = 4;
	let y = 150;
	let x = 10;

	let video = document.getElementById('video');
	document.getElementById('play').addEventListener("click",(e)=>{
		if (video.paused) {
			video.play(); 
			e.target.innerHTML = 'Pause';
		} else {
			video.pause();
			e.target.innerHTML = 'Play';
		}
	});

	document.getElementById('mute').addEventListener("click",(e)=>{
		if (video.muted) {
			video.muted= false;
			e.target.innerHTML = 'Mute';
		} else {
			video.muted= true;
			e.target.innerHTML = 'UnMute';
		}
	});

	document.getElementById('size').addEventListener("click",(e)=>{
			video.width = video.width * 1.5; 
	});

	setInterval(()=>{
		element = document.getElementById('canvas').getContext('2d');
		
		//create circle and give efects
		element.clearRect(0,0,300,300);
		element.beginPath();
		element.arc(x,y,20,0,Math.PI*2,true);
		element.closePath();
		element.fill();

		if( x<0 || x>300){
			dx =-dx+Math.floor(Math.random() * 2);
			element.fillStyle=getRandomColor();
		}

		if( y<0 || y>300){
			dy =-dy+Math.floor(Math.random() * 2);
			element.fillStyle = getRandomColor();
		}

		// avoid rolling out of bounds 
		if(x>300){x = 289;}
		if(y>300){y = 289;}

		x+=dx;
		y+=dy;

	  } ,20); 

});