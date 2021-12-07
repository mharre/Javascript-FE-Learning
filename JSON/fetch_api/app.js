
document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(){
    // fetch returns promises, which is why .then is needed to read
    fetch('test.txt').then(res => res.text())
        .then(data => {
            document.getElementById('output').innerHTML = data
        }).catch(err => console.log(err));
}

function getJson(){
    // fetch returns promises, which is why .then is needed to read
    fetch('posts.json').then(res => res.json())
    .then(data => {
        let output = ''
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err));
}

function getExternal(){
    // fetch returns promises, which is why .then is needed to read
    fetch('https://api.github.com/users').then(res => res.json())
    .then(data => {
        let output = ''
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }).catch(err => console.log(err));
}