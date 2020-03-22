class ListHandler {
  constructor(name, ul) {
      this.ls = localStorage;
      this.list = ul;
      this.name = name;
  }

  setList = (ul) => {
    this.list =ul;
  }

  appendItem = (text,id) => {

    if(id === undefined ) {
      id = this.getItems().length;
    }

    if(text != ''){
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.textContent = '(X)';
      a.href = 'javascript:removeItem('+id+')';
      li.textContent = text + ' ';
      li.id = this.name + '_' +id;
      li.appendChild(a);
      this.list.appendChild(li);
    }
  }

  insertItem = (text,id,append) => {

    if(id === undefined ) {
      id = this.getItems().length;
    }

    let itemsArray = this.getItems();
    if(!itemsArray.includes(text)){
      if(append === true){
          this.appendItem(text,id);
      }
      itemsArray.push(text);
      this.ls.setItem(this.name, JSON.stringify(itemsArray));    
    }
  }

  getItems = () => {
      let itemsArray = this.ls.getItem(this.name) ? JSON.parse(this.ls.getItem(this.name)) : [];
      return itemsArray;
  }

  show = (input) => {
      input.value = this.ls.getItem(this.name) ? this.ls.getItem(this.name): "[]";
  }

  replace = (value) => {
      this.ls.setItem(this.name,value);
  }

  removeByID = (id) => {
    let items = this.getItems();
    items.splice(id,1);
    this.replace(JSON.stringify(items));

    this.list.removeChild(document.getElementById(this.name +'_' + id));

  }

  clearUl = () =>{
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  clearAll = () => {
    this.ls.setItem(this.name,[]);
    this.clearUl();
  }
}