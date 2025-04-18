const swiper = new Swiper('.food-carousel', {
  slidesPerView: 3,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  speed: 500,
  spaceBetween: 10,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false
  },
  navigation: {
      nextEl: '.dl-slider-button-next',
      prevEl: '.dl-slider-button-prev'
  },
  pagination: {
      el: '.dl-swiper-pagination',
      clickable: true
  },
  breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 5 },
      767: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 10 }
  }
});



// let cursor=document.getElementById('cursor');

// const cursorBorder = document.querySelector("#cursor-border");
// const cursorPos = { x: 0, y: 0 };
// const cursorBorderPos = { x: 0, y: 0 };

// document.addEventListener("mousemove", (e) => {
//   cursorPos.x = e.clientX;
//   cursorPos.y = e.clientY;

//   if(cursor !==null)
//   cursor?.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

// requestAnimationFrame(function loop() {
//   const easting = 8;
//   cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
//   cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

//   cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
//   requestAnimationFrame(loop);
// });




