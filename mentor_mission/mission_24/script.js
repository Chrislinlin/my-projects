var transactions = JSON.parse(localStorage.getItem('myTransactions')) || [];
$(document).ready(function(){


    if(transactions.length >0){
        initHistory(transactions);
    }

    $("#form").find('button').click(function(e){
        e.preventDefault();
        // console.log('good');
        var name = $('#text').val();
        var amount = $('#number').val();
        var id = generateID()
        addItem(name, amount, id, transactions);
        //push（）讓陣列可以丟進內容
        transactions.push({id: id, name: name, amount: amount});
        localStorage.setItem('myTransactions', JSON.stringify(transactions));
        updateValues();
    })
})

//function generateID random ID
function generateID(){
    return Math.floor(Math.random()*1000000)
};

//add item in history
function addItem(name, amount, id ,transactions){
    // console.log(id);
    
    var item_str = '<li class =minus>'+name+'<span>'+amount+'</span>'+'<button class = "delete-btn" data-id="'+id+'">x</button>';
    $('#list').append(item_str)
    
    if(amount>0){
        $('li').toggleClass('minus')
        $('li').addClass('plus')
    }
    
    // $("li").addClass(amount>0 ? 'plus' : 'minus');
    clearForm();
    $('.delete-btn').last().click(function(){
        $(this).parent().remove();
        var id =$(this).data('id');
        console.log("delete id: ",id)
        deleteItemFormLocalstorage(transactions, id);
        updateValues();
    })
}

//clear transaction
function clearForm(){
    $('#form').find("input").val("");
    
}

function initHistory(transactions){
    transactions.forEach(function(item){
        addItem(item.name, item.amount, item.id, transactions)//item.id也要記得加
    })
    updateValues();
}
function deleteItemFormLocalstorage(transactions, id){
    transactions.forEach(function(item, index, arr){

        if(item.id === id){
            arr.splice(index, 1);
        }
    });
    // console.log(transactions);
    localStorage.setItem('myTransactions', JSON.stringify(transactions));
}
// update the balance, income and expense
function updateValues() {
    const amounts = transactions
        .map(function(transaction) {
            return transaction.amount;
        })
        // console.log(amounts)
    // reduce()方法：累加陣列中數值

    
    const total = parseFloat(amounts
        .map(Number) //單純的amount是字串陣列
        .reduce((function(accumulator, item_str) {
            return accumulator += item_str;    // accumulator = accumulator + item;
        }),0))
        .toFixed(2);
        // console.log(total)
        
    // filter()方法： 經過內部函式處理後，將通過之元素回傳為新陣列
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const income = parseFloat(amounts
        .filter(function(item_str) {
            return item_str > 0;
        })
        .reduce((function(accumulator, item_str) {
            return accumulator -= item_str;    
        }),0))*-1
        .toFixed(2);
        console.log(income)
    const expense = parseFloat((amounts
        .filter(function(item_str) {
        return item_str < 0;
        })
        .reduce((function(accumulator, item_str) {
            return accumulator -= item_str;    //acc=acc-item
        }),0) * -1))
        .toFixed(2);  
        // console.log(expense) 

        $('#balance').text(`$${total}`);
        $('#money-plus').text(`$${income}`);
        $('#money-minus').text(`$${expense}`);
}
