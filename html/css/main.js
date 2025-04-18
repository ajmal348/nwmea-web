/*
*
* JS Script
* @Trans Emirates System
*/


        //Food Carousel
        const foodCarousel = document.querySelector(".food-carousel");
        const swiperOptions = {
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            grabCursor: true,
            speed: 500,
            spaceBetween: 10,
            mousewheel: false,
            initialSlide: 2,
            autoplay: {
                delay: 5000
            },
            navigation: {
                nextEl: '.dl-slider-button-next',
                prevEl: '.dl-slider-button-prev'
            },
            pagination: {
                el: '.dl-swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">'+'<svg class="dl-circle-loader" width="20" height="20" viewBox="0 0 20 20">'+
                      '<circle class="path" cx="10" cy="10" r="5.5" fill="none" transform="rotate(-90 10 10)"'+
                      'stroke-opacity="1" stroke-width="2px"></circle>'+
                      '<circle class="solid-fill" cx="10" cy="10" r="3"></circle>'+
                      '</svg></span>';
                }
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 0
                },
                // when window width is >= 767px
                767: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 10
                }
            }
        };

        const swiper = new Swiper( foodCarousel, swiperOptions );



