// Log to Console, any datatypes can be logged
//  can also log objects, arrays etc

// console.log('Hello World');
// console.log([1,2,3]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();

// console.time('Identifier')
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Identifier');

// console.clear();

// var, let, const for variables

// var name = 'Test'
// console.log(name);
// name = 'testttt'
// console.log(name);

// init var, undefined and can use later

// var greeting;
// console.log(greeting);
// greeting = 'hello'
// console.log(greeting);

// letters, numbers, _, $ can only be used in var names
// let works similar to var, just different block level scope
// const works differently, it cant change or be reassigned
// MUST also assign a value

// const person = {
//     name: 'John',
//     age: 3
// }
// person.name = 'Sara'
// console.log(person);

// can change the object, but can't reassign const
// const numbers = [1,2,3,4]
// numbers.push(6);
// console.log(numbers);

// PRIMITIVE data types
// const name = 'John Doe';
// const age = 33;
// const has_kids = true;
// const car = null;
// let test = undefined
// const sym = Symbol()

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof has_kids);
// console.log(typeof car);
// console.log(typeof test);
// console.log(typeof sym);

// REFERENCE data types - objects referened by memory
// const hobbies = ['movies', 'music'];
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// const today = new Date ();
// console.log(today);
// console.log(typeof today);

// let val;

// something to string
// val = String(3);
// val = String(4 + 4);
// val = String(new Date());
// val = String([1,2,3,4]);

// toString()
// val = (5).toString();

// something to num
// val = Number('5');

// val = parseInt('100');
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// console.log(val.length); //string only
// console.log(val.toFixed()); // num only to control decimal

// TYPE COHERSION
// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 50;
// let val;

// simple math
// val = num1 + num2

// MATH object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.1);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-1);
// val = Math.pow(8,2)
// val = Math.min(1,2,3,4)
// val = Math.max(1,2,3,4)
// val = Math.random(); // random decimal
// val = Math.floor(Math.random() * 21);

// console.log(val);

// const firstName = 'Bobb'
// const lastName = 'Smith'
// const str = 'Hello my name is fuck'

// val = firstName + lastName
// val = firstName + ' ' + lastName
// val = 'Brad ';
// val +='Smith';

// string methods
// val = firstName.length;
// val = firstName.concat(' ', lastName);
// val = firstName.toUpperCase();
// val = firstName[1];
// val = firstName.indexOf('b');
// val = firstName.lastIndexOf('b');
// val = firstName.charAt('2');
// val = firstName.charAt(firstName.length - 1);
// val = firstName.substring(0,4);
// val = firstName.slice(0,4);
// val = firstName.slice(-3);
// val = str.split(' ');
// val = str.replace('fuck', 'Shit');
// val = str.includes('Hello');

// console.log(val);

// TEMPLATE LITERALS
// const fname = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// without template literals (es5 SUCKSSSSS )
// html = '<ul><li>Name: ' + fname + '</li><li>Age: ' + age + '</li></ul>';
// document.body.innerHTML = html;

// WITH TEMPLATE STRINGS (LITERALS)

// function hello(){
//     return 'hello';
// }

// html = `
//     <ul>
//         <li>Name: ${fname}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// ARRAYS AND METHODS
// const numbers = [1,2,3,4,31,366,842,342];
// const numbers2 = new Array(1,2,3,4,5);
// const fruit = ['apple', 'orange', 'banana']
// const mixed = ['string', 1, true, null, undefined, {a:1,b:1}, new Date()];

// let val;
// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[7];
// numbers[0] = 33
// val = numbers.indexOf(366);
// numbers.push(250); //add to end
// numbers.unshift(120); // add to front
// numbers.pop(); // pop off end
// numbers.shift(); // remove from front
// numbers.splice(1,3);
// numbers.reverse();
// val = numbers.concat(numbers2);
// val = numbers.sort(); //SORTING BY FIRST VALUE, use "compare" func
// val = numbers.sort(function(x,y){
//     return x - y
// })

// function under_50(num){
//     return num < 50;
// }
// val = numbers.find(under_50); //finds first instance of num under 50

// console.log(numbers);
// console.log(val);

// OBJECT LITERALS
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@gmail.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirtYear: function(){
//         return 2021-this.age;
//     }
// }

// let val;

// val = person;
// val = person.firstName;
// val = person['firstName'];
// val = person.hobbies[0]
// val = person.address.city
// val = person.address['city']
// val = person.getBirtYear();

// console.log(val);

// const people = [
//     {fname: 'John', age:30},
//     {fname: 'Bob', age:35},
//     {fname: 'Nancy', age:25}
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].fname);
// }

// DATE AND TIME
// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('09/10/81');

// val = today.getMonth(); //0 based, january = 0
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getTime(); //amount of seconds that have passed since jan 1 1970?

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1900);
// birthday.setHours(15);
// birthday.setMinutes(30);
// birthday.setSeconds(11);

// console.log(birthday);

// COMPARISON OPs
// if(something){
//     do something
// } else {
//     do something else
// }

// const id = 100;

// if(id == 100){
//     console.log('yes');
// } else {
//     console.log('no');
// }
// // TESTS TYPE AND VALUE INSTEAD OF JUST VALUE
// if(id === 100){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if(id != 100){
//     console.log('yes');
// } else {
//     console.log('no');
// }
// // TESTS TYPE AND VALUE INSTEAD OF JUST VALUE
// if(id !== 100){
//     console.log('yes');
// } else {
//     console.log('no');
// }

// // TESTING IF UNDEFINED
// if(typeof id !== 'undefined'){
//     console.log(`The ID is: ${id}`);
// } else {
//     console.log('NO ID');
// }

// ELSE IF
// const color = 'yellow'

// if(color === 'red'){
//     console.log('red');
// } else if(color === 'blue'){
//     console.log('blue');
// } else {
//     console.log(`${color}`)
// }

// LOGICAL OPERATORS
// const fname = 'Steve';
// const age = 20;

// if(age > 0 && age < 12){
//     console.log(`${fname} is a child`);
// } else if (age >= 13 && age <= 19){
//     console.log(`${fname} is a teenager`);
// } else {
//     console.log(`${fname} is something else`);
// }

// if(age < 16 || age > 65){
//     console.log(`${fname} cannot run in the race`);
// } else {
//     console.log(`${fname} is registered`);
// }

// ? if, : else
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// SWITCHES, useful when lots of else if conditions
// const color = 'asdasd';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is: ${day}`);

// // FUNCS
// function greet(firstName='Test'){
//     return `Hello ${firstName}`;
// }

// const square = function(x){
//     return x*x;
// };

// console.log(square(2));

// IMMEDIATELY INVOKEABLE EXPRESSIONS - IIFES
// (function(){
//     console.log('IIFE Ran...');
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })('Bob');

// // PROPERTY METHODS
// const todo = {
//     add: function(){
//         console.log('Add todo...');
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('delete todo');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// // LOOPS
// for(let i=0; i<10; i++){
//     if(i===2){
//         console.log(`${i} is my favorite number`);
//         continue;
//     }
//     if(i===5){
//         break;
//     }
//     console.log(i);
// }

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++
// }

// let i = 0;
// do {
//     console.log(i);
//     i++
// }

// while(i<10);

// const cars = ['ford', 'acura', 'honda'];

// for(let i=0; i<cars.length; i++){
//     console.log(i, cars[i]);
// }

// cars.forEach(function(car, index){
//     console.log(`${index}: ${car}`);
// });

// const users = [
//     {id:1, name:'John'},
//     {id:2, name:'Sara'},
//     {id:3, name:'Karen'}
// ]

// const ids = users.map(function(user){
//     return user.id;
// })

// console.log(ids);

// // FOR IN LOOP USUALLY TO LOOP THROUGH OBJECTS
// const user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: '303'
// }
// for(let x in user){
//     console.log(`${x}: ${user[x]}`);
// }

// WINDOW OBJECT, METHODS, and PROPERTIES
// const input = prompt();
// alert(input);

// if(confirm('Are you sure?')){
//     console.log('Yes')
// };

// let val
// val = window.outerHeight;
// val = window.outerWidth;

// val = window.innerHeight;
// val = window.innerWidth;

// val = window.scrollY;

// val = window.location;
// val = window.location.port;
// val = window.location.search;

// // window.location.href = 'http://google.com'

// // window.location.reload();

// // window.history.go(); //bring back to whereever we came from, -1,-2 etc
// val = window.history.length;
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;

// console.log(val);

// let val

// val = document;
// val = document.all;
// val = document.head;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// console.log(val);

//DOM SELECTORS: SINGLE
// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);

// const taskTitle = document.getElementById('task-title');

// //not recommened to do style changes, that is what css if for
// taskTitle.style.background='#333';
// taskTitle.style.color='#fff';
// taskTitle.style.padding='5px';
// // document.getElementById('task-title').style.display='none';

// taskTitle.textContent ='Task Test';
// taskTitle.innerText='My Tasks';
// taskTitle.innerHTML='<span>Testinggg</span>';

// //QUERY SELECTOR (BETTER)

// // console.log(document.querySelector('#task-title'));
// // console.log(document.querySelector('.card-title'));
// // console.log(document.querySelector('h5'));

// document.querySelector('li').style.color='red';
// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:nth-child(3)').style.color='red';
// document.querySelector('li:nth-child(4)').textContent='hello';

// DOM ELECTORS: ALL
// const items = document.getElementsByClassName('collection-item');

// console.log(items[0])
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems) 
// //attaching to specific tag name ul, so this is collection-item in UL only

// let lis = document.getElementsByTagName('li');

// console.log(lis[0])
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// lis = Array.from(lis)
// lis.reverse()
// lis.forEach(function(li, index){
//     console.log(li.className)
//     li.textContent = `${index}: Hello`
// });

// console.log(lis);

// // QUERY SELECTOR ALL, MAKES NODE LIST SO WE DON"T NEED TO CONVERT TO ARRAY TO DO STUFF
// const items = document.querySelectorAll('ul.collection li.collection-item');
// // console.log(items);
// items.forEach(function(item, index){
//     item.textContent = `${index}: Text Change`
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4'
// };

// TRAVERSE THE DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // get child nodes, gives all types of nodes not just elements
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // 1 = Element
// // 2 = Attribute (deprecated)
// // 3 = Text Node
// // 8 = Comment
// // 9 = Document itself
// // 10 = Doctype

// val = list.children;
// val = list.children[0];
// list.children[0].textContent = 'Hello'
// val = list.children[3].children[0]

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.childElementCount;

// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// val = listItem.previousElementSibling;

// console.log(val);

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.setAttribute('title', 'New Item');
// li.appendChild(document.createTextNode('Hello Test'));

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></li>'
// li.appendChild(link)

// document.querySelector('ul.collection').appendChild(li);

// // REPLACING ELEMENTS
// const newHeading = document.createElement('h2');
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');
// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();
// list.removeChild(lis[3]);

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// link.classList.add('test');
// link.classList.remove('test');
// val = link

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https://google.com');
// val = link.hasAttribute('href');
// val = link;

// console.log(val);

// EVENT LISTENERS
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('Hello World');
//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click',
// onClick);

// function onClick(e){
//     // console.log('clicked');
//     e.preventDefault();
//     let val;

//     val = e
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     // e.target.innerText = 'hello'
//     val = e.type;
//     val = e.timeStamp;
//     val = e.clientY; //coords relative to the window 
//     val = e.offsetY; //cords relative to element itself

//     console.log(val);
// }

// EVENT HANDLERS

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// clearBtn.addEventListener('click', runEvent)
// clearBtn.addEventListener('dblclick', runEvent);
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// clearBtn.addEventListener('mouseover', runEvent);
// clearBtn.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);
//     e.preventDefault();

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

    // console.log(e.target.value);
    // heading.innerText = e.target.value
    // console.log(taskInput.value);

    // e.preventDefault();
// }

//EVENT BUBBLING
// document.querySelector('.card-title').addEventListener('click',
// function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//     console.log('col');
// });

// EVENT DELEGATION - putting listener on parent and going down
// delItem only worked when clicking first x, doesn't work for others
// must add delegation when adding something in dyamically too

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete-item');
    // }
    // if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete-item');
        // e.target.parentElement.parentElement.remove();
    // }
// }

// set local storage item, local stays until manually clear
// session leaves when browser is closed
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 30);
// sessionStorage.setItem('name', 'Bob');

// localStorage.removeItem('name');
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name, age);
// document.querySelector('form').addEventListener('submit',
// function (e){
//     const task = document.getElementById('task').value;

//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     alert('task saved!');

//     e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task){
//     console.log(task);
// });

// // OOP CONSTRUCTORS FUNCTIONS / THIS

// function Person(name, dob){
//     this.name = name;
//     // this.age = 323;
//     this.birthday = new Date(dob)
//     this.calcAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     };
// }

// // const brad = new Person('Brad')

// // console.log(brad);

// const brad = new Person('Brad', '9-10-81');
// console.log(brad.calcAge());

// BUILT IN CONSTRUCTORS
const name1 = 'jeff';
const name2 = new String('jeff');

// name2.foo = 'bar';

const num1 = 5;
const num2 = new Number(5);
console.log(typeof num2);

const bool1 = true;
const bool2 = new Boolean(true);

const getsum1 = function(x,y){
    return x + y;
}


const getsum2 = new Function('x','y','return 1 + 1');
console.log(getsum2(1,1))

const john1 = {name: 'John'};
const john2 = new Object({name: 'John'})