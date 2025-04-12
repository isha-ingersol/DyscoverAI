import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/about.css';

function about({ className }) {
    return (
        <section id="about" className={`about-area ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h3 className="title">About</h3>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 1 */}
                    <div className="about-type">
                        <h3>
                            Our Mission
                        </h3>
                        <h4>
                            To develop a <span>cost-effective</span> machine learning model that helps 
                            parents and educators identify, using <span>handwriting analysis,</span> 
                            early signs of learning disabilities among children and enabling timely action.
                        </h4>
                    </div>

                    {/* Type 2 */}
                    <div className="about-type">
                        <h3>
                            Our Vision
                        </h3>
                        <h4>
                            To create an <span>accessible screening tool</span> that empowers users 
                            to detect learning disabilities early, ensuring that every child receives 
                            the support they need to <span>thrive academically and socially</span>.
                        </h4>
                    </div>

                    {/* Type 3 */}
                    <div className="about-type">
                        <h3>
                            Our Future
                        </h3>
                        <h4>
                            In the future, the use of <span>more handwriting features</span> (eg. pressure) will 
                            also be considered. <span>Tips for users</span> to help the child learn better and a 
                            <span>mobile app</span> for easy usage is being considered.
                        </h4>
                    </div>
                </div>

                {/* Start Free Assessment Button */}
                <div className="button-container">
                    <Link to="/assessment" className="button">Start Free Assessment</Link>
                </div>
            </div>
        </section>
    );
}

export default about;