import { useState } from 'react';

import CountUp from 'react-countup';
import PageLayout from '../PageLayout';
import { GoogleMap, Marker } from '@react-google-maps/api';

export const AboutUs = () => {
    const locationMaps = [
        {
            key: 1,
            Name: 'Abudhabi HeadQuarter ',
            Address: 'Das Tower, Sultan Bin Zayed Street /n 32nd Street - Khalidiyah St - Abu Dhabi',
            ContactNo: '+971 800 1444',
            Coordinate: {
                lat: 24.4687727,
                lng: 54.3378939,
            },
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.6926465006513!2d54.337705800000016!3d24.468927099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e65e7bcfaaaab%3A0x8dc68825dac19b5a!2sNationwide%20Middle%20East%20Properties%20LLC!5e0!3m2!1sen!2sae!4v1739884336079!5m2!1sen!2sae',
        },
        {
            key: 2,
            Name: 'Abudhabi West Yas HeadQauarter ',
            Address: 'Yas Island - West Yas Plaza - - Abu Dhabi',
            ContactNo: '+971524890630',
            Coordinate: {
                lat: 24.4934326,
                lng: 54.5870003,
            },
            mapUrl: 'https://www.google.com/maps/place/Nationwide+Middle+East+WestYas/@24.4934326,54.5870003,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e451899291cdd:0xa871a3dec08d056a!8m2!3d24.4934326!4d54.5870003!16s%2Fg%2F11sdylrn76?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D',
        },
        {
            key: 3,
            Name: 'SADIYAT PRIVATE OFFICE ',
            Address: 'Laffan St - near ny university - Al Saadiyat Island - SDW4 - Abu Dhabi',
            ContactNo: '+971 800 1444',
            Coordinate: {
                lat: 24.5231149,
                lng: 54.4329035,
            },
            mapUrl: 'https://www.google.com/maps/place/Nationwide+Private+Office/@24.5231149,54.4329035,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5e679f2d2cbd77:0xad25ed2bad9de27c!8m2!3d24.5231149!4d54.4329035!16s%2Fg%2F11x0mt7zzt?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D',
        },
    ];

    const [mapUrl, setMapUrl] = useState(locationMaps[0].mapUrl);
    const [coordinate, setCoordinate] = useState({ lat: 24.4687727, lng: 54.3378939 });
    const [selectedLocation, setSelectedLocation] = useState(1);

    return (
        <PageLayout>
            <>
                <section className="ban-main about-ban">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 pt-5">
                                <h2>ABOUT NATIONWIDE</h2>
                                <p>
                                    We are pioneers in the industry, unleashing innovative property solutions in the
                                    UAE.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>About Us</h1>
                                <h3 className="sec-head pb-4">
                                    WHO <span>WE ARE</span>
                                </h3>
                                <p>
                                    Since its inception in 2011, the visionary Ameen Al Qudsi has led Nationwide Middle
                                    East Properties to swiftly become an industry leader in the UAE’s real estate
                                    market. Though we began as a small team of 7 employees, our commitment to
                                    transparency, credibility, and prioritization of clients’ needs enabled us to grow
                                    to a team of 92 by 2018. Today, we are proud to be a family of over 350 dedicated
                                    professionals serving our clients from 4 strategically located branches in Abu
                                    Dhabi, Yas Island, Saadiyat Island and Dubai.
                                    <br />
                                    <br />
                                    Our ambition knows no bounds as we aim to continue growing and expanding our reach
                                    in the Real Estate industry. At Nationwide, we are more than just a company; we are
                                    a collective force driven by the desire to exceed expectations, deliver innovative
                                    solutions, and redefine the standards of excellence in real estate.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* i added to close  */}
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>TRUSTED PARTNERS</h1>
                                <h4 className="sec-heada">
                                    <span>More Than</span>50+
                                </h4>
                                <h3 className="pb-4">
                                    TRUSTED <span>PARTNERS</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row partner pt-5">
                            <div className="col-md-3 br-1">
                                <img src="/v2/assets/images/dubizil.png" />
                            </div>
                            <div className="col-md-3 br-1">
                                <img src="/v2/assets/images/propertyfinder.png" />
                            </div>
                            <div className="col-md-3 br-1">
                                <img src="/v2/assets/images/bayut.png" />
                            </div>
                            <div className="col-md-3">
                                <img src="/v2/assets/images/aqarmap.png" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>TRUSTED DEVELOPERS</h1>
                                <h3 className="sec-head pb-4">
                                    TRUSTED <span>DEVELOPERS</span>
                                </h3>
                            </div>
                        </div>
                        <div className="row develpers pt-5">
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/aldar.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/rakproperty.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/tiger.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/sobha.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/samana.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/reportage.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/bloom.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/eaglehill.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/modon.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/imkan.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/caliber.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/adcb.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/fab.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/emaar.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/damac.png" />
                            </div>
                            <div className="col-6 col-md-3">
                                <img src="/v2/assets/images/bighatti.png" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>Our success</h1>
                                <h3 className="sec-head">
                                    OUR SUCCESS <span>IN NUMBERS</span>
                                </h3>
                                <p className="grey-txt weight-300">NUMBERS NEVER LIE !</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <img src={'/v2/assets/images/manageproperty-ic.png'} alt="Imag1" />
                                    <div className="counter-main">
                                        <span className="counter">
                                            {/* 2000 */}
                                            <CountUp
                                                start={0}
                                                end={2000}
                                                duration={3}
                                                enableScrollSpy={true}
                                                scrollSpyDelay={3}
                                                scrollSpyOnce={true}
                                            />
                                        </span>
                                        <span className="d-inline-block">
                                            <h2>+</h2>
                                        </span>
                                    </div>
                                    <p>MANAGED PROPERTIES</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <img src={'/v2/assets/images/satisfyedclient-ic.png'} alt="image2" />
                                    <div className="counter-main">
                                        <span className="counter">
                                            {/* 100000 */}
                                            <CountUp
                                                start={0}
                                                end={100000}
                                                duration={3}
                                                enableScrollSpy={true}
                                                scrollSpyDelay={3}
                                                scrollSpyOnce={true}
                                            />
                                        </span>
                                        <span className="d-inline-block">
                                            <h2>+</h2>
                                        </span>
                                    </div>
                                    <p>SATISFIED CLIENT</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <img src="/v2/assets/images/topaward-ic.png" alt="image3" />
                                    <div className="counter-main">
                                        <span className="counter">
                                            <CountUp
                                                start={0}
                                                end={100}
                                                duration={3}
                                                enableScrollSpy={true}
                                                scrollSpyDelay={3}
                                                scrollSpyOnce={true}
                                            />
                                        </span>
                                        <span className="d-inline-block">
                                            <h2>+</h2>
                                        </span>
                                    </div>
                                    <p>TOP AWARDS</p>
                                </div>
                            </div>
                            <div className="four col-md-3">
                                <div className="counter-box">
                                    <img src="/v2/assets/images/expertproffessional-oic.png" alt="image4" />
                                    <div className="counter-main">
                                        <span className="counter">
                                            <CountUp
                                                start={0}
                                                end={550}
                                                duration={10}
                                                enableScrollSpy={true}
                                                scrollSpyDelay={3}
                                                scrollSpyOnce={true}
                                            />
                                            {/* 550 */}
                                        </span>
                                        <span className="d-inline-block">
                                            <h2>+</h2>
                                        </span>
                                    </div>
                                    <p>EXPERT PROFESSIONALS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 ceo text-start">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>OUR CEO</h1>
                                <h3 className="sec-head pb-4">
                                    MESSAGE FROM <span>OUR CEO</span>
                                </h3>
                                <p>
                                    Dear Valued Clients and Partners,
                                    <br />
                                    <br />
                                    I am immensely proud to reflect on the journey of Nationwide Middle East Properties.
                                    Since our humble inception in Abu Dhabi, we have expanded our reach to Yas Island,
                                    Saadiyat Island and Dubai, and are excited about our upcoming ventures in Ras Al
                                    Khaimah.
                                    <br />
                                    <br />
                                    Our growth has been fueled not just by our passion for real estate but also by our
                                    unwavering commitment to transparency and honest information exchange. This
                                    principle is fundamental to our success and has enabled us to consistently deliver
                                    exceptional experiences to our clients.
                                    <br />
                                    <br />
                                    At Nationwide Middle East Properties, our team embodies the spirit of innovation and
                                    excellence in real estate. Each member brings a unique expertise, contributing to
                                    our reputation as a leader in the industry. Our culture prioritizes integrity and
                                    ethical practices, ensuring that every interaction and transaction is conducted with
                                    the highest standards of professionalism.
                                    <br />
                                    <br />
                                    We are dedicated to advancing the field of real estate through continuous learning
                                    and adaptation to market trends, ensuring we stay ahead in providing top-tier
                                    services. This commitment to excellence and ethical practices underpins every aspect
                                    of our operations, setting us apart in the industry.
                                    <br />
                                    <br />
                                    We are committed to nurturing a culture of openness, guaranteeing our clients are
                                    thoroughly informed and confident in their real estate decisions. Our future shines
                                    bright as we continue to build on these foundations, ensuring that Nationwide Middle
                                    East Properties remains synonymous with trust, integrity, and exceptional client
                                    service.
                                    <br />
                                    <br />
                                    Warm regards
                                    <br />
                                    AMEEN ALQUDSI
                                </p>
                            </div>
                            <div className="col-lg-5 ceo-msg">
                                <img src="/v2/assets/images/amin.jpeg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- <h1>TRUSTED PARTNERS</h1> --> */}
                                <h3 className="pb-0">
                                    MORE THAN <span>WORDS</span>
                                </h3>
                                <p>Living Our Mission, Embracing Our Vision, Upholding Our Values.</p>
                            </div>
                        </div>
                        <div className="row tabs pt-5">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        href=""
                                        className="tabs-rgt active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        OUR VISION
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        href=""
                                        className=""
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        OUR MISSION
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        href=""
                                        className="tabs-lft"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        OUR VALUES
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content text-danger p-3" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <p>
                                        Nationwide Middle East Properties envisions being the leading real estate agency
                                        in the UAE, renowned for its integrity, innovation, and excellence. We aim to
                                        redefine the real estate experience by combining deep market knowledge with a
                                        commitment to ethical practices and client satisfaction. Our vision is to expand
                                        our footprint while maintaining our reputation as a trusted partner in the real
                                        estate journey, offering transparent, informed, and personalized services that
                                        meet the evolving needs of our diverse clientele. We are dedicated to shaping
                                        the future of real estate with a focus on sustainable growth, community
                                        development, and enhancing the value we deliver to our clients and stakeholders.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-contact"
                                    role="tabpanel"
                                    aria-labelledby="pills-contact-tab"
                                >
                                    <p>
                                        Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the
                                        standard dummy text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 branches text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>LOCATION</h1>
                                <h3 className="sec-head pb-0">
                                    OUR <span>BRANCHES</span>
                                </h3>
                                <p>It’s more than just branches; it’s gateways to achievement.</p>
                            </div>
                        </div>
                        <div className="row tabs tabs-branches pt-5">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a
                                        href="#"
                                        className="tabs-lft"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#dubai"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        DUBAI
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        href="#"
                                        className="active"
                                        id="pills-profile-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#abudhabi"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        ABU DHABI
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a
                                        href="#"
                                        className="tabs-lft"
                                        id="pills-contact-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#rak"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-contact"
                                        aria-selected="false"
                                    >
                                        RAK
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content text-danger branch-main p-0" id="pills-tabContent">
                                <div
                                    className="tab-pane fade"
                                    id="dubai"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-4 pl-5">
                                            <h2>DUBAI BRANCH</h2>
                                            <p>
                                                <img src="/v2/assets/images/map-ic.svg" /> 2 Al Asayel St - Business
                                                Bay - Bay Square - Dubai
                                            </p>
                                            <p>
                                                <img src="/v2/assets/images/call-ic.svg" /> 04 252 7879
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <iframe
                                                src={
                                                    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5289687123027!2d55.279255899999995!3d25.185377900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6939db47132b%3A0x96a49aabd4e944fa!2sNationwide%20Middle%20East%20Properties%20LLC!5e0!3m2!1sen!2sae!4v1739884854343!5m2!1sen!2sae'
                                                }
                                                width={'100%'}
                                                height={'400px'}
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy={'no-referrer-when-downgrade'}
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade show active"
                                    id="abudhabi"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-4 pl-5">
                                            {locationMaps.map((branch) => (
                                                <div
                                                    key={branch.key}
                                                    // onClick={() => {
                                                    //     setMapUrl(branch.mapUrl);
                                                    // }}
                                                >
                                                    <h2
                                                        className={selectedLocation == branch.key ? '' : 'white-txt'}
                                                        onClick={() => {
                                                            setSelectedLocation(branch.key);
                                                            setMapUrl(branch.mapUrl);
                                                            setCoordinate(branch.Coordinate);
                                                        }}
                                                    >
                                                        {branch.Name}
                                                    </h2>
                                                    <p>
                                                        <img src="/v2/assets/images/map-ic.svg" />
                                                        {branch.Address.replace('/n', '<br/>')}
                                                    </p>
                                                    <p>
                                                        <img src="/v2/assets/images/call-ic.svg" />
                                                        {branch.ContactNo}
                                                    </p>
                                                    {branch.key < 3 && <hr />}
                                                </div>
                                            ))}

                                            {/* <h2>ABUDHABI-HEADQUARTER</h2>
                                            <p>
                                                <img src="/v2/assets/images/map-ic.svg" />
                                                Das Tower, Sultan Bin Zayed Street
                                                <br />
                                                32nd Street - Khalidiyah St - Abu Dhabi
                                            </p>
                                            <p>
                                                <img src="/v2/assets/images/call-ic.svg" /> +971 800 1444
                                            </p>
                                            <hr />
                                            <h2 className="white-txt">ABUDHABI HEADQUARTER</h2>
                                            <p>
                                                <img src="/v2/assets/images/map-ic.svg" />
                                                Yas Island - West Yas Plaza - - Abu Dhabi
                                            </p>
                                            <p>
                                                <img src="/v2/assets/images/call-ic.svg" /> +971524890630
                                            </p> */}
                                        </div>
                                        <div className="col-lg-6">
                                            <GoogleMap
                                                mapContainerClassName="office-map-container"
                                                center={coordinate}
                                                zoom={15}
                                            >
                                                <Marker position={coordinate} />
                                            </GoogleMap>
                                            {/* <IframeComponent key={selectedLocation} source={mapUrl} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="rak"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 p-4 pl-5">
                                            <h2>DUBAI BRANCH</h2>
                                            <p>
                                                <img src="/v2/assets/images/map-ic.svg" /> 2 Al Asayel St - Business
                                                Bay - Bay Square - Dubai
                                            </p>
                                            <p>
                                                <img src="/v2/assets/images/call-ic.svg" /> 04 252 7879
                                            </p>
                                        </div>
                                        <div className="col-lg-6">
                                            <iframe
                                                src={
                                                    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5289687123027!2d55.279255899999995!3d25.185377900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6939db47132b%3A0x96a49aabd4e944fa!2sNationwide%20Middle%20East%20Properties%20LLC!5e0!3m2!1sen!2sae!4v1739884854343!5m2!1sen!2sae'
                                                }
                                                width={'100%'}
                                                height={'400px'}
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-75 pb-75 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="sec-head m-0 pb-1 uppercase">
                                    Subscribe for our <span>newsletter</span>
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
                                <a href="#" className="submit-btn">
                                    Submit
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </PageLayout>
    );
};
