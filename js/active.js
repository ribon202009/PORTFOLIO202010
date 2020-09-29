
var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        
        // はみ出し具合を調整
        slidesPerView: 2,　
        centeredSlides : true
      },
  });
