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
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
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
        logData: function(){
            return data;
        }
    }
})();

// ui controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCalInput: '#item-calories'
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
        getSelectors: function(){
            return UISelectors;
        }
    }
})();

// app controller
const App = (function(ItemCtrl, UICtrl){
    const loadEventListeners = function(){
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
    }
    // add item submit
    const itemAddSubmit = function(e){
        // get form input from UI controller
        const input = UICtrl.getItemInput();
        // check for name / cal input
        if(input.name !== '' && input.calories !== ''){
            // add item
            const newItem = ItemCtrl.addItem(input.name,input.calories);
        }

        e.preventDefault();
    }

    // public methods
    return {
        init: function(){
            // fetch items from datastructure
            const items = ItemCtrl.getItems();
            // populate list with items
            UICtrl.populateItemList(items); 
            // load even listners
            loadEventListeners();
        }
    }
})(ItemCtrl,UICtrl);

//Initialize App
App.init();