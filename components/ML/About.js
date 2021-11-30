import React from 'react';

const About = () => {
    return (
        <div>    
            <section className="about-style-three">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_02">
                        <div className="image-box">
                        <figure className="image image-1 wow slideInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><img src="assets/images/resource/illastration-3.png" alt="" /></figure>
                        <figure className="image image-2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms"><a href="assets/images/resource/dashbord-1.jpg" className="lightbox-image"><img src="assets/images/resource/dashbord-1.jpg" alt="" /></a></figure>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_05">
                        <div className="content-box">
                        <div className="sec-title text-left">
                            <p>About Company</p>
                            <h2>Mission is to bring the power of AI to every business</h2>
                            <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                        </div>
                        <div className="text">
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know how to pursue pleasure rationally encounter.</p>
                            <p>Which of us ever undertakes laborious physical exercise, except to obtain advantage from it who do not know how to pursue pleasure.</p>
                        </div>
                        <div className="btn-box"><a href="about.html" className="theme-btn style-six">Read More</a></div>
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