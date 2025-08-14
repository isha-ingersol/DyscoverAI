import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/css/footer.css";

function FooterHome({ className }) {
  return (
    <section className={`dyscoverAI-footer-area ${className || ""}`}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-about-widget">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="DyscoverAI Logo" />
                </Link>
              </div>
              <p>
                DyscoverAI helps identify early signs of learning disabilities
                based on handwriting analysis.
              </p>
              <Link to="/about-us">
                Read More <i className="fal fa-arrow-right" />
              </Link>

              {/* Social Media Links */}
              <div className="social mt-30">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-navigation">
              <h4 className="title">Company</h4>
              <ul>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/service">Service</Link>
                </li>
                <li>
                  <Link to="#">Case Studies</Link>
                </li>
                <li>
                  <Link to="/news">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-navigation">
              <h4 className="title">Support</h4>
              <ul>
                <li>
                  <Link to="#">Community</Link>
                </li>
                <li>
                  <Link to="#">Resources</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget-info">
              <h4 className="title">Get In Touch</h4>
              <ul>
                <li>
                  <a href="mailto:support@dyscoverAI.com">
                    <i className="fal fa-envelope" /> support@dyscoverAI.com
                  </a>
                </li>
                <li>
                  <a href="tel:+64234276244">
                    <i className="fal fa-phone" /> +44 xxxx xxxxxx
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fal fa-map-marker-alt" /> University of Birmingham,
                    Edgbaston, United Kingdom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
              {/* App Download Buttons */}
              <div className="apps-download-btn">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-apple" /> Download for iOS
                    </a>
                  </li>
                  <li>
                    <a className="item-2" href="#">
                      <i className="fab fa-google-play" /> Download for Android
                    </a>
                  </li>
                </ul>
              </div>

              {/* Copyright Notice */}
              <div className="copyright-text">
                <p>Copyright © {new Date().getFullYear()} DyscoverAI. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterHome;