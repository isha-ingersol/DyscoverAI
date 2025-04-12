import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/home.css';
import homeImage from '../assets/images/home-image.jpg';
// import shapeTwo from '../assets/images/shape/shape-2.png';
// import shapeThree from '../assets/images/shape/shape-3.png';
// import shapeFour from '../assets/images/shape/shape-4.png';

function Home({ className }) {
    return (
        <>
            <section id="" className={`home-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 home-image-container">
                            <img src={homeImage} alt="Illustration" />
                        </div>
                        <div className="col-lg-6">
                            <div className="home-content">
                                <h1 className="title">
                                        <span>40%</span> of learning disabilities go <span>undiagnosed</span> in childhood.
                                </h1>
                                <p>
                                    With our unique AI-powered tool, DyscoverAI
                                    helps identify early signs of learning disabilities 
                                    through handwriting analysis. 
                                </p>
                                <ul>
                                    <li>
                                        <Link to="/assessment">
                                            Start Free Assessment
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="home-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="home-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="home-shape-3">
                    <img src={shapeFour} alt="" />
                </div> */}
            </section>
        </>
    );
}

export default Home;