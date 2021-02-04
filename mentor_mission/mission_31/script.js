const searchUser = $('#searchUser');
const searchBtn = $('.search-btn');
let userName;

//ajax API
function getUserData(){
    $.ajax({
        //github endpoint
        url: `https://api.github.com/users/${userName}`,
        method:'GET',
        datatype:'json',
        success: function(data){
            let obj = {};
            //if(data.avatar_url is true){obj.avatar_val is data_avatar_url}else{obj.avatar_url is}
            obj.avatar_url = data.avatar_url !== null ? data.avatar_url : '';
            obj.name = data.name !== null ? data.name : '';
            obj.htnl_url = data.html_url !== null ? data.html_url : '';
            obj.public_repos = data.public_repos !== null ? data.public_repos : '';
            obj.public_gists = data.public_gists !== null ? data.public_gists : '';
            obj.followers = data.followers !== null ? data.followers : '';
            obj.following = data.following !== null ? data.following : '';
            obj.company = data.company !== null ? data.company : '';
            obj.blog = data.blog !== null ? data.blog : '';
            obj.location = data.location !== null ? data.location : '';
            obj.created_at = data.created_at.substr(0, 10) !== null ? data.created_at.substr(0, 10) : '';
            obj.updated_at = data.updated_at.substr(0, 10) !== null ? data.updated_at.substr(0, 10) : '';
            showProfile(obj);

        },
        error: function(){
            console.log('ohhno')
        }
    })
}
function getRepoData(){
    $.ajax({
        url:`https://api.github.com/users/${userName}/repos?per_page=5&sort=created: asc`,
        method:'GET',
        datatype:'json',
        success: function(data55){
            data = data55;
            showRepo(data);
        },
        error: function(){
            console.log('ohhno again!')
        }
    })
}
//show profile
function showProfile(user){
$('#profile').html(
    `<div class="card card-body border-0">
    <div class="row">
        <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid rounded-circle mb-2">
            <h5 class="mt-2 text-center">${user.name}</h5>
            <a href="${user.html_url}" target="_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
                <div class="container mt-2 px-0">
                    <span class="badge badge-primary ml-5">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following: ${user.following}</span>
                </div>
            <ul class="list-group list-group-flush mt-2 ml-5">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
                <li class="list-group-item">Currently Updated: ${user.updated_at}</li>
             </ul>
        </div>
    </div>
</div>
<div class="col-md-12">
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>

</div>
`
)}
//show repo
function showRepo(repos){
    repos.forEach(function(repo){
        //把repodata東西加在getRepoData中創建的容器後
        const repoData = $('<div class = "card card-body mb-2 border-0"></div>').appendTo('#repos');
        let repoDes = repo.description !== null ? repo.description : '';
        repoData.html(`
            <div class="row shadow-sm p-3 bg-white rounded">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">
                        <h3>${repo.name}</h3>
                    </a>
                    <p>${repoDes}</p>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-warning m-1">Stars ${repo.stargazers_count}</span>
                    <span class="badge badge-success m-1">Watchers ${repo.watchers_count}</span>
                    <span class="badge badge-info m-1">Forks ${repo.forks_count}</span>
                </div>
            </div>
        `)
    } 
        
    );
}
searchBtn.click(function(){
    userName = searchUser.val();
    getUserData();
    getRepoData();
})