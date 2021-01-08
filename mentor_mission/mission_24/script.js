const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions =[
//     { id: 1, text: 'Flower', amount: -20},
//     { id: 1, text: 'Lottery', amount: 300},
//     { id: 1, text: 'books', amount: -200},
//     { id: 1, text: 'Coffee', amount: -100}
// ];



const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

//Add transaction 
function addTransaction(e){
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('please enter the transaction')
    }else{
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value //原本的amount被鏟出來是string 要用＋使它變成num
        };
        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateBalance();

        updatelocalStorage();

        text.value = '';
        amount.value = '';
    }
}
//generate random ID
function generateID(){
    return Math.floor(Math.random()*10000000);
}

//Add transactions to Dom list

function addTransactionDOM(transaction){
    //Get Sign
    const sign = transaction.amount < 0 ? '-' : '+';
    const item =document.createElement('li');


    //add class base on value
    item.classList.add(transaction.amount <0 ? 'minus' : 'plus'); //add裡面有if判斷式

    item.innerHTML =`
        ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">x</bttton>
    `;
    list.appendChild(item);
}

//update the balance, income + expense

function updateBalance(){
    const amounts = transactions.map(transaction =>
        transaction.amount); //把transcation 的amount 都加起來
    
    const total = amounts.reduce((acc, item)=>(acc += item),0).toFixed(2); 
    // console.log(total); 

    const income = amounts 
                        .filter(item => item>0)
                        .reduce((acc, item)=>(acc+=item), 0)
                        .toFixed(2);
    
    const expense = (amounts 
                        .filter(item => item<0)
                        .reduce((acc, item)=>(acc+=item), 0))*(-1) //把負數變成正數
                        .toFixed(2);
    // console.log(expense);

    balance.innerText = `$${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

//remove transaction by ID

function removeTransaction(id){
    transactions =transactions.filter(transaction => transaction.id !== id);

    updatelocalStorage();
    init();
}

//update local storage transactions
function updatelocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}
//init app
function init(){
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateBalance();
}
init();



form.addEventListener('submit', addTransaction)
