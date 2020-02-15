//Yes! it is other event! And it is triggered when the DOM is loaded completely.
document.addEventListener("DOMContentLoaded", function(event) { 
	
	let clickCounter = 0;
	document.getElementById('click').addEventListener("click",(e)=>{
	    let text = '';

	    switch(clickCounter){
	    	case 0:
	    		text = 'Try again!';
	    		break;
    		case 1:
	    		text = 'Happy? again!';
	    		break;
    		case 2:
	    		text = 'oooh your a kind of bully? try again!';
	    		break;
    		case 3:
	    		text = 'isEnough? right? ';
	    		break;
	    	default:
	    		text = 'Thanks!';
	    }

	    clickCounter++;
	    e.target.innerHTML = text;
	});

	document.getElementById('hover').addEventListener("mouseover",(e)=>{
		e.target.innerHTML = 'I changed!';
	})
	document.getElementById('hover').addEventListener("mouseout",(e)=>{
		e.target.innerHTML = 'I returned!';
	})

	document.getElementById('updown').addEventListener("mousedown",(e)=>{
		e.target.innerHTML = 'Release me now!';
	})
	document.getElementById('updown').addEventListener("mouseup",(e)=>{
		e.target.innerHTML = 'Thanks, I have feelings to keep safe.';
	})
	document.getElementById('updown').addEventListener("mouseout",(e)=>{
		e.target.innerHTML = 'click me smoothly this time!';
	})

	document.getElementById('focus').addEventListener("focus",(e)=>{
		document.getElementById('focusDiv').innerHTML = 'on focus now!';
	})

	document.getElementById('focus').addEventListener("blur",(e)=>{
		document.getElementById('focusDiv').innerHTML = 'He lost your focus!';
	})

	document.getElementById('change').addEventListener("change",(e)=>{
		document.getElementById('changeDiv').innerHTML = 'I feel weird, something have been changed';
	})


});