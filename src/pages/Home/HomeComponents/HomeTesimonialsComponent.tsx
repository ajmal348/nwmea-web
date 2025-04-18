

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function HomeTesimonialsComponent(){
    return(
        <>
            <div className="row">
                  <div className="col-12 testimonials">
                    {/* <div className="food-carousel swiper-container nav-visible"> */}
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

                    
                      {/* <div className="swiper-wrapper carousel-item"> */}
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Firas Najjar</h5>
                              <p>
                                I have worked with Nationwide, specifically
                                Mohammad Abu Baker. I have used his services as
                                an owner and as somebody who’s looking for an
                                apartment He has done a great job in both ways.
                                He is one of the best if not the best. I
                                recommend him for anyone
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Go Inoue</h5>
                              <p>
                                By far, this is the best property management
                                company in Abu Dhabi, largely because of their
                                amazing agents like Mohammad Abo Baker. He is
                                responsible, professional, and trustworthy,
                                ensuring everything is in order. I had a long
                                list of requirements for the apartment and many
                                questions, and he answered all of them. He
                                checks every detail in the apartment to ensure
                                it is clean and ready to move in. This type of
                                professionalism is rare to see here.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Firas Najjar</h5>
                              <p>
                                I have worked with Nationwide, specifically
                                Mohammad Abu Baker. I have used his services as
                                an owner and as somebody who’s looking for an
                                apartment He has done a great job in both ways.
                                He is one of the best if not the best. I
                                recommend him for anyone
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Go Inoue</h5>
                              <p>
                                By far, this is the best property management
                                company in Abu Dhabi, largely because of their
                                amazing agents like Mohammad Abo Baker. He is
                                responsible, professional, and trustworthy,
                                ensuring everything is in order. I had a long
                                list of requirements for the apartment and many
                                questions, and he answered all of them. He
                                checks every detail in the apartment to ensure
                                it is clean and ready to move in. This type of
                                professionalism is rare to see here.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Firas Najjar</h5>
                              <p>
                                I have worked with Nationwide, specifically
                                Mohammad Abu Baker. I have used his services as
                                an owner and as somebody who’s looking for an
                                apartment He has done a great job in both ways.
                                He is one of the best if not the best. I
                                recommend him for anyone
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="card">
                            <div className="card-body">
                              <h5 className="text-white">Go Inoue</h5>
                              <p>
                                By far, this is the best property management
                                company in Abu Dhabi, largely because of their
                                amazing agents like Mohammad Abo Baker. He is
                                responsible, professional, and trustworthy,
                                ensuring everything is in order. I had a long
                                list of requirements for the apartment and many
                                questions, and he answered all of them. He
                                checks every detail in the apartment to ensure
                                it is clean and ready to move in. This type of
                                professionalism is rare to see here.
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      {/* </div> */}
                      <div className="dl-slider-controls float-end style-2">
                        <div className="dl-slider-button-prev">
                          <i className="bi bi-arrow-left arrow-class"></i>
                        </div>

                        <div className="dl-slider-button-next">
                          <i className="bi bi-arrow-right arrow-class"></i>
                        </div>
                      </div>
                      <div className="carousel-preloader">
                        <div className="dot-flashing"></div>
                      </div>
                    {/* </div> */}
                    </Swiper>
                  </div>
                </div>
        </>
    )
}