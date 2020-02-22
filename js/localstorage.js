class ListHandler {
  constructor(ls, ul) {
      this.ls = ls;
      this.list = ul;
  }

  appendItem = (text) => {
    if(text != ''){
      let li = document.createElement('li');
      li.textContent = text;
      this.list.appendChild(li);
    }
  }

  insertItem = (text) => {
    let itemsArray = this.getItems();
    if(!itemsArray.includes(text)){
      this.appendItem(text);
      itemsArray.push(text);
      this.ls.setItem('items', JSON.stringify(itemsArray));    
    }
  }

  getItems = () => {
      let itemsArray = this.ls.getItem('items') ? JSON.parse(this.ls.getItem('items')) : [];
      return itemsArray;
  }

  show = (input) => {
      input.value = this.ls.getItem('items') ? this.ls.getItem('items'): "[]";
  }

  replace = (value) => {
      this.ls.setItem('items',value);
  }

  clearUl = () =>{
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  clearAll = () => {
    this.ls.clear();
    this.clearUl();
  }
}

function getRadioVal(name) {
    var val;
    // get list of radio buttons with specified name
    var radios = document.getElementsByName(name);
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

function displayList(handler,data){
  handler.getItems().forEach(item => {
    handler.appendItem(item);
  });
}

document.addEventListener("DOMContentLoaded", function(event) { 

  //Elements
  let input = document.getElementById('item');
  let insert = document.getElementById('insert');
  let clear = document.getElementById('clear');
  let show = document.getElementById('show');
  let replace = document.getElementById('replace');
  let ulLs = document.getElementById('itemsListLS');
  let ulSs = document.getElementById('itemsListSS');

  //Handler
  let handlerLS = new ListHandler(localStorage,ulLs);
  let handlerSS = new ListHandler(sessionStorage,ulSs);

  //Display init list
  displayList(handlerLS);
  displayList(handlerSS);

  input.addEventListener('keypress', (e) => {
    if( e.keyCode === 13 ) {
      if(getRadioVal('storage') == 'local'){
        handlerLS.insertItem(input.value);
      }else{
        handlerSS.insertItem(input.value);
      }
    }
  });
  
  insert.addEventListener('click', (e)=> {
      if(getRadioVal('storage') == 'local'){
        handlerLS.insertItem(input.value);
      }else{
        handlerSS.insertItem(input.value);
      }

  });

  clear.addEventListener('click', ()=> {
    if(getRadioVal('storage') == 'local'){
        handlerLS.clearAll();
      }else{
        handlerSS.clearAll();        
      }
  });

  show.addEventListener('click', ()=> {
    if(getRadioVal('storage') == 'local'){
        handlerLS.show(input);
      }else{
        handlerSS.show(input);        
      }
  });

  replace.addEventListener('click', ()=> {
    let handler;
    if(getRadioVal('storage') == 'local'){
        handler =  handlerLS;
      }else{
        handler =  handlerSS;
      }

      handler.replace(input.value);
      handler.clearUl();
      displayList(handler);
  });


});
