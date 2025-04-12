import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Drawer({ drawer, action }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    // Toggle dropdown function
    const toggleDropdown = (menuName) => {
        setOpenDropdown(openDropdown === menuName ? null : menuName);
    };

    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        {/* Home */}
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        {/* How it Works */}
                                        <li>
                                            <Link to="/how-it-works">How it Works</Link>
                                        </li>
                                        {/* Assessment */}
                                        <li>
                                            <Link to="/assessment">Assessment</Link>
                                        </li>
                                        {/* Learn More - Dropdown */}
                                        <li className="menu-item-has-children">
                                            <a href="/learn-more" onClick={() => toggleDropdown("learnMore")}>
                                                Learn More{" "}
                                                <i
                                                    className={`fa ${
                                                        openDropdown === "learnMore"
                                                            ? "fa-angle-up"
                                                            : "fa-angle-down"
                                                    }`}
                                                />
                                            </a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: openDropdown === "learnMore" ? "auto" : "0px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {/* <li><Link to="/about-us">Dyslexia</Link></li>
                                                <li><Link to="/about-us-another">Dysgraphia</Link></li>
                                                <li><Link to="/error">Dyscalculia</Link></li>
                                                <li><Link to="/shops">ADHD</Link></li>
                                                <li><Link to="/shops/shop-details">ASD</Link></li>
                                                <li><Link to="/shops/shop-details">Other</Link></li> */}


                                                <li><a href="https://my.clevelandclinic.org/health/diseases/6005-dyslexia" target="_blank" rel="noopener noreferrer">Dyslexia</a></li>
                                                <li><a href="https://my.clevelandclinic.org/health/diseases/23294-dysgraphia" target="_blank" rel="noopener noreferrer">Dysgraphia</a></li>
                                                <li><a href="https://my.clevelandclinic.org/health/diseases/23949-dyscalculia" target="_blank" rel="noopener noreferrer">Dyscalculia</a></li>
                                                <li><a href="https://my.clevelandclinic.org/health/diseases/4784-attention-deficithyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer">ADHD</a></li>
                                                <li><a href="https://my.clevelandclinic.org/health/diseases/pervasive-developmental-disorders" target="_blank" rel="noopener noreferrer">PDD</a></li>
                                                <li><a href="https://my.clevelandclinic.org/health/diseases/4865-learning-disabilities-what-you-need-to-know" target="_blank" rel="noopener noreferrer">Other</a></li>

                                            </ul>
                                        </li>
                                        {/* About */}
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fal fa-envelope"></i> support@dyscoverAI.com</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fal fa-phone"></i> +(642) 342 762 44</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fal fa-map-marker-alt"></i> 442 Belle Terre St Floor 7, San Francisco, AV 4206</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;