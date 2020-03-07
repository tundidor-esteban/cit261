//run when the document has finished to load
document.addEventListener("DOMContentLoaded", function(event) { 
	//Elements
	let example1 = document.getElementById('example1');
	let example2 = document.getElementById('example2');
	let text1 = document.getElementById('text1');


	document.getElementById('add').addEventListener('mouseover', (e) => {
		let div = document.createElement('div');
		let color = getRandomColor();
      	div.textContent = color;
      	div.style.backgroundColor = color;
      	div.style.color = getRandomColor();
      	div.classList.add('domExample');
      	example1.appendChild(div);
  	});

	document.getElementById('remove').addEventListener('mouseover', (e) => {
		//check if exists 
		if (example1.lastChild){
			//remove first or last node based in the size
			if( example1.children.length % 2){
				example1.removeChild(example1.firstChild);
			}else{
				example1.removeChild(example1.lastChild);	
			}
			
		}

	});

	document.getElementById('clone').addEventListener('click', (e) => {
		if(text1 && example2){
			var copy = text1.cloneNode(true);
			example2.appendChild(copy);
		}

	});

	document.getElementById('replace').addEventListener('click', (e) => {
		var div = document.createElement('div');
		var original = document.getElementById('text1');
		div.textContent = 'Hi, I am the replace';
		//it will replace only the first because when we create the relation at line 14, it was only the original
		example2.replaceChild(div, original); 
	});

});