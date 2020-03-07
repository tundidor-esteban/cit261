var topics = '['
    			+'{"title":"JavaScript","url":"javascript.html"},'
				+'{"title":"Objects","url":"jsobjects.html"},'
				+'{"title":"JSON","url":"json.html"},'
				+'{"title":"AJAX","url":"ajax.html"},'
				+'{"title":"Local Storage","url":"localstorage.html"},'
				+'{"title":"Document Object Model","url":"dom.html"},'
				+'{"title":"CSS3 Using JavaScript","url":"cssUsingJS.html"},'
				+'{"title":"CSS3 Transitions, Animations, and Transformations","url":"transitions.html"},'
				+'{"title":"Events","url":"events.html"},'
				+'{"title":"HTML5 Tags for Media","url":"media.html"},'
				+'{"title":"CSS3 Transitions","url":"cssTransitions.html"},'
				+'{"title":"CSS3 Transforms","url":"cssTransforms.html"},'
				+'{"title":"CSS3 Animations","url":"cssAnimations.html"}'
    			+']';

function displayMenu(folder,idMenu) {
    var elements = JSON.parse(topics);
    var ol = document.getElementById(idMenu);
    if (typeof(ol) != 'undefined' && ol != null){
	    for (var i = 0; i < elements.length ; i++) {
	    	  var li = document.createElement("li");
	    	  var a = document.createElement("a");
	    	  
	    	  a.appendChild(document.createTextNode(elements[i].title));
	    	  a.title = elements[i].title;
	    	  a.href = folder + elements[i].url;

	  		  li.appendChild(a);
	  		  ol.appendChild(li);
	    }
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createHorizontalMenu() {
	var mainDiv = document.getElementById('mainContent');
	if (mainDiv){
		var ul = document.createElement("ul");
		ul.id = 'menu';
		ul.classList.add('horizontalMenu');
		mainDiv.parentNode.insertBefore(ul,mainDiv);
		displayMenu('','menu');	
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	if(!document.getElementById('menu')){
		createHorizontalMenu();
	} else {
		displayMenu('topics/','menu');	
	}
 // is only executed when the DOM is fully loaded
	
});

