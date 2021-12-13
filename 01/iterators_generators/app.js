//// Iterator
//function nameIterator(names){
//    let nextIndex = 0;
//
//    return {
//        next: function(){
//            return nextIndex < names.length ?
//            { value: names[nextIndex++], done: false } :
//            {done: true}
//        }
//    }
//}
//
//// create array of names
//const namesArr = ['Bob', 'John', 'Cool'];
//
//const names = nameIterator(namesArr);
//
//console.log(names.next());

// Generator 
//function* sayNames(){
//    yield 'Jack';
//    yield 'Bob';
//    yield 'Cool';
//}
//
//const name = sayNames();
//
//console.log(name.next());

// ID creator
function* createIds(){
    let index = 0;

    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);