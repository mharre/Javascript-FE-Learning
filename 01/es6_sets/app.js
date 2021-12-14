// SETS - unique values, same as python

const set1 = new Set();
set1.add(100);
set1.add('a string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100); // doesn't get added

//const set2 = new Set([1,true,'string']);
//console.log(set2)
//console.log(set1.size);
//console.log(set1.has(100));
//console.log(set1.has(50+50));
//set1.delete(100);
//console.log(set1);

//for(let item of set1){
//    console.log(item);
//}

//set1.forEach((value) => {
//    console.log(value);
//})

// convert to array
const setArray = Array.from(set1);
console.log(setArray)