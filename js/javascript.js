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
	myRequest.open('GET', 'https://dummy.restapiexample.com/api/v1/employees');
	myRequest.onreadystatechange = function () { 
    	if (myRequest.readyState === 4) {
    		var employee = JSON.parse(myRequest.responseText).data[Math.floor(Math.random() * 25)];
        	document.getElementById('ajax-content').innerHTML = employee.employee_name + ' ('+ employee.employee_age +')';
    	}
	};
	myRequest.send();
}


function ajaxPostExample(){
	var myRequest = new XMLHttpRequest();
var json = JSON.stringify('{"name":"Esteban Tundidor","salary":"123","age":"23"}');
myRequest.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true);
myRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
myRequest.onreadystatechange = function () { 
  if (myRequest.readyState === 4) {
    document.getElementById('ajax-content-done').innerHTML = 'Done!';
  }
}
myRequest.send(json);
}

document.addEventListener("DOMContentLoaded", function(event) { 
 // is only executed when the DOM is fully loaded
	displayMenu();
});

