
var mySwiper = new Swiper(".swiper-container",{
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigator:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
       1680: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
});