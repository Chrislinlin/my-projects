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
            console.log(data);

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