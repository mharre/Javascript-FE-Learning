// just adding async makes it return a promise
//async function myFunc(){
//    const promise = new Promise((resolve,reject)=>{
//        setTimeout(() => resolve('hello'), 1000);
//    });
//
//    const res = await promise; //wait until promise is resolved
//    return res;
//}
//
//myFunc()
//    .then(res => console.log(res));

async function getUsers(){
    // await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resolve
    const data = await response.json();
    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => users.forEach(function(user){
    console.log(user.name)
}))