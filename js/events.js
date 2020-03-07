let clicks = 0;

function clickCounter(e,counter){
	let text = '';

	    switch(counter){
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

	    counter++;
	    e.target.innerHTML = text;
	    return counter;
}


//Yes! it is other event! And it is triggered when the DOM is loaded completely.
document.addEventListener("DOMContentLoaded", function(event) { 
	
	document.getElementById('click').addEventListener("click",(e)=>{
	    clicks = clickCounter(e,clicks);
	});

	document.getElementById('click').addEventListener("touchstart",(e)=>{
	    clicks = clickCounter(e,clicks);
	});

	document.getElementById('hover').addEventListener("mouseover",(e)=>{
		e.target.innerHTML = 'I changed!';
	})


	document.getElementById('hover').addEventListener("mouseout",(e)=>{
		e.target.innerHTML = 'I returned!';
	})

	document.getElementById('updown').addEventListener("mousedown",(e)=>{
		e.target.innerHTML = 'Release me now! Don\'t Click me ;)';
	})

	document.getElementById('updown').addEventListener("touchmove",(e)=>{
		e.target.innerHTML = 'Release me now! Don\'t Touch me ;)';
	})

	document.getElementById('updown').addEventListener("mouseup",(e)=>{
		e.target.innerHTML = 'Thanks, I have feelings to keep safe. Don\'t Click me ;)';
	})

	document.getElementById('updown').addEventListener("touchend",(e)=>{
		e.target.innerHTML = 'Thanks, I have feelings to keep safe. Don\'t Touch me ;)';
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