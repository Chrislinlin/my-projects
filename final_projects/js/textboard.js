
    window.onload=function(){
    var input = document.getElementById('input')
    var todoList = document.getElementById('todolist')


    var cBtn = document.getElementById('c-btn')
    var spans = document.getElementsByTagName('span');

    var index;
    var d = new Date()
    var year = d.getFullYear();
    var month = d.getMonth() +1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var starArray = [
        // `<span>★</span>`,
        // `<span>★★</span>`,
        // `<span>★★★</span>`,
        // `<span>★★★★</span>`,
        // `<span>★★★★★</span>`

        `<i>★</i>`,
        `<i>★</i><i>★</i>`,
        `<i>★</i><i>★</i><i>★</i>`,
        `<i>★</i><i>★</i><i>★</i><i>★</i>`,
        `<i>★</i><i>★</i><i>★</i><i>★</i><i>★</i>`
    ];
    // console.log(starArray[2])
    console.log(year,month, (day+1), hour, minute, second);

    for (var i =0;i< spans.length;i++){
        spans[i].index = i;
        console.log(spans[i].index)
        spans[i].onmouseover =
        //滑過星星會亮
        function() {
       
            for(let i =0;i< spans.length;i++){
           

                if(i<=this.index){
                 spans[i].style.color ="yellow"
                }else{
                 spans[i].style.color ="white"
                    }
            }
                
            
                var index1 = this.index-1;
                console.log(index1);
                
            
                let num=0
                switch(index1){
                    case 0:
                        num =0;
                        break;
                    case 1:
                        num =1;
                        break;
                    case 2:
                        num =2;
                        break;
                    case 3:
                        num =3;
                        break;
                    case 4:
                        num =4;
                        break;
                    case 5:
                        num =5;
                        break;

                }


            function addComment(e) {
                    const comment = {
                        
                        input : input.value
                    }
                    addCommentDOM(comment)
                    //清空 變回來
                    input.value = "";
                    for(var i =0;i < spans.length;i++){
        
                        spans[i].style.color = "white";
                    }
                }
        
            function addCommentDOM(comment) {
                const item = document.createElement("div");

                    item.innerHTML= `
                    <div class="member">
                    <div class=" container" style="background-color: rgb(66, 76, 83);">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="user_img">
                                    <img src="./image/movie-introduction/head_02.jpg" alt="">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="comment-text-box">
                                    <!---text1----star-->
                                    <div class="comment-text-1">
                                        <div>你的評分：</div>
                                        <div class="user-star">${num}
                                    
                                        </div>
                                    </div>
                                    <!---text2----grade-->
                                    <div class="comment-text-2">
                                        <div>回應評論</div>
                                    </div>
                                    <!---text3----text comment-->
                                    <div class="comment-text-3">
                                        <div class="text">
                                            <p>
                                            ${comment.input}
                                            </p>
                                        </div>
                                    </div>
                                    <!---text3----comment time---->
                                    <div class="comment-text-4">
                                        發表時間：${year}-${month}-${day} ${hour}:${minute}:${second}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                    todoList.appendChild(item);

                }
        

        };
        

            // if(spans[i]==spans.length){
              
            //     index = i
            // }
            // console.log(index)
  
        // for(var i =0;i <=spans.length;i++){
        //     spans[i].style.color ="yellow"
        // }
        // for(var i =index+1;i < spans.length;i++){
        //     spans[i].style.color ="white"
        // }
    }


}
    // cBtn.onclick= mouseTest;














// //點星星會亮
// $(".fa-star").click(function()
// {
//     console.log('aaa');
//     $(this).toggleClass('fas far')
// })


// 添加到上面



       

