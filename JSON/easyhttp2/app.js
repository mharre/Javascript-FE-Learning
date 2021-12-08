
const http = new easyHTTP;

// get users
//http.get('https://jsonplaceholder.typicode.com/users')
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// user data
const data = {
    name: 'Bob Smith',
    username: 'Bobby',
    email: 'email@email.com'
}

// create post
//http.post('https://jsonplaceholder.typicode.com/users', data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// create put (update)
//http.put('https://jsonplaceholder.typicode.com/users/2', data)
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// delete method
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));