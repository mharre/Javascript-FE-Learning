
let a, b;
//[a,b] = [100,200]

// Rest pattern
//[a, b, ...rest] = [100, 200, 300, 400, 500];

//({a, b} = { a:100, b:200, c:300, d:400, e:500});

// Array Destructuring
//const people = ['John', 'Beth', 'Mike'];
//const [person1, person2, person3] = people;
//
//console.log(person1, person2, person3);

// Parse array returned from function

//function getPeople(){
//    return ['John', 'Beth', 'Mike'];
//}
//
//let p1, p2, p3;
//[p1, p2, p3] = getPeople();
//console.log(p1,p2,p3)

// Object Destructuring
const person = {
    name: 'John',
    age: 32,
    city: 'Nowhere',
    gender: 'Undefined'
}

const {name, age,city} = person
console.log(name,age,city);