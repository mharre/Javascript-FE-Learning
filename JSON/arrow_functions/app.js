
//const sayHello = function(){
//    console.log('Hello');
//}

//const sayHello = () => {
//    console.log('Hello');
//}

//const sayHello = () => console.log('Hello');

//const sayHello = () => 'Hello';
//const sayHello = () => ({msg: 'Hello'});

// single param doesn't need parenthesis
//const sayHello = name => console.log(`Hello ${name}`);

// multiple params need paranthesis
//const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
//
//sayHello('Brad','LastName');

const users = ['Bob', 'John', 'William'];

//const nameLengths = users.map(function(name){
//    return name.length;
//});

// shorter
//const nameLengths = users.map((name) =>{
//    return name.length;
//});

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);