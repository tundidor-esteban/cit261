class Man {
	constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return 'Hi! My name is ' + this.name + ', and I am a ' + this.level +  '.';
    }

}

class Hero extends Man {
  constructor (name) {
    super(name, 'hero');
  }
}


class Villain extends Man {
  constructor (name) {
    super(name, 'villain');
  }

  bye(){
    console.log('holo');
  }
}

class Citizen extends Man {
  constructor (name) {
    super(name, 'citizen');
  }

  greet() {
      let message = super.greet();
        return message;
  }

  bye(){
    console.log('bye bye');
  }
}


document.addEventListener("DOMContentLoaded", function(event) { 
	let name = document.getElementById('name');

	//I know there are better ways to do it, but for a example is good enough.
	document.getElementById('hero').addEventListener("click",()=>{
            let character = new Hero(name.value); 
            alert(character.greet());
        });
	document.getElementById('villain').addEventListener("click",()=>{
            let character = new Villain(name.value); 
            alert(character.greet());
        });
	document.getElementById('citizen').addEventListener("click",()=>{
            let character = new Citizen(name.value); 
            alert(character.greet());
        });
});
