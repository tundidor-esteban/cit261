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