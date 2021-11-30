import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-style-six">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_05">
                        <div className="image-box">
                        <figure className="image image-1"><img src="assets/images/resource/about-3.jpg" alt="" /></figure>
                        <figure className="image image-2"><img src="assets/images/resource/about-4.jpg" alt="" /></figure>
                        <figure className="image image-3"><img src="assets/images/resource/about-5.jpg" alt="" /></figure>
                        <div className="elipse" />
                        <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-46.png)'}} />
                        <div className="text">
                            <span>09</span>
                            <h5>Years<br />of Experience</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_11">
                        <div className="content-box">
                        <div className="sec-title text-left">
                            <p>About Company</p>
                            <h2>Mission is to bring the power of AI to every business</h2>
                            <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                        </div>
                        <div className="text">
                            <p>How all this mistaken idea of denouncing pleasure and praising born and we will give you a complete.</p>
                            <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it but right to find fault with a man who chooses enjoy.</p>
                        </div>
                        <div className="video-btn">
                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play-button" /></a>
                            <h5>Video Intro<br />About Our Company</h5>
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