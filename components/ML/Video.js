import React from 'react';

const Video = () => {
    return (
        <div>       
            <section className="video-faq">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-21.png)'}} />
                <div className="auto-container">
                <div className="video-inner">
                    <div className="video-box" style={{backgroundImage: 'url(assets/images/background/video-3.jpg)'}}>
                    <div className="video-content">
                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption><i className="flaticon-play-button" /></a>
                        <h3>Product maintenace and support</h3>
                    </div>
                    </div>
                </div>
                <div className="faq-inner">
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 content-column">
                        <div id="content_block_06">
                        <div className="content-box">
                            <div className="sec-title text-left">
                            <p>Client Faq’s</p>
                            <h2>Questions and answers for common ML queries</h2>
                            <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                            </div>
                            <div className="text">
                            <p>Do you have some other questions please get touch with our expert team.</p>
                            </div>
                            <div className="btn-box"><a href="faq.html" className="btn-style-eight">More Answers</a></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 inner-column">
                        <div id="content_block_07">
                        <ul className="accordion-box">
                            <li className="accordion block">
                            <div className="acc-btn active">
                                <div className="icon-outer"><i className="fas fa-plus" /></div>
                                <h5>What is the difference between a Data Scientist, Data Analyst?</h5>
                            </div>
                            <div className="acc-content current">
                                <div className="text">
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power choice is untrammelled and when nothing prevents our being able do what we like best, every pleasure is to be welcomed and every pain avoided. </p>
                                </div>
                            </div>
                            </li>
                            <li className="accordion block">
                            <div className="acc-btn">
                                <div className="icon-outer"><i className="fas fa-plus" /></div>
                                <h5>Why focus on Data Science?</h5>
                            </div>
                            <div className="acc-content">
                                <div className="text">
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power choice is untrammelled and when nothing prevents our being able do what we like best, every pleasure is to be welcomed and every pain avoided. </p>
                                </div>
                            </div>
                            </li>
                            <li className="accordion block">
                            <div className="acc-btn">
                                <div className="icon-outer"><i className="fas fa-plus" /></div>
                                <h5>Can i have multiple activities in single feature?</h5>
                            </div>
                            <div className="acc-content">
                                <div className="text">
                                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power choice is untrammelled and when nothing prevents our being able do what we like best, every pleasure is to be welcomed and every pain avoided. </p>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Video;