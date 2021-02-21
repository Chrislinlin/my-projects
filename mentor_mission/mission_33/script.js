
    let API_Key = 'AIzaSyCDVAPlbWLLCZf6WFNo_mEsYPyZynkK7hE';
    let video ='';
    let videos = $('#videos');
    let q;
    $('#form').submit(function(event){
        event.preventDefault();
        vedioSearch(q, 5);
    })


//search function


function vedioSearch(q, maxResult){
    $('#videos').html('');
    $('#buttons').html('');

     q = $('#search').val();
    $.get("https://www.googleapis.com/youtube/v3/search",{
        key: 'AIzaSyCDVAPlbWLLCZf6WFNo_mEsYPyZynkK7hE',
        type: 'video',
        part: 'snippet, id',
        maxResults: maxResult,
        q: q
    }, 
    function(data){

        let prevPageToken = data.prevPageToken;
        let nextPageToken = data.nextPageToken;
        console.log(data);
        
        data.items.forEach(item => {
            video = getOutput(item);
            $("#videos").append(video);
        });

        //show button
        let buttons =getButton(prevPageToken, nextPageToken );
        $('#button').append(buttons);
    })
}


//nextpage button
function nextPage(){

    let token = $('#next-button').data('token');
    console.log(token)
    let q = $('#next-button').data('query');

    $('#videos').html('');
    $('#button').html('');

    q = $("#search").val();

    $.get("https://www.googleapis.com/youtube/v3/search",{
        key: 'AIzaSyCDVAPlbWLLCZf6WFNo_mEsYPyZynkK7hE',
        type: 'video',
        part: 'snippet, id',
        pageToken: token,
        q: q,
    }, 
    function(data){

        let prevPageToken = data.prevPageToken;
        let nextPageToken = data.nextPageToken;
        console.log(data);
        
        data.items.forEach(item => {
            video = getOutput(item);
            $("#videos").append(video);
        });

        //show button
        let buttons =getButton(prevPageToken, nextPageToken);
        $('#button').append(buttons);
    })
}
//prevpage button
function prevPage(){

    let token = $('#prev-button').data('token');
    console.log(token)
    let q = $('#prev-button').data('query');

    $('#videos').html('');
    $('#button').html('');

    q = $("#search").val();

    $.get("https://www.googleapis.com/youtube/v3/search",{
        key: 'AIzaSyCDVAPlbWLLCZf6WFNo_mEsYPyZynkK7hE',
        type: 'video',
        part: 'snippet, id',
        pageToken: token,
        q: q,
    }, 
    function(data){
        let nextPageToken = data.nextPageToken;
        let prevPageToken = data.prevPageToken;
        console.log(data);
        
        data.items.forEach(item => {
            video = getOutput(item);
            $("#videos").append(video);
        });

        //show button
        let buttons =getButton(prevPageToken, nextPageToken);
        $('#button').append(buttons);
    })
}

//create the button
function getButton(prevPageToken, nextPageToken){
    let q;
    if(!prevPageToken){
        var btnOutput = '<div class="button-container">' + '<button id="next-button" class="paging-button" data-token="' +nextPageToken+'" data-query="'+q+'"+ onclick="nextPage();">Next Page</button></div>'; 
    }else{
        var btnOutput = '<div class="button-container">' + 
        '<button id="prev-button" class="paging-button" data-token="' +prevPageToken+'" data-query="'+q+'"+ onclick="prevPage();">Previous Page</button>'+
        '<button id="next-button" class="paging-button" data-token="' +nextPageToken+'" data-query="'+q+'"+ onclick="nextPage();">Next Page</button> </div>'; 
    }

    return btnOutput;
}
//output
function getOutput(item){
    var videoId = item.id.videoId;
  var title = item.snippet.title;
  var description = item.snippet.description;
  var thumb = item.snippet.thumbnails.high.url;
  var channelTitle = item.snippet.channelTitle;
  var videoDate = item.snippet.publishedAt;

  // Build Output String
  var output =
    "<li>" +
    '<div class="list-left">' +
    '<img src="' +
    thumb +
    '">' +
    "</div>" +
    '<div class="list-right">' +
    '<h3><a data-fancybox href="http://www.youtube.com/embed/' +
    videoId +
    '">' +
    title +
    "</a></h3>" +
    '<small>By <span class="cTitle">' +
    channelTitle +
    "</span> on " +
    videoDate +
    "</small>" +
    "<p>" +
    description +
    "</p>" +
    "</div>" +
    "</li>" +
    '<div class="clearfix"></div>' +
    "";
// console.log(output)
  return output;
 
}