// Init classes
const github = new GitHub;
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if(userText != ''){
        // make http call
        github.getUser(userText).then(data=>{
            if(data.profile.message === 'Not Found'){
                // Show Alert
            } else {
                // Show Profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        // Clear Profile
    }
});