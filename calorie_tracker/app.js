// storage controller
const StorageCtrl = (function(){
    // PUBLIC METHODS
    return {
        storeItem: function(item){
            let items;
            // CHECK IF ANY ITEMS IN LS
            if(localStorage.getItem('items') === null){
                items = [];
                items.push(item);

                // SET LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));

                items.push(item);

                // RESET LS
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function(){
            let items
            if(localStorage.getItem('items' === null)){
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item,index){
                if(updatedItem.id === item.id){
                    items.splice(index, 1, updatedItem);
                }
            });  
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item,index){
                if(id === item.id){
                    items.splice(index, 1);
                }
            });  
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }
    }    
})();

// item controller
const ItemCtrl = (function(){

    // item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // create datastructure / state
    const data = {
        items: StorageCtrl.getItemsFromStorage(),
        currItem: null,
        totalCalories: 0
    }

    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let ID;

            // create it
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0;                
            }

            // calories to number
            calories = parseInt(calories); 

            // create a new item
            newItem = new Item(ID, name, calories);
            data.items.push(newItem);

            return newItem;
        },  
        getItemById: function(id){
            let found = null;
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found
        },
        updateItem: function(name, calories){
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            
            return found;
        },
        deleteItem: function(id){
            // GET ID's
            const ids = data.items.map(function(item){
                return item.id;
            });

            // GET INDEX
            const index = ids.indexOf(id);

            // SPLICE FROM ARRAY
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        },
        setCurrentItem: function(item){
            data.currItem = item;
        },
        getCurrentItem: function(){
            return data.currItem;
        },
        getTotalCalories: function(){
            let total = 0;
            
            data.items.forEach(function(item){
                total += item.calories;
            });

            data.totalCalories = total;

            return data.totalCalories;
        },
        logData: function(){
            return data;
        }
    }
})();

// ui controller
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCalInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    // public methods
    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>`;
            });

            // inserting list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCalInput).value 
            }
        },
        addListItem: function(item){

            // show list
            document.querySelector(UISelectors.itemList).style.display = 'block';

            // create list item
            const li = document.createElement('li');

            // add class
            li.className = 'collection-item';

            // add id
            li.id = `item-${item.id}`;

            // add html
            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

            // insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // gives us node list, need to conv to array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;

                }
            });
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalInput).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            // turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                item.remove();
            });
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
})();

// app controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){

    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();

        // add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        //disable submit on enter
        document.addEventListener('keypress', function(e){
            if(e.key === 'Enter'){
                e.preventDefault();
                return false;
            }
        });

        // edit icon click
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditSubmit);

        // update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        // delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // back button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        // clear all
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
    }

    // add item submit
    const itemAddSubmit = function(e){

        // get form input from UI controller
        const input = UICtrl.getItemInput();

        // check for name / cal input
        if(input.name !== '' && input.calories !== ''){

            // add item
            const newItem = ItemCtrl.addItem(input.name,input.calories);

            // add item to list
            UICtrl.addListItem(newItem);

            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // add total calories to ui
            UICtrl.showTotalCalories(totalCalories);

            // STORE IN LS
            StorageCtrl.storeItem(newItem);
            // clear fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }

    // click edit item
    const itemEditSubmit = function(e){
        if(e.target.classList.contains('edit-item')){
            // GET THE LIST ITEM ID
            const listId = e.target.parentNode.parentNode.id;
            
            // break into array (above gives us item-0 etc but we just need num)
            const listIdArr = listId.split('-');
            
            // get actual id
            const id = parseInt(listIdArr[1]);

            // get entire item
            const itemToEdit = ItemCtrl.getItemById(id);
            
            // set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            //  add item to form
            UICtrl.addItemToForm();
        }

        e.preventDefault();
    }

    // update item submit
    const itemUpdateSubmit = function(e){
        // GET ITEM INPUT
        input = UICtrl.getItemInput();

        // UPDATE ITEM
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // UPDATE UI
        UICtrl.updateListItem(updatedItem);
        
        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();
        
        e.preventDefault();
    }

    // delete button event
    const itemDeleteSubmit = function(e){
        // GET CURRENT ITEM
        const currentItem = ItemCtrl.getCurrentItem();

        // DELETE FROM DATASTRUCTURE
        ItemCtrl.deleteItem(currentItem.id);

        // DELETE FROM UI
        UICtrl.deleteListItem(currentItem.id);

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // DELETE FROM LS
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    // CLEAR ITEMS EVENT
    const clearAllItemsClick = function(e){
        // delete all items from datastructure
        ItemCtrl.clearAllItems();

        // get total calories
        const totalCalories = ItemCtrl.getTotalCalories();

        // add total calories to ui
        UICtrl.showTotalCalories(totalCalories);

        // REMOVE UI
        UICtrl.removeItems();

        // CLEAR FROM LOS
        StorageCtrl.clearItemsFromStorage();

        // HIDE UL
        UICtrl.hideList();
    }

    // public methods
    return {
        init: function(){

            // clear edit state or set initial state
            UICtrl.clearEditState();
            
            // fetch items from datastructure
            const items = ItemCtrl.getItems();

            // check if any items if not hide
            if(items.length === 0){
                UICtrl.hideList();
            } else {
                // populate list with items
                UICtrl.populateItemList(items); 
            }

            // get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            // add total calories to ui
            UICtrl.showTotalCalories(totalCalories);

            // load even listners
            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

//Initialize App
App.init();