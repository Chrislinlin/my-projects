

 //1. 加入click事件，讓選的座位加入selected屬性，變色
 $(document).ready(function(){
     $('.container').click(function(e){
         if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
             e.target.classList.toggle('selected'); //因為用toggle 會把沒有的變成有，若有的就會變沒有

             
         }
     }); 
 });

 