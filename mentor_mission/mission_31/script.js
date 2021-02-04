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
searchBtn.click(function(){
    getUserData()
})