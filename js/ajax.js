const APIKEY = '444c8c15f9d54ec9bf5be840e3f5757c';
function ajaxExample(){
	var myRequest = new XMLHttpRequest();
	var value =  document.getElementById('search').value;
	myRequest.open('GET', 'https://api.spoonacular.com/food/ingredients/autocomplete?query='+value+'&apiKey='+ APIKEY);
	myRequest.onreadystatechange = function () { 
    	if (myRequest.readyState === 4) {
    		let results = JSON.parse(myRequest.responseText);
    		console.log(results.length);
    		if(results.length >0){
    			var ingredient = results[Math.floor(Math.random() * (results.length -1))];
        		document.getElementById('ajax-content').innerHTML = '<img width="100px" src="https://spoonacular.com/cdn/ingredients_100x100/'+ingredient.image+'"/>'+ ingredient.name;
        	} else{
        		document.getElementById('ajax-content').innerHTML = 'no result found :(';
        	}
    	}
	};
	myRequest.send();
}


function ajaxPostExample(){
	var data = 'text=' + document.getElementById('textToAnalize').value;

	var myRequest = new XMLHttpRequest();
	
	myRequest.open("POST", "https://api.spoonacular.com/food/detect?apiKey=" + APIKEY);
	myRequest.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	myRequest.setRequestHeader("cache-control", "no-cache");

	myRequest.onreadystatechange = function () { 
	  if (myRequest.readyState === 4) {
	  	var response = JSON.parse(myRequest.responseText)
	  	var ol = document.createElement("ol");
	  	response.annotations.forEach(item => {
	  		var li = document.createElement("li");
	  		var img = document.createElement("img");
	  		img.src = item.image;
	  		img.style.width = '100px';
	  		var text = document.createTextNode(item.annotation + '('+item.tag+')');
			li.appendChild(img);
			li.appendChild(text);
			ol.appendChild(li);
	  	});
	    document.getElementById('ajax-content-done').appendChild(ol);
	  }
	}

	myRequest.send(data);


}

//