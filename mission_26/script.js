const filterContainer = $('.filter-container');
const filter =$('#filter');
const loading =$('.loader');
const postContainer = $('.post-container')

let limit = 5;
let page =1;

//使用$.ajax()
function showPost(){
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts?
        _limit=${limit}&_page=${page}`,
        method:'get',
        dataType:'json',
        success:function(data){
            //使用forEach，遍及每筆資料，
            
            // console.log(data)
            data.forEach(function(post){
                const postEl = $('<div></div>').addClass('post');
                postEl.html(`
                <div class="number">${post.id}</div>
                <div class="post-info">
                    <h2 class ="post-title">${post.title}</h2>
                    <p class = "post-body">${post.body}></p>
                </div>
                `);
                postContainer.append(postEl);
                
               
            })
    
            // posts.forEach(post => {
            //     const postEl = document.createElement('div');
            //     postEl.classList.add('post');
        
            //     postEl.innerHTML = `
            //     <div class="number">${post.id}</div>
            //     <div class="post-info">
            //         <h2 class ="post-title">${post.title}</h2>
            //         <p class = "post-body">${post.body}></p>
            //     </div>
            //     `;
            //     postsContainer.appendChild(postEl);
        
            // });
        }
    })
}
    //showLoading()
function showLoading(){
    loading.addClass('show');
    setTimeout(function(){
        loading.removeClass('show')
    },1000);
    setTimeout(function(){
        page++
        showPost();
    },200)
    }
showPost();

$(window).scroll(function(){
    if ($(document).scrollTop() + $(window).height() > $(document).height() - 5) {
        showLoading();
    }
})

//search in input
$('input').on('input',function(){
    filterSearch();
});

function filterSearch(){
    const text = $('input').val().toLowerCase();
    $('.post').css('display','none')
    $(`.post:contains('${text}')`).css('display','flex')
    ;
    // const title = $('.post-title').text().toLowerCase();
    // const body = $('.post-body').text().toLowerCase();
    
    // console.log(text);
    // if(title.indexOf(text)>-1 || body.indexOf(text)>-1){
    //     // $('.post').css('display','none');
        
    
    //     $('.post').css('display','flex')
     
    // }else{
    //     $('.post').css('display','none');
    // }
}