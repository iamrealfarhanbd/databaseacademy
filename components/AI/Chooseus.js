import React from 'react';

const Chooseus = () => {
    return (
        <div>
            <section className="chooseus-section">
                <div className="auto-container">
                <div className="sec-title text-center style-two">
                    <p>Why Choose Us</p>
                    <h2>Reason for people choose us</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_04">
                        <div className="content-box">
                        <div className="single-item">
                            <div className="icon-box">
                            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/icons/icon-bg-4.png)'}} />
                            <i className="flaticon-global" />
                            </div>
                            <div className="box">
                            <h4>Global Experience</h4>
                            <p>Nor again is there anyone who loves or pursues pain of itself, because circumstances.</p>
                            <a href="index-2.html"><i className="fas fa-arrow-right" />More Details</a>
                            </div>
                        </div>
                        <div className="single-item text-right">
                            <div className="icon-box">
                            <div className="bg-layer" style={{backgroundImage: 'url(assets/images/icons/icon-bg-4.png)'}} />
                            <i className="flaticon-analysis" />
                            </div>
                            <div className="box">
                            <h4>Value for Results</h4>
                            <p>Except obtain some advantages from ithas any to find fault with a consequences.</p>
                            <a href="index-2.html">More Details<i className="fas fa-arrow-left" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                    <div id="video_block_01">
                        <div className="video-inner wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: 'url(assets/images/background/video-2.jpg)'}}>
                        <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-14.png)'}} />
                        <div className="video-btn">
                            <div className="btn-bg rotate-me" style={{backgroundImage: 'url(assets/images/icons/icon-bg-5.png)'}} />
                            <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="fas fa-play" /></a>
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

export default Chooseus;