class myList {
    input = document.getElementById('newInput');
    listUI = document.getElementById('list');
    listItems = [];
    addItemsToList() {
        let value = this.input.value;
        this.listItems.push(value);
        console.log(this.listItems);
        this.input.value = '';
        let newItemElement = document.createElement("li");
        newItemElement.id = value;
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('mt-2');
        let col = document.createElement('div');
        col.classList.add('d-flex');
        col.classList.add('justify-content-between');
        let text = document.createElement('p');
        text.innerHTML = value;
        let button = document.createElement('button');
        button.classList.add("btn");
        button.classList.add("btn-danger");
        button.innerHTML = "Delete";
        button.onclick = ()=>this.deleteItems(value)
        ;
        col.appendChild(text);
        col.appendChild(button);
        row.appendChild(col);
        newItemElement.appendChild(row);
        this.listUI.appendChild(newItemElement);
    }
    deleteItems(value) {
        let UIitemToBeDeleted = document.getElementById(value);
        UIitemToBeDeleted.remove();
        console.log(value);
        for(let i = 0; i < this.listItems.length; i++)if (this.listItems[i] === value) delete this.listItems[i];
    }
}
let list = new myList();

//# sourceMappingURL=index.8f215b5e.js.map
