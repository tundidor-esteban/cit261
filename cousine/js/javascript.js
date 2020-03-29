var handler 	= new ListHandler("ingredients");

function removeItem(e){
	handler.removeByID(e);
}

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

function addRecipeLink(e){
	var id = e.target.getAttribute('data-recipe');
	if (!id){
		id = e.target.parentElement.getAttribute('data-recipe');
	}

	var btn = document.createElement('button');
  	btn.textContent = 'Show Recipe';
  	btn.classList.add('btn_big'); 
  	btn.id = 'showRecipe';
  	btn.setAttribute('data-id',id);
	document.getElementById('missingIngredients').appendChild(btn);
}

function showMissingIngredients(e){
		let data = e.target.getAttribute('data-missedIngredients');

		if (!data){
			data = e.target.parentElement.getAttribute('data-missedIngredients');
		}

		let missed = JSON.parse(data);
		document.getElementById('missingIngredients').innerHTML = '';
		missed.forEach((item) => {
			let li = document.createElement('li');
			let img = document.createElement('img');
			img.src = item.image;
			li.classList.add('ingredient');
			var text = document.createTextNode(item.originalName);
			li.appendChild(img);
			li.appendChild(text);
			document.getElementById('missingIngredients').appendChild(li);
		});
		addRecipeLink(e);
}

function showRecipe(recipeId){
	getRecipeById(recipeId,(results) =>{
		document.getElementById("recipeModal").style.display = "block";
		document.getElementById("modalTitle").innerHTML = results.title;
		document.getElementById("modalImg").src = results.image;
		document.getElementById("modalBody").innerHTML = results.summary;
	});
}

function dynamicHandler(e){
	if (hasClass(e.target, 'recipe') || hasClass(e.target, 'recipeImg')) {
		showMissingIngredients(e);
	}else if(e.target.id == 'showRecipe'){
		showRecipe(e.target.getAttribute('data-id'));
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 

	let input 		  = document.getElementById('inputIngredients');
	let addIngredient = document.getElementById('addIngredient');
	let ingredients   = document.getElementById('ingredients');
	let recipes   	  = document.getElementById('recipes');
	
	handler.setList(ingredients);
	var recipesList = new ListHandler("recipes",recipes);
	
  	//Topic Loops, functions, objects, parameters, etc
  	handler.getItems().forEach((item,id) => {
    	handler.appendItem(item,id);
  	});

  	//Topic Events & DOM
	input.addEventListener('keypress', (e) => {
	    if( e.keyCode === 13 ) {
	    	handler.insertItem(input.value,undefined,true);
	    	input.value = '';
	    }
	});
  
  	//Topic Events & DOM
	addIngredient.addEventListener('click', (e)=> {
	 handler.insertItem(input.value,undefined,true);
	 input.value = '';
	});

	//Topic AJAX & DOM
	document.getElementById('search').addEventListener('click', (e)=> {
		document.getElementById('waiting').classList.remove("hidden");
		recipes.innerHTML = '';
		findByIngredients(handler.getItems().join(","), (list) => {
				recipes.innerHTML = '';
				recipesList.clearAll();
				list.forEach((item,id) => {
					recipesList.insertItem(item,undefined,false);
			    	let li = document.createElement('li');
			    	let img = document.createElement('img');
		        	img.src = item.image;
		        	img.classList.add('recipeImg');
			  		var text = document.createTextNode(item.title);
      				li.setAttribute('data-missedIngredients',JSON.stringify(item.missedIngredients));
      				li.setAttribute('data-recipe',JSON.stringify(item.id));
      				li.id = 'recipe_'+id;
      				li.classList.add('recipe');
      				li.appendChild(img);
					li.appendChild(text);
			    	recipes.appendChild(li);
			    	document.getElementById('waiting').classList.add('hidden');
			  	});
		});
	});


	//Topic Events -  desktop Events
	document.addEventListener('click',  (e) => {
		dynamicHandler(e);
    });

	//Topic Events - Mobile Events
	document.addEventListener('touchstart', (e) => {
		dynamicHandler(e);
    });

	//TOPIC HTML 5 Canvas!
    var canvas = document.getElementById("subtitle");
	var ctx = canvas.getContext("2d");
	ctx.globalAlpha = 0.2;
	ctx.fillStyle = 'black';
	ctx.fillRect(1, 1, 500, 120);
	ctx.globalAlpha = 1;
	ctx.font = "40px Verdana";
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.fillText("Cooking Ideas", canvas.width/2, canvas.height/2,400);

	//Modal close
	document.getElementsByClassName("close")[0].addEventListener('click', (e)=> {
  		document.getElementById("recipeModal").style.display = "none";
	});
		//Modal close
	document.getElementsByClassName("close")[0].addEventListener('touchstart', (e)=> {
  		document.getElementById("recipeModal").style.display = "none";
	});
});