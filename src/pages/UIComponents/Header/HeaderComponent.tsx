import { NavLink, useLocation } from 'react-router-dom';
// import './header.css';
export const HeaderComponent = () => {
    const location = useLocation();

    return (
        <>
            <header>
                <section className="top-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <ul>
                                    <li></li>
                                    <li>
                                        <img src={'./public/v2/assets/images/whatsapp-ic.svg'} /> Whatsapp
                                    </li>
                                    <li>
                                        <img src={'./public/v2/assets/images/map-ic.svg'} /> Branches
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 social">
                                <ul className="float-end">
                                    <li>
                                        <img src={'./public/v2/assets/images/insta-ic.svg'} alt="23" />
                                    </li>
                                    <li>
                                        <img src={'./public/v2/assets/images/fb-ic.svg'} />
                                    </li>
                                    <li>
                                        <img src={'./public/v2/assets/images/linkden-ic.svg'} />
                                    </li>
                                    <li>
                                        <img src={'./public/v2/assets/images/youtube-ic.svg'} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <nav className="navbar navbar-expand-lg bg-gold sticky-top pt-0">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="./public/v2/assets/images/nwmea-logo-w.png" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 mb-2 me-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="about-us"
                                    //className={isActive ? 'nav-link active' : 'nav-link'}
                                    className={location.pathname === '/about-us' ? 'nav-link active' : 'nav-link'}
                                    //{'nav-link'}
                                    //activeClassName={'active'}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/in-media">
                                    Media Center
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/blogs">
                                    Blogs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/our-achievements">
                                    Achievement
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/services">
                                    Services
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    En
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Arabic
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex position-relative">
                            <div className="search-box">
                                <input className="search-txt" type="text" name="" placeholder="Search" />
                                <a className="search-btn" href="#">
                                    <i className="bi bi-search"></i>
                                </a>
                            </div>
                            <button className="btn primary top-btn" type="submit">
                                Contact Us
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};
