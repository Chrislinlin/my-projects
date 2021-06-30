$(document).ready(function(){


    //點擊側邊欄會滾動
    $("a[href^='#']").click(function (e) {
        e.preventDefault()
        // var posX = $(this).offset().top;
        var posX = $($(this).attr('href')).offset().top;
        $('body, html').animate(
            {
                scrollTop: posX - 20,
            },
            500
        )

        console.log(posX)

})
})