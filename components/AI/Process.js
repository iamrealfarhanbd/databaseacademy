import React from 'react';

const Process = () => {
    return (
        <div>
             <section className="process-style-two" style={{backgroundImage: 'url(assets/images/background/process-bg-1.jpg)'}}>
                <div className="auto-container">
                <div className="sec-title text-center style-two">
                    <p>Our Work Process</p>
                    <h2>Simple &amp; clean work process</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="inner-content">
                    <div className="line" style={{backgroundImage: 'url(assets/images/icons/line-1.png)'}} />
                    <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                        <div className="work-block-two">
                        <div className="inner-box">
                            <div className="arrow-box" style={{backgroundImage: 'url(assets/images/icons/arrow-1.png)'}} />
                            <div className="icon-box">
                            <div className="border-line" style={{backgroundImage: 'url(assets/images/icons/border-1.png)'}} />
                            <i className="flaticon-big-data" />
                            </div>
                            <div className="count-box wow zoomIn animated" data-wow-delay="00ms" data-wow-duration="1500ms"><span>01</span></div>
                            <div className="content-box wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <h4><a href="index-2.html">Frame the Problem</a></h4>
                            <p>To take a trivial example, which idea of ever undertakes.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                        <div className="work-block-two">
                        <div className="inner-box">
                            <div className="arrow-box" style={{backgroundImage: 'url(assets/images/icons/arrow-1.png)'}} />
                            <div className="icon-box">
                            <div className="border-line" style={{backgroundImage: 'url(assets/images/icons/border-1.png)'}} />
                            <i className="flaticon-ui" />
                            </div>
                            <div className="count-box wow zoomIn animated" data-wow-delay="200ms" data-wow-duration="1500ms"><span>02</span></div>
                            <div className="content-box wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h4><a href="index-2.html">Collect the Data</a></h4>
                            <p>Best every pleasure is too welcomed every pain avoided.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 work-block">
                        <div className="work-block-two">
                        <div className="inner-box">
                            <div className="icon-box">
                            <div className="border-line" style={{backgroundImage: 'url(assets/images/icons/border-1.png)'}} />
                            <i className="flaticon-brain" />
                            </div>
                            <div className="count-box wow zoomIn animated" data-wow-delay="400ms" data-wow-duration="1500ms"><span>03</span></div>
                            <div className="content-box wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <h4><a href="index-2.html">Process the Data</a></h4>
                            <p>Have to be repudiated annoyances accepted the wise.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="more-btn wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms"><a href="index-2.html" className="theme-btn style-five"><i className="flaticon-next" />Get Started</a></div>
                </div>
                </div>
            </section> 
        </div>
    );
};

export default Process;