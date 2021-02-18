// const cors = 'https://cors-anywhere.herokuapp.com/'; 
// const url ="https://www.googleapis.com/youtube/v3/search"
$(document).ready(function(){
    let API_Key = 'AIzaSyCSwkueGwGH8xdWDDgcMMAdXDRxKg0uEiE';
    $('#form').submit(function(event){
        event.preventDefault();

        let search = $('#search').val();
        vedioSearch(API_Key, search, 10);
    })
})

//search function


function vedioSearch(key, search, maxResult){
    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults=" + maxResult +"&q=" + search, 
    function(data){
        console.log(data)
    })
}