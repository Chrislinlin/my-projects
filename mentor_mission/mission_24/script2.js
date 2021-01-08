const test = $('#test');
const amount = $('#amount');
const form = $('#form');
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

$.fn.addTransaction=function(e){
    e.preventDefault();

    if(test.val().trim() === '' || amount.val().trim() ===''){
        alert('please enter the transaction');
    }else{
        const transaction ={
            id: generateID(),
            text: text.val(),
            amount: parseInt(amount.val())
        };
    }
};
//function generateID random ID
$.fn.generateID=function(){
    return Math.floor(Math.random()*1000000)
};

//function addTransaction to DOM list
$.fn.addTransactionDOM=function(){
    //get Sign 
    const sign = transaction.amount < 0 ? '-': '+';
    const item = $('<li></li>').appendTo('#list');

    //根據value加上 class
    item.addClass(transaction.amount <0 ? 'minus' : "plus");

    item.html(`
    ${transaction.text}
    <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">x</bttton>
    `);
    list.append(item);
}

//得到更新的總數 icome / expense
$.fn.updateBalance=function(){
    const amounts = transaction.map(function(transaction){
        transaction.amount;
    })
    const total = amounts
                        .reduce((acc, item) =>{acc +=item})

    const income = amounts
                        .filter(function(item){ item>0})
                        .reduce((acc, item) =>(acc +=item), 0)
                        .toFixed(2);
    const expense = amounts
                            .filter(item => item<0)
                            .reduce((acc, item)=>(acc+=item), 0)*(-1) //把負數變成正數
                            .toFixed(2);

    $('#balance').text(`$${total}`)
    $('#money-plus').text(`$${income}`);
    $('#money-minus').text(`$${expense}`);
}

//根據ID移除 transaction

$.fn.removeTransaction=function(){
    transactions = transactions.filter(transaction => transaction.id !== id);
    updatelocalStorage();
    init();
}

//updateLocalStorage transaction
$.fn.updateLocalStorage=function(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
//init app
$.fn.init=function(){
    $('#list'.html(''))
    transactions.each(addTransactionDOM);
    updateBalance()
}

init();
form.submit(addTransactionDOM)