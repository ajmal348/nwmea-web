// import React from 'react';
import MarqueeComponent from '../UIComponents/MarqueeComponent';
import PageLayout from '../PageLayout';
import { useState } from 'react';


import LetterCarousal from '../UIComponents/LetterCarousal';
import { HomePropertiesOverviewCard } from './HomeComponents/ViewPropertiesCard';
import HomeTesimonialsComponent from './HomeComponents/HomeTesimonialsComponent';

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePanelClick = (index: number) => {
        setActiveIndex(index);
    };

    const flexAccordianData = [
        { image: '/v2/assets/images/partner-1.jpg', Name: 'Dubai', index: 1 },
        { image: '/v2/assets/images/partner-2.jpg', Name: 'Abu Dhabi', index: 1 },
        { image: '/v2/assets/images/partner-3.jpg', Name: 'RAK', index: 1 },
    ];

    return (
      <>
        <PageLayout>
          <section className="ban-main">
            <div className="home-ban">
              <video width="100%" height="130%" autoPlay muted playsInline loop>
                <source
                  src="/v2/assets/images/home-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="container">
              <div className="row search-div text-center">
                <div className="col-12 pt-75">
                  <h2>YOUR DREAM HOME AWAITS</h2>
                  <p className="mb-5">
                    THE JOURNEY TO MODERN LIVING STARTS HERE AT NATIONWIDE
                  </p>
                </div>
                <div className="search-main">
                  <ul
                    className="nav nav-pills mb-1"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link fw-semibold active position-relative"
                        id="pills-rent-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Rent
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link fw-semibold position-relative"
                        id="pills-buy-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Buy
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link fw-semibold position-relative"
                        id="pills-offplan-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Off Plan
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link fw-semibold position-relative"
                        id="pills-commercial-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Commercial
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-rent-tab"
                    >
                      <div className="search-form w-100 float-start gap-4 rounded bg-white ps-3">
                        <form>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Abu Dhabi</option>
                              <option>Dubai</option>
                              <option>Ras al Khaimah</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-container="body"
                            >
                              <option data-tokens="">Sub Locality</option>
                              <option data-tokens="">Al Kasir</option>
                              <option data-tokens="">Zayed City</option>
                              <option data-tokens="">Al Reem Island</option>
                              <option data-tokens="">Ramhan Island</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Property Type</option>
                              <option>Villa</option>
                              <option>Apartment</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-3 w-20">
                            <a href="#">
                              Map Search &nbsp;&nbsp;{" "}
                              <i className="bi bi-map"></i>
                            </a>
                          </div>
                          <div className="find-btn">
                            <a href="#" className="">
                              Find Properties
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-buy-tab"
                    >
                      <div className="search-form w-100 float-start gap-4 rounded bg-white ps-3">
                        <form>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Abu Dhabi</option>
                              <option>Dubai</option>
                              <option>Ras al Khaimah</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-container="body"
                            >
                              <option data-tokens="">Sub Locality</option>
                              <option data-tokens="">Al Kasir</option>
                              <option data-tokens="">Zayed City</option>
                              <option data-tokens="">Al Reem Island</option>
                              <option data-tokens="">Ramhan Island</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Property Type</option>
                              <option>Villa</option>
                              <option>Apartment</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-3 w-20">
                            <a href="#">
                              Map Search &nbsp;&nbsp;{" "}
                              <i className="bi bi-map"></i>{" "}
                            </a>
                          </div>
                          <div className="find-btn">
                            <a href="#">Find Properties</a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-offplan-tab"
                    >
                      <div className="search-form w-100 float-start gap-4 rounded bg-white ps-3">
                        <form>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Abu Dhabi</option>
                              <option>Dubai</option>
                              <option>Ras al Khaimah</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-container="body"
                            >
                              <option data-tokens="">Sub Locality</option>
                              <option data-tokens="">Al Kasir</option>
                              <option data-tokens="">Zayed City</option>
                              <option data-tokens="">Al Reem Island</option>
                              <option data-tokens="">Ramhan Island</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Property Type</option>
                              <option>Villa</option>
                              <option>Apartment</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-3 w-20">
                            <a href="#">
                              Map Search &nbsp;&nbsp;{" "}
                              <i className="bi bi-map"></i>{" "}
                            </a>
                          </div>
                          <div className="find-btn">
                            <a href="#" className="">
                              Find Properties
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-commercial-tab"
                    >
                      <div className="search-form w-100 float-start gap-4 rounded bg-white ps-3">
                        <form>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Abu Dhabi</option>
                              <option>Dubai</option>
                              <option>Ras al Khaimah</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select
                              className="selectpicker"
                              data-live-search="true"
                              data-container="body"
                            >
                              <option data-tokens="">Sub Locality</option>
                              <option data-tokens="">Al Kasir</option>
                              <option data-tokens="">Zayed City</option>
                              <option data-tokens="">Al Reem Island</option>
                              <option data-tokens="">Ramhan Island</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-2 w-20">
                            <select className="form-select border-0">
                              <option>Property Type</option>
                              <option>Villa</option>
                              <option>Apartment</option>
                            </select>
                          </div>
                          <div className="float-start mb-2 me-3 mt-3 w-20">
                            <a href="#">
                              {" "}
                              Map Search &nbsp;&nbsp;{" "}
                              <i className="bi bi-map"></i>{" "}
                            </a>
                          </div>
                          <div className="find-btn">
                            <a href="#" className="">
                              Find Properties
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="contentsection" className="content-section">
            <section id="marqueeArea" className="pt-5 text-center">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 marq">
                    <MarqueeComponent className="marquee-txt">
                      Off-Plan Projects &nbsp;&nbsp; / &nbsp;&nbsp; Buy, Sell &
                      Rent &nbsp;&nbsp; / &nbsp;&nbsp; Prime Locations
                      &nbsp;&nbsp; / &nbsp;&nbsp; Family COMMUNITIES
                      &nbsp;&nbsp; / &nbsp;&nbsp; Real Estate Experts
                      &nbsp;&nbsp; / &nbsp;&nbsp; Abu Dhabi Properties
                      &nbsp;&nbsp; / &nbsp;&nbsp; Dubai Real Estate &nbsp;&nbsp;
                      / &nbsp;&nbsp; Waterfront Villas &nbsp;&nbsp; /
                      &nbsp;&nbsp; Investment Properties &nbsp;&nbsp; /
                      &nbsp;&nbsp; Commercial &nbsp;&nbsp;
                    </MarqueeComponent>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="trustedPartnerArea"
              className="pt-75 pb-75 animation text-center"
            >
              <div className="w-100 Frists text-end">
                <h1 className="big-title text-end">
                  <LetterCarousal speed={30} direction="rtl">
                    TRUSTED PARTNERS
                  </LetterCarousal>
                </h1>
              </div>
              <div className="anm_mod container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="sec-head pb-4">
                      YOUR TRUSTED REAL ESTATE <span>PARTNERS</span>
                    </h3>
                    <p>
                      Looking for the perfect home or investment opportunity in
                      the UAE? Nationwide Middle East Properties specializes in
                      buying, selling, and renting premium properties across Abu
                      Dhabi, Dubai, and Ras Al Khaimah (RAK).
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="flex-accordion">
                      <ul>
                        {flexAccordianData.map((item, index) => (
                          <li
                            key={index}
                            className={`at-accordion__panel ${
                              index === activeIndex ? "is-open" : ""
                            }`}
                            style={{
                              backgroundImage: `url('${item.image}')`,
                            }}
                            onClick={() => handlePanelClick(index)}
                          >
                            <div className="panel-inner">
                              <a
                                href="javascript:void(0)"
                                className="button bg-sun"
                              >
                                {item.Name}
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="PropertiesArea"
              className="pt-75 pb-75 building-bg text-left"
            >
              {/* Properties for Rent */}
              <div className="container-fluid renting">
                <div className="row">
                  <div className="col-12 Frist">
                    <h1 className="big-title">
                    <LetterCarousal speed={30} direction="ltr">
                    for rent
                  </LetterCarousal>
                       
                        </h1>
                    <h3 className="sec-head pb-4">
                    PROPERTIES AVAILABLE FOR<span> RENT</span>
                    </h3>
                  </div>
                </div>

                <HomePropertiesOverviewCard />
              </div>

              {/* Properties for Buying */}

              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 text-end Frists">
                  <LetterCarousal speed={30} direction="rtl">
                    <h1 className="big-title buy-rgt">
                        for buying</h1>
                        </LetterCarousal>
                  </div>
                </div>
              </div>
              <div className="container-fluid buying">
                <div className="row">
                  <div className="col-12 text-end">
                    <h3 className="sec-head pb-4">
                      PROPERTIES AVAILABLE FOR<span> BUYING</span>
                    </h3>
                  </div>
                </div>

                <HomePropertiesOverviewCard />
              </div>
            </section>

            {/* Testimonial Area */}

            <section className="pt-75 pb-75">
              <div className="w-100 text-start Frist">
                <h1 className="big-title text-start lft-tst testi">
                <LetterCarousal speed={100} direction="ltr">
                  testimonials
                  </LetterCarousal>
                </h1>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-12 text-center">
                    <h3 className="sec-head pb-4">Reviews & Comments</h3>
                    <h3 className="size-20">
                      YOU CAN COUNT <span>ON US</span>
                    </h3>
                  </div>
                </div>

                <HomeTesimonialsComponent/>

              </div>
            </section>

            <section className="pt-75 position-relative dark-bg">
              <div className="w-100 text-start Frist abt">
                <LetterCarousal speed={70} direction='ltr'>
                <h1 className="big-title text-start ">About Nationwide</h1>
                </LetterCarousal>
              </div>
              <div className="container-fluid">
                <div className="row position-relative">
                  <div className="offset-xl-2 col-md-6 col-xl-4">
                    <h3 className="mt-131">
                      WHO <span>WE ARE</span>
                    </h3>
                    <p className="grey-txt weight-300">
                      Nationwide Middle East Properties stands as a prominent
                      and distinguished real estate agency in the United Arab
                      Emirates, embodying excellence and expertise in the
                      ever-evolving property market of the region.
                    </p>
                    <a href="" className="more-btn">
                      Know More
                    </a>
                  </div>
                  <div className="col-md-6 dark-bg p-0">
                    <img
                      src="/v2/assets/images/about-imga.png"
                      className="img-fluid float-end abt-img"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="AskAny" className="pt-75 pb-75">
              <div className="anm_mod container">
                <div className="row position-relative">
                  <div className="col-md-12">
                    <h1 style={{ position: "absolute", left: 0, top: 0 }}>
                      FAQ
                    </h1>
                    <h3 className="mt-130">
                      ASK ANYTHING <span>FROM US</span>
                    </h3>
                    <p className="grey-txt weight-300">
                      Everything you need to know about the property and
                      pricing. Can’t find the answer you’re looking for? Please
                      chat to our friendly team.
                    </p>
                  </div>
                </div>
                <div className="row position-relative">
                  <div className="col-md-12">
                    <div className="accordion faq" id="regularAccordionRobots">
                      <div className="accordion-item">
                        <h2
                          id="regularHeadingFirst"
                          className="accordion-header"
                        >
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseFirst"
                            aria-expanded="true"
                            aria-controls="regularCollapseFirst"
                          >
                            What documents are needed to sell a property?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseFirst"
                          className="accordion-collapse show collapse"
                          aria-labelledby="regularHeadingFirst"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            When selling a property, you will need the title
                            deed, recent property tax receipts, utility bills,
                            any existing mortgage information, and
                            identification documents. Your real estate agent can
                            provide a complete list of required documents.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="regularHeadingSecond"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseSecond"
                            aria-expanded="false"
                            aria-controls="regularCollapseSecond"
                          >
                            How is the rent price determined for a property?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseSecond"
                          className="accordion-collapse collapse"
                          aria-labelledby="regularHeadingSecond"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            The rent price for a property is determined by
                            factors such as the property's location, size,
                            condition, amenities, and the current market demand.
                            A property management company or a real estate agent
                            can help you set a competitive rental price.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="regularHeadingThird"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseThird"
                            aria-expanded="false"
                            aria-controls="regularCollapseSecond"
                          >
                            What should I look for in a rental property?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseThird"
                          className="accordion-collapse collapse"
                          aria-labelledby="regularHeadingThird"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            When looking for a rental property, consider factors
                            such as the location, safety, proximity to amenities
                            (schools, shops, public transport), the condition of
                            the property, lease terms, and the landlord’s
                            reputation.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="regularHeadingFourth"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseFourth"
                            aria-expanded="false"
                            aria-controls="regularCollapseSecond"
                          >
                            How do I apply for a rental property?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseFourth"
                          className="accordion-collapse collapse"
                          aria-labelledby="regularHeadingFourth"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            To apply for a rental property, you will typically
                            need to fill out a rental application form, provide
                            identification, proof of income, rental history, and
                            possibly a credit report. The landlord or property
                            manager may also conduct a background check.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2
                          className="accordion-header"
                          id="regularHeadingFifth"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseFifth"
                            aria-expanded="false"
                            aria-controls="regularCollapseSecond"
                          >
                            What are the steps to buying a property?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseFifth"
                          className="accordion-collapse collapse"
                          aria-labelledby="regularHeadingFifth"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            The steps to buying a property include determining
                            your budget, getting pre-approved for a mortgage,
                            working with a real estate agent to find properties,
                            making an offer, conducting inspections, securing
                            financing, and closing the sale.
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="regularHeadingSix">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#regularCollapseSix"
                            aria-expanded="false"
                            aria-controls="regularCollapseSecond"
                          >
                            What is the process for getting a mortgage?
                          </button>
                        </h2>
                        <div
                          id="regularCollapseSix"
                          className="accordion-collapse collapse"
                          aria-labelledby="regularHeadingSix"
                          data-bs-parent="#regularAccordionRobots"
                        >
                          <div className="accordion-body">
                            Dubai’s Tax free and booming economy is the heaven
                            for investors. Especially the real estate sector
                            have seen insane growth. With Al Maktoum
                            international Airport, the real estate and others
                            will see another boom.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-75 pb-75 container text-center">
              <div className="anm_mod container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="sec-head m-0 pb-1 uppercase">
                      subscribe for our <span>newsletter</span>
                    </h3>
                    <p>Sign up for exclusive news and market updates!</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-7">
                    <input
                      type="text"
                      className="form-control float-end w-60"
                      name="name"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-sm-5">
                    <a href="" className="submit-btn">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </PageLayout>
      </>
    );
}
