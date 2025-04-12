import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/howitworks.css';
import step1 from '../assets/videos/child-writing.gif'; 
import step2 from '../assets/videos/take-picture.gif';
import step3 from '../assets/videos/upload-image.gif';

function HowItWorks({ className }) {
    return (
        <section id="how-it-works" className={`howitworks-area ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h3 className="title">How It Works</h3>
                        </div>
                    </div>
                </div>

                <div className="steps-container">
                    {/* Step 1 */}
                    <div className="howitworks-step">
                        <div className="gif-container">
                            <img src={step1} alt="Step 1 Animation" />
                        </div>
                        <h4><span>Copy the text</span> from the screen onto a piece of paper exactly how you see it</h4>
                    </div>

                    {/* Step 2 */}
                    <div className="howitworks-step">
                        <div className="gif-container">
                            <img src={step2} alt="Step 2 Animation" />
                        </div>
                        <h4><span>Take a picture</span> of your writing. Make sure your area is well-lit and legible.</h4>
                    </div>

                    {/* Step 3 */}
                    <div className="howitworks-step">
                        <div className="gif-container">
                            <img src={step3} alt="Step 3 Animation" />
                        </div>
                        <h4><span>Upload the image</span> and get your results in less than 2 minutes.</h4>
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

export default HowItWorks;