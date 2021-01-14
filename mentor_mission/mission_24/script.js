$(document).ready(function(){
    var transactions = JSON.parse(localStorage.getItem('myTransactions')) || [];

    if(transactions.length >0){
        initHistory(transactions);
    }

    $("#form").find('button').click(function(e){
        e.preventDefault();
        // console.log('good');
        var name = $('#text').val();
        var amount = $('#number').val();
        var id = generateID()
        addItem(name, amount, id);
        //push（）讓陣列可以丟進內容
        transactions.push({id: id, name: name, amount: amount});
        localStorage.setItem('myTransactions', JSON.stringify(transactions));
    })
})

//function generateID random ID
function generateID(){
    return Math.floor(Math.random()*1000000)
};

//add item in history
function addItem(name, amount){

    item_str = '<li class ="plus">'+name+'<span>'+amount+'</span>'+'<button class = "delete-btn" data-id="">x</button>';
    $('#list').append(item_str)
    clearForm();
    $('.delete-btn').last().click(function(){
        $(this).parent().remove();
        var id =$(this).data('id');
        console.log("delete id: ",id)
    })
}

//clear transaction
function clearForm(){
    $('#form').find("input").val("");
}

function initHistory(transactions){
    transactions.forEach(function(item){
        addItem(item.name, item.amount, item.id)
    })
}

