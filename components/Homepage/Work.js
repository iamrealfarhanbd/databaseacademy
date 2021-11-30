import React from 'react';

const Work = () => {
    return (
        <div>
            <section className="work-process">
                <div className="auto-container">
                <div className="sec-title text-center">
                    <p>Our Work Process</p>
                    <h2>Additional essentials we provide just for you </h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-big-data" />
                            <div className="count">01</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Free Resources</a></h4>
                        <p>Have a better understanding of the industry with our free resources.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-ui" />
                            <div className="count">02</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Free quiz</a></h4>
                        <p>Evaluate yourself and know where to start with our free quiz.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                    <div className="work-block-one wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box">
                            <i className="flaticon-brain-1" />
                            <div className="count">03</div>
                            <div className="bg-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-1.png)'}} />
                            <div className="overlay-pattern" style={{backgroundImage: 'url(assets/images/icons/icon-bg-2.png)'}} />
                        </div>
                        <h4><a href="index.html">Tips video</a></h4>
                        <p>Gain extra knowledge from the experts.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Work;