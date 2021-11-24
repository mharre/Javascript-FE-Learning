// Log to Console, any datatypes can be logged
//  can also log objects, arrays etc

console.log('Hello World'); 
console.log([1,2,3]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();

console.time('Identifier')
    console.log('Hello World'); 
    console.log('Hello World'); 
    console.log('Hello World'); 
    console.log('Hello World'); 
    console.log('Hello World'); 
    console.log('Hello World'); 
console.timeEnd('Identifier');

console.clear();

// var, let, const for variables

var name = 'Test'
console.log(name);
name = 'testttt'
console.log(name);

// init var, undefined and can use later

var greeting;
console.log(greeting);
greeting = 'hello'
console.log(greeting);

// letters, numbers, _, $ can only be used in var names
// let works similar to var, just different block level scope
// const works differently, it cant change or be reassigned
// MUST also assign a value

const person = {
    name: 'John',
    age: 3
}
person.name = 'Sara'
// console.log(person);

// can change the object, but can't reassign const
const numbers = [1,2,3,4]
numbers.push(6);
console.log(numbers);