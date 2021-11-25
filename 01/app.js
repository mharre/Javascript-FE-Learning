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
