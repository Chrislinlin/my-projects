$(function(){
    let width = $(window).width();
    if(width > 768){
        $('#waterfallArea').imagesLoaded(function(){
            $('#waterfallArea').masonry({
    
                itemSelector: '.content_box', // 子元素
                columnWidth: 5, //gap
                horizontalOrder: true,
                originTop: true,
                animate: true,
    
            })
            //全部圖片都被加載瀑布流
            $('#waterfallArea')
            .imagesLoaded()
            .always(function(instance){
                console.log('okokok 都被加載')
                $('.loadingScreen').fadeOut()
                
            })
        })
    }
    else{
        console.log('gg')
    }
    

})