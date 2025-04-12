import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo7 from "../assets/images/logo-appie-dark.png";
import logo from "../assets/images/logo.png";
import StickyMenu from "../lib/StickyMenu.js";
import "../assets/css/navbar.css"; 
import "../assets/css/navigation.css"; 

function NavBar({
    darkEnable = false,
    action,
    langEnabled = false,
    changeMode,
    changeModeLan,
    dark,
    className,
}) {
    const location = useLocation();

    useEffect(() => {
        // Scroll to the correct section based on the URL
        const sectionId = location.pathname.replace("/", "");
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Scroll to top for the home page
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <header className={`header-container sticky-header ${className || ""}`}>
            <div className="container">
                <div className="header-nav-box">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                            <div className="logo-container">
                                <Link to="/">
                                    {/* <img src={darkEnable && dark ? logo7 : logo} alt="Logo" /> */}
                                    <img src={darkEnable && dark ? logo : logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                            <div className="main-navigation">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/how-it-works">How it Works</Link></li>
                                    <li><Link to="/assessment">Assessment</Link></li>
                                    <li>
                                        <Link to="/learn-more">Learn More</Link> <i className="fal fa-angle-down" />
                                        <ul className="sub-menu">
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/6005-dyslexia" target="_blank" rel="noopener noreferrer">Dyslexia</a></li>
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/23294-dysgraphia" target="_blank" rel="noopener noreferrer">Dysgraphia</a></li>
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/23949-dyscalculia" target="_blank" rel="noopener noreferrer">Dyscalculia</a></li>
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/4784-attention-deficithyperactivity-disorder-adhd" target="_blank" rel="noopener noreferrer">ADHD</a></li>
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/pervasive-developmental-disorders" target="_blank" rel="noopener noreferrer">PDD</a></li>
                                            <li><a href="https://my.clevelandclinic.org/health/diseases/4865-learning-disabilities-what-you-need-to-know" target="_blank" rel="noopener noreferrer">Other</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about">About</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                            <div className="right-nav-controls text-right">
                                {darkEnable && (
                                    <span className={dark ? "sun-icon" : "moon-icon"} onClick={changeMode}>
                                        {dark ? "☀️" : "🌑"}
                                    </span>
                                )}
                                {langEnabled && (
                                    <span className="language-toggle ml-3" onClick={changeModeLan}>
                                        {langEnabled ? "RTL" : "LTR"}
                                    </span>
                                )}
                                <Link className="login-button" to="#">Login</Link>
                                <Link to="/assessment" className="start-assessment-button ml-30">Start Free Assessment</Link>
                                <div onClick={action} className="mobile-menu-toggle ml-30 canvas_open d-lg-none d-block">
                                    <i className="menu-icon fa fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;