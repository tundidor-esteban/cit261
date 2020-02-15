document.addEventListener("DOMContentLoaded", function(event) { 

	//Elements
	let start = document.getElementById('start');

	//animations and other effects triggered with a click
	start.addEventListener('click', (e)=> {
		let circle = document.getElementById('circle');

		circle.classList.add('grow');

		//timed only for fu
		setTimeout(()=>{circle.classList.add('translation'); }, 500);
		setTimeout(()=>{
			circle.classList.remove("circle");
			circle.classList.remove("grow");
			circle.classList.add('box');
			circle.classList.add('small'); }, 1000);
		setTimeout(()=>{circle.classList.add('rotation'); }, 1500);
		

  	});


});