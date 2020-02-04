document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('btn_stringify').addEventListener("click",()=>{
		var elements = JSON.parse(topics);
		var string = JSON.stringify(elements[Math.floor(Math.random() * elements.length)]);
		document.getElementById("div_stringify").innerHTML = string;
    });
	
});