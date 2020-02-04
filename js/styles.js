function classes(){
    let div = document.querySelector("#testDiv");
    div.classList.add("classA"); // add class "classA"
    div.classList.add("classB"); // add class "classB"
    div.classList.add("classC"); // add class "classC"
    alert(div.classList);

    div.classList.remove("classC"); // remove class "classC"

    alert(div.classList);
    div.classList.remove("classB"); // remove class "classB"
    div.classList.remove("classA"); // remove class "classA"
}

function setClass(elem,className){
    elem.className = ''; //clear it
    elem.classList.add(className);
}

document.addEventListener("DOMContentLoaded", function() { 
    let preBlocks = document.querySelector(".code");
    let testDiv = document.querySelector("#exampleDiv");

	//I know there are better ways to do it, but for a example is good enough.
	document.getElementById('orange').addEventListener("click",(event)=>{ 
        preBlocks.style.backgroundColor = event.target.id;
    });
    document.getElementById('white').addEventListener("click",(event)=>{ 
        preBlocks.style.backgroundColor = event.target.id;
    });
    document.getElementById('black').addEventListener("click",(event)=>{ 
        preBlocks.style.backgroundColor = event.target.id;
    });
    document.getElementById('red').addEventListener("click",(event)=>{ 
        preBlocks.style.backgroundColor = event.target.id;
    });

    if (preBlocks.style.fontSize == "") {
        preBlocks.style.fontSize = "1.0em";
    }

    document.getElementById('increase').addEventListener("click",()=>{ 
        preBlocks.style.fontSize = parseFloat(preBlocks.style.fontSize) + (0.2) + "em";
    });
    document.getElementById('smaller').addEventListener("click",()=>{ 
        preBlocks.style.fontSize = parseFloat(preBlocks.style.fontSize) + (-0.2) + "em";
    });

    document.getElementById('alert').addEventListener("click",()=>{ 
        classes();
    });

    document.getElementById('classA').addEventListener("click",(event)=>{ 
        setClass(testDiv,event.target.id);
    });
    document.getElementById('classB').addEventListener("click",(event)=>{ 
        setClass(testDiv,event.target.id);
    });
    document.getElementById('classC').addEventListener("click",(event)=>{ 
        setClass(testDiv,event.target.id);
    });
	
});