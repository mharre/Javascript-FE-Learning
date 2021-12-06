
document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    //Create XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN (specify our request and file or url we want to take it to)
    // true makes it async
    xhr.open('GET', 'data.txt', true);

    //Optional - Used for spiiners and loaders to display
    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML =
            `<h1>${this.responseText}</h1>`
        }
    }

    xhr.onerror = function(){
        console.log('Request error...');
    }

    xhr.send();
    
    // READY STATE VALUES
    // 0: request not intitialized
    // 1: server connection established
    // 2: request recieved
    // 3: processing request
    // 4: request finished and response ready

}
