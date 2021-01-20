const filterContainer = $('.filter-container');
const filter =$('#filter');
const loading =$('.loador');

let limit = 5;
let page =1;

//使用$.ajax()
$.ajax({
    url: `https://jsonplaceholder.typicode.com/posts?
    _limit=${limit}&_page=${page}`,
    method:'get',
    dataType:'json',
    // data:
    success:function(data){

        console.log(data)

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
    // .done(function (picsumImages) {
    //     // Handling the images here by using picsumImages
    // });