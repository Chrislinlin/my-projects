$(document).ready(function(){
    var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    if(transactions.length >0){
        initHistory(transactions);
    }

    $("#form").find('button').click(function(e){
        e.preventDefault();
        // console.log('good');
        var name = $('#text').val();
        var amount = $('#number').val();
        addItem(name, amount);
        //push（）讓陣列可以丟進內容
        transactions.push({name: name, amount: amount});
        localStorage.setItem('transactions', JSON.stringify(transactions));
    })
})

//add item in history
function addItem(name, amount){

    item_str = '<li class ="plus">'+name+'<span>'+amount+'</span>'+'<button class = "delete-btn">x</button>';
    $('#list').append(item_str)
    clearForm();
    $('.delete-btn').last().click(function(){
        $(this).parent().remove();
    })
}

//clear transaction
function clearForm(){
    $('#form').find("input").val("");
}

function initHistory(transactions){
    transactions.forEach(function(item){
        addItem(item.name, item.amount)
    })
}

