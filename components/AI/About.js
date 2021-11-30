import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-style-two">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                    <div id="image_block_01">
                        <div className="image-box wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-12.png)'}} />
                        <figure className="image js-tilt"><img src="assets/images/resource/about-1.png" alt="" /></figure>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                    <div id="content_block_03">
                        <div className="content-box">
                        <div className="sec-title style-two text-left">
                            <p>About Company</p>
                            <h2>Mission is to bring the power of AI to every business</h2>
                            <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                        </div>
                        <div className="text">
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it but right to find fault with a man who chooses enjoy.</p>
                        </div>
                        <div className="lower-box">
                            <div className="icon-box">
                            <div className="bg-box" style={{backgroundImage: 'url(assets/images/icons/icon-bg-3.png)'}} />
                            <i className="flaticon-brain-2" />
                            </div>
                            <h5>Impressive Works Since 2010</h5>
                            <a href="about.html"><i className="flaticon-next" />More About Us</a>
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

export default About;