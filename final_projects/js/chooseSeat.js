
const rows = document.querySelector('.row');
const container = document.getElementById('container')
console.log('sss')
const seatSelected = document.getElementById('seat-select')

container.addEventListener('click',function (e) {
    if(e.target.classList.contains('seat')){
        console.log('aaa')
    e.target.classList.toggle('selected')
    // updateSelectCount()
}
})

// function aaa() {
//     console.log('ssss')
// }
// function (e) {
//     if(e.target.classList.contains('seat')){
        
    //     e.target.classList.toggle('selected')
    // }   
    // }

//----更新座位-----------
// function updateSelectCount() {
//     const selectSeats = document.querySelectorAll('.selected')
//     selectSeatsLength = selectSeats.length;
//     console.log(selectSeatsLength)
    
//     seatSelected.innerText =selectSeatsLength;
// }


