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