
var mySwiper = new Swiper(".swiper-container",{
    slidesPerView: 1,
    spaceBetween: 10,

    loop: true,
    loopFillGroupWithBlank: true,

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    // autoplay:{
    //     delay:2000,
    //     disableOnInteraction: false,
    // },
    breakpoints: {


        480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        769: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
       1680: {
          slidesPerView: 5,
         
          spaceBetween: 30,
        },
      }
});