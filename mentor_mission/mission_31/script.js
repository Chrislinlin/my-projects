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
            console.log(data55)
        },
        error: function(){
            console.log('ohhno again!')
        }
    })
}
searchBtn.click(function(){
    getUserData();
    getRepoData();
})