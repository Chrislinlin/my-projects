let ticketPrice = +$('#movie').val();//jquery沒有'.value" 只有val()
 let seats = $('.row .seat:not(.occupied)');

 //1. 加入click事件，讓選的座位加入selected屬性，變色
 $(document).ready(function(){
     $('.container').click(function(e){
         if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
             e.target.classList.toggle('selected'); //因為用toggle 會把沒有的變成有，若有的就會變沒有

             updateSelectedCount();
         }
     }); 
 });

 //2. update select count and price
 function updateSelectedCount(){
    $(document).ready(function(){
        const selectSeats = $('.row .seat.selected');

        //copy selected seat in array
        //Map through array
        //return a new array
        const selectedSeats = $('.row .seat.selected');
        const seatsIndex = [...selectedSeats].map(function(seat){
            return [...seats].indexOf(seat);
        })

        localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

        const selectedSeatsCount = selectSeats.length;

        $('#count').text(selectedSeatsCount);
        $('#total').text(selectedSeatsCount * ticketPrice) ;
    });
}
//3. movie select event
$('#movie').change(function(e){
    ticketPrice = $(e.target).val();
    setMovieData(e.target.selectedIndex, $(e.target).val()); //這個selectedIndex在哪
    updateSelectedCount();
})
//4. save selected index movie and the price
function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectMovieIndex', movieIndex);
    localStorage.setItem('selectMoviePrice', moviePrice);
};
