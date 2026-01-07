const swiper_testimonials = new Swiper(".testimonials-swiper", {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: false,
  breakpoints: {
    640: { slidesPerView: 2.2 },
    768: { slidesPerView: 3.2 },
    1024: { slidesPerView: 4 }, // giống hình hiển thị ~4
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});


    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
