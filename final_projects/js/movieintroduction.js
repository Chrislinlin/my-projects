
$(document).ready(function () {
    $('#more').click(function(){
        $('.user_talk_content_4_more').slideToggle();
    })
    $('.filterbtn').click(function(){
        $('.filterbtn').toggleClass('filter_on')
        $('.filterbtn1').toggleClass('filter_on1')
    })
    $('.filterbtn1').click(function(){
        $('.filterbtn').toggleClass('filter_on');
        $('.filterbtn1').toggleClass('filter_on1');
    })
})
function focusMethod(){
    document.getElementById('input').focus()
}