import React from 'react';

const Skill = () => {
    return (
        <div>
                    
            <section className="skills-section">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-4.png)'}} />
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                    <div className="image-box wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <figure className="image js-tilt"><img src="assets/images/resource/illastration-1.png" alt="" /></figure>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                    <div id="content_block_02">
                        <div className="content-box">
                        <div className="sec-title text-left">
                            <p>Skills &amp; Facts</p>
                            <h2>Join the database e-learning community</h2>
                            <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                        </div>
                        <div className="text">
                            <p>Database academy will help you whether you want develop database skills for professional growth or personal development. We make e-learning easy and accessible for all.</p>
                        </div>
                        <div className="inner-box">
                            <div className="progress-box">
                            <h5>Enjoy unlimited access at any time and from any place.</h5>
                            <div className="icon-box"><i className="flaticon-chat" /></div>
                            <div className="bar">
                                <div className="bar-inner count-bar" data-percent="62%"><div className="count-text">62%</div></div>
                            </div>
                            </div>
                            <div className="progress-box">
                            <h5>Enrol into courses with no entry requirements.</h5>
                            <div className="icon-box"><i className="flaticon-cloud-computing" /></div>
                            <div className="bar">
                                <div className="bar-inner count-bar" data-percent="89%"><div className="count-text">89%</div></div>
                            </div>
                            </div>
                            <div className="progress-box">
                            <h5>Reap the benefits of easy-to-understand and insightful content.</h5>
                            <div className="icon-box"><i className="flaticon-analysis-1" /></div>
                            <div className="bar">
                                <div className="bar-inner count-bar" data-percent="75%"><div className="count-text">75%</div></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;