$(document).ready(function(){
    $("#form").find('button').click(function(e){
        e.preventDefault();
        // console.log('good');
        var name = $('#text').val();
        var amount = $('#number').val();
        addItem(name, amount);
    })
})

//add item in history
function addItem(name, amount){

    item_str = '<li class ="plus">'+name+'<span>'+amount+'</span>'+'<button class = "delete-btn">x</button>';
    $('#list').append(item_str)
    clearForm();
}

//clear transaction
function clearForm(){
    $('#form').find("input").val("");
}

//get form value
