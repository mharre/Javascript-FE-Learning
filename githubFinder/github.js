
class GitHub {
    constructor(){
        this.client_id = '141aa181eed2c00d056e';
        this.client_secret = '28a2b9e77882ac232c79fa7a1d82b25ed4b1656e';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch
            (`https://api.github.com/users/${user}?client_id=${this.client_id}
            &client_secret=${this.client_secret}`);

        const repoResponse = await fetch
            (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
            &client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        // returning obj instead of data because we want profile and repos(not just 1 or the other)
        return {
            profile: profile,
            repos: repos
        }
    }
}