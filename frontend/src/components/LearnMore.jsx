import React from "react";
import "../assets/css/learnmore.css";

function LearnMore({ className }) {
    return (
        <section id="learn-more" className={`learnmore-area ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Learn More about Learning Disabilities</h2>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 1 */}
                    <div className="learnmore-type">
                        <h3>
                            Dyslexia
                        </h3>
                        <h4>
                            Dyslexia is a learning difficulty which primarily affects reading and writing skills, 
                            specifically with <span>information processing.</span>
                            Dyslexia can also impact on other areas such as <span>organisational skills.</span>
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/6005-dyslexia" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 2 */}
                    <div className="learnmore-type">
                        <h3>
                            Dysgraphia
                        </h3>
                        <h4>
                            Dysgraphia is a neurological condition, where a person has difficulty turning 
                            their <span>thoughts into written language,</span> despite exposure to adequate instruction 
                            and education.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/23294-dysgraphia" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 3 */}
                    <div className="learnmore-type">
                        <h3>
                            Dyscalculia
                        </h3>
                        <h4>
                            Dyscalculia affects brain areas that handle <span>mathematics and math-related skills and understanding.</span>
                            <p />
                            Symptoms usually appear in childhood, but adults may have dyscalculia without knowing it.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/23949-dyscalculia" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="types-container">
                    {/* Type 4 */}
                    <div className="learnmore-type">
                        <h3>
                            Attention Deficit Hyperactivity Disorder (ADHD)
                        </h3>
                        <h4>
                            The most common childhood neurodevelopmental disorders.
                            Children with ADHD often have difficulty with <span> hyperactivity and impulsivity,</span> 
                            and the condition often lasts into adulthood.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/4784-attention-deficithyperactivity-disorder-adhd" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 5 */}
                    <div className="learnmore-type">
                        <h3>
                            Pervasive Developmental Disorder (PDD)
                        </h3>
                        <h4>
                            PDD— also known as autism spectrum disorder (ASD)— is a group of developmental 
                            delays that affect <span>social and communication skills.</span> 
                            The typical onset of PDD occurs around age 3.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/pervasive-developmental-disorders" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>

                    {/* Type 6 */}
                    <div className="learnmore-type">
                        <h3>
                            Other learning disabilities
                        </h3>
                        <h4>
                            There are other learning disabilities that exist. Some of which are:  
                            auditory processing disorder (APD), 
                            language processing disorder, 
                            nonverbal learning disabilities (NVLD),
                            visual perceptual/visual motor deficit, and more.
                        </h4>
                        {/* Learn More Button */}
                        <div className="button-container">
                            <a href="https://my.clevelandclinic.org/health/diseases/4865-learning-disabilities-what-you-need-to-know" className="learnmore-button" target="_blank" rel="noopener noreferrer">
                                Learn More <i className="fal fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LearnMore;
