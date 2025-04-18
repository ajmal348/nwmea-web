
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useRef } from 'react';
export function HomePropertiesOverviewCard() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

      // Initialize Bootstrap carousels after component mounts
  useEffect(() => {
    const propertyCarousels = document.querySelectorAll('.carousel');
    if (window?.bootstrap) {
      propertyCarousels.forEach(carouselEl => {
        new window.bootstrap.Carousel(carouselEl, {
          interval: 4000
        });
      });
    }
  }, []);


    return (
      <>
        <div className="row pt-5 partner">
          <div className="col-md-12">
            <section className="position-relative">
              <a href="#" className="view-all-prop-lft">
                
                <i className="bi bi-chevron-left"></i> VIEW ALL PROPERTIES
              </a>
              <div className="row">
                <div className="col-12">
                  <div className="nav-outside">
                     {/* Replace the original div with Swiper component */}

                     <Swiper
                     className='food-carousel  nav-visible carousel-item'
                     modules={[Navigation, Pagination, Autoplay]}
                     navigation={{
                        nextEl: '.dl-slider-button-next',
                        prevEl: '.dl-slider-button-prev',
                      }}
                     loop={true}
                     autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                      }}
                      pagination={{
                        el: '.dl-swiper-pagination',
                        clickable: true
                      }}
                     spaceBetween={10}
                        slidesPerView={3}
                        slidesPerGroup={1}
                        grabCursor={true}
                        speed={500}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                        breakpoints={{
                            576: {
                              slidesPerView: 1,
                              spaceBetween: 20
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 20
                            },
                            992: {
                              slidesPerView: 3,
                              spaceBetween: 20
                            },
                            1200: {
                              slidesPerView: 3,
                              spaceBetween: 30
                            }
                          }}
                        >

<div className="dl-slider-controls float-end style-2" style={{top:0}} >
                        <div className="dl-slider-button-prev"  ref={prevRef}>
                          <i className="bi bi-arrow-left arrow-class"></i>
                        </div>

                        <div className="dl-slider-button-next" ref={nextRef}>
                          <i className="bi bi-arrow-right arrow-class"></i>
                        </div>
                      </div>

                    {/* <div className="food-carousel swiper-container nav-visible"> */}
                      {/* <div className="swiper-wrapper carousel-item"> */}
                      <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-7"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-7"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-7"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-7"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-8"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-8"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-8"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-8"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-3"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-9"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-9"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-9"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-10"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-10"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-10"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-10"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-11"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-11"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-11"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-11"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="card shadow-sm mx-8 my-5">
                            <div className="card-img-div">
                              <div
                                id="carousalKey-12"
                                className="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div className="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-12"
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-12"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carousalKey-12"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      src="/v2/assets/images/villa-img-3.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img-2.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      src="/v2/assets/images/villa-img.jpg"
                                      className="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card-body">
                              <h5 className="text-white">
                                <i className="bi bi-buildings golden-text"></i>{" "}
                                &nbsp;VIlla
                              </h5>
                              <p>
                                Perfect Area | High-End Finishes | Elegant Villa
                              </p>
                              <p>
                                <i className="bi bi-geo-alt golden-text"></i>{" "}
                                &nbsp;Al Manhal, Abu Dhabi
                              </p>
                              <p>7 Washrooms | 5 Beds | 6266 sqft</p>
                              <p>starting from</p>
                              <div className="row">
                                <div className="col-md-5">
                                  <p>250,000 Aed</p>
                                </div>
                                <div className="col-md-6">
                                  <a href="#">
                                    <i className="bi bi-telephone text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-envelope text-white"></i>
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                                  <a href="#">
                                    <i className="bi bi-whatsapp text-white"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        
                        </SwiperSlide>

                      {/* </div> */}
                      
                    {/* </div> */}
                    </Swiper>
                    <div className="dl-swiper-pagination"></div>
                   
                      <div className="carousel-preloader">
                        <div className="dot-flashing"></div>
                      </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

            

      </>
    );
}

