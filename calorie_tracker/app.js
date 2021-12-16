// storage controller

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
        items: [
            //{id: 0, name: 'Steak Dinner', calories: 1200},
            //{id: 1, name: 'Cookie', calories: 400},
            //{id: 2, name: 'Eggs', calories: 300}
        ],
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
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalInput).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
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
const App = (function(ItemCtrl, UICtrl){

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

        UICtrl.clearEditState();
        
        e.preventDefault();
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
})(ItemCtrl,UICtrl);

//Initialize App
App.init();