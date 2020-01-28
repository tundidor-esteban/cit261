var topics = '['
    			+'{"title":"JavaScript","url":"javascript.html"},'
				+'{"title":"JavaScript Objects","url":"jsobjects.html"},'
				+'{"title":"JSON","url":"json.html"},'
				+'{"title":"AJAX","url":"ajax.html"},'
				+'{"title":"Local Storage","url":"localstorage.html"},'
				+'{"title":"Document Object Model","url":"dom.html"},'
				+'{"title":"CSS3 Using JavaScript","url":"cssUsingJS.html"},'
				+'{"title":"CSS3 Transitions, Animations, and Transformations","url":"transitions.html"},'
				+'{"title":"JavaScript Events","url":"events.html"},'
				+'{"title":"HTML5 Tags for Media","url":"media.html"},'
				+'{"title":"CSS3 Transitions","url":"cssTransitions.html"},'
				+'{"title":"CSS3 Transforms","url":"cssTransforms.html"},'
				+'{"title":"CSS3 Animations","url":"cssAnimations.html"}'
    			+']';

function displayMenu() {
    var elements = JSON.parse(topics);
    var ol = document.getElementById("menu");
    if (typeof(ol) != 'undefined' && ol != null){
	    for (var i = 0; i < elements.length ; i++) {
	    	  var li = document.createElement("li");
	    	  var a = document.createElement("a");
	    	  
	    	  a.appendChild(document.createTextNode(elements[i].title));
	    	  a.title = elements[i].title;
	    	  a.href = 'topics/' + elements[i].url;

	  		  li.appendChild(a);
	  		  ol.appendChild(li);
	    }
    }
}

function ajaxExample(){
	var myRequest = new XMLHttpRequest();
	myRequest.open('GET', 'http://dummy.restapiexample.com/api/v1/employees');
	myRequest.onreadystatechange = function () { 
    	if (myRequest.readyState === 4) {
    		var response = JSON.parse(myRequest.responseText);
        	document.getElementById('ajax-content').innerHTML = response.data[Math.floor(Math.random() * 25)].employee_name;
    	}
	};
	myRequest.send();
}

document.addEventListener("DOMContentLoaded", function(event) { 
 // is only executed when the DOM is fully loaded
	displayMenu();
});

