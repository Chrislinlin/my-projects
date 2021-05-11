
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
        spans[i].onmouseover = mouseTest
    }


    //滑過星星會亮
    function mouseTest() {
        for(var i =0;i< spans.length;i++){
            if(spans[i]==this){
                index = i
            }
            console.log(index)
        }
        for(var i =0;i <= index;i++){
            spans[i].style.color ="yellow"
        }
        for(var i =index+1;i < spans.length;i++){
            spans[i].style.color ="white"
        }
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
                            <div class="user-star">${starArray[index-2]}
                          
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
       </div>`
       todoList.appendChild(item
        )
    }
    //事件
    cBtn.onclick= addComment;
    // cBtn.onclick= mouseTest;














// //點星星會亮
// $(".fa-star").click(function()
// {
//     console.log('aaa');
//     $(this).toggleClass('fas far')
// })


// 添加到上面



       

