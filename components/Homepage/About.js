import React from 'react';

const About = () => {
    return (
        <div>            
            <section className="about-section">
                <div className="auto-container">
                <div className="tabs-box">
                    <div className="tabs-content" id="content_block_01">
                    <div className="tab active-tab" id="tab-1">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 content-column">
                            <div className="content-box">
                            <div className="sec-title text-left">
                                <p>About Company</p>
                                <h2>Transform your pile of data into a powerful tool</h2>
                                <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                            </div>
                            <div className="text">
                                <p>Database Academy’s mission is to provide you the fundamentals and train you to excel in the field of data science. We will help you to go through any challenges as well as drive your career forward.</p>
                            </div>
                            <ul className="list-item clearfix">
                                <li><span className="dots" />Idea of denouncing pleasure &amp; praising</li>
                                <li><span className="dots" />Ever undertakes laborious physical</li>
                                <li><span className="dots" />Avoids a pain that produces no resultant</li>
                                <li><span className="dots" />Great explorer of the real truth</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 inner-column">
                            <div className="inner-box">
                            <div className="video-inner" style={{backgroundImage: 'url(assets/images/background/video-1.png)'}}>
                                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play-button" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab" id="tab-2">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 content-column">
                            <div className="content-box">
                            <div className="sec-title text-left">
                                <p>About Company</p>
                                <h2>Vison is to bring the power of AI to every business</h2>
                                <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                            </div>
                            <div className="text">
                                <p>As a solution providing company we offer a wide range of consulting, development &amp; quality services with 100% satisfaction.</p>
                            </div>
                            <ul className="list-item clearfix">
                                <li><span className="dots" />Idea of denouncing pleasure &amp; praising</li>
                                <li><span className="dots" />Ever undertakes laborious physical</li>
                                <li><span className="dots" />Avoids a pain that produces no resultant</li>
                                <li><span className="dots" />Great explorer of the real truth</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 inner-column">
                            <div className="inner-box">
                            <div className="video-inner" style={{backgroundImage: 'url(assets/images/background/video-1.jpg)'}}>
                                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play-button" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab" id="tab-3">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 content-column">
                            <div className="content-box">
                            <div className="sec-title text-left">
                                <p>About Company</p>
                                <h2>Vison is to bring the power of AI to every business</h2>
                                <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                            </div>
                            <div className="text">
                                <p>As a solution providing company we offer a wide range of consulting, development &amp; quality services with 100% satisfaction.</p>
                            </div>
                            <ul className="list-item clearfix">
                                <li><span className="dots" />Idea of denouncing pleasure &amp; praising</li>
                                <li><span className="dots" />Ever undertakes laborious physical</li>
                                <li><span className="dots" />Avoids a pain that produces no resultant</li>
                                <li><span className="dots" />Great explorer of the real truth</li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-6 col-sm-12 inner-column">
                            <div className="inner-box">
                            <div className="video-inner" style={{backgroundImage: 'url(assets/images/background/video-1.jpg)'}}>
                                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play-button" /></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tab-btn-box">
                    <ul className="tab-btns tab-buttons clearfix">
                        <li className="tab-btn active-btn" data-tab="#tab-1"><h4>Our Mission</h4></li>
                        <li className="tab-btn" data-tab="#tab-2"><h4>Our Vison</h4></li>
                        <li className="tab-btn" data-tab="#tab-3"><h4>Core Values</h4></li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default About;