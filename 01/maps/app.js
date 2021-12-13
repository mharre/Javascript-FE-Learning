
// MAPS = KVP and can use anything as key or value
map1 = new Map();

const key1 = 'some string',
    key2 = {},
    key3 = function(){};

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values
//console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// count values in map
//console.log(map1.size);

// iterating
//for(let [key, value] of map1){
//    console.log(`${key} = ${value}`);
//}

//for(let key of map1.keys()){
//    console.log(key);
//}

//for(let value of map1.values()){
//    console.log(value);
//}

//map1.forEach(function(key,value){
//    console.log(key, value)
//})

// convert to arrays
//const keyValArray = Array.from(map1);
//console.log(keyValArray);

//const keyValArray = Array.from(map1.values());
//console.log(keyValArray);

const keyValArray = Array.from(map1.keys());
console.log(keyValArray);