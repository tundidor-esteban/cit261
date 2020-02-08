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

  clearAll = () => {
    this.ls.clear();
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 

  //Elements
  let input = document.getElementById('item');
  let insert = document.getElementById('insert');
  let clear = document.getElementById('clear');
  let ul = document.getElementById('itemsList');

  //Handler
  let handler = new ListHandler(localStorage,ul);

  //Display init list
  let data = handler.getItems();
  data.forEach(item => {
    handler.appendItem(item);
  });

  input.addEventListener('keypress', (e) => {
    if( e.keyCode === 13 ) {
      handler.insertItem(input.value);
    }
  });
  
  insert.addEventListener('click', (e)=> {
    handler.insertItem(input.value);
  });

  clear.addEventListener('click', ()=> {
    handler.clearAll();
  });
});
