const APIKEY = '444c8c15f9d54ec9bf5be840e3f5757c';

function findByIngredients(ingredients,callback){
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ingredients+'&apiKey='+ APIKEY);
	myRequest.onreadystatechange = function () { 
    	if (myRequest.readyState === 4) {
    		let results = JSON.parse(myRequest.responseText);
    		if(results.length >0){
    			callback(results);
        	}
    	}
	};
	myRequest.send();
}

function getRecipeById(id,callback){
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'https://api.spoonacular.com/recipes/'+id+'/information?includeNutrition=false&apiKey='+ APIKEY);
	myRequest.onreadystatechange = function () { 
    	if (myRequest.readyState === 4) {
    		let results = JSON.parse(myRequest.responseText);
            callback(results);
    	}
	};
	myRequest.send();
}
