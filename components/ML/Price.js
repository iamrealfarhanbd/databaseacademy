import React from 'react';

const Price = () => {
    return (
        <div>    
            <section className="pricing-section">
                <div className="title-inner bg-color-1">
                <div className="auto-container">
                    <div className="sec-title text-center">
                    <p>Pricing &amp; Plans</p>
                    <h2>Our affordable pricing plans</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                </div>
                </div>
                <div className="lower-content">
                <div className="auto-container">
                    <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                            <div className="table-header">
                                <div className="header-upper">
                                <h3>Basic</h3>
                                <p>Provide standard plan specially for developers &amp; freelancers</p>
                                </div>
                                <div className="header-lower">
                                <h1><span>$</span>149</h1>
                                <p>Per Month</p>
                                </div>
                            </div>
                            <div className="table-content">
                                <ul>
                                <li>Full Acess Library</li>
                                <li>One User</li>
                                <li>5 Analytic Report</li>
                                <li>24/7 Support</li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <a href="index-3.html" className="btn-style-eight"><i className="flaticon-next" />Get Started</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one active-block wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                            <div className="table-header">
                                <div className="header-upper">
                                <h3>Advanced</h3>
                                <p>Provide standard plan specially for developers &amp; freelancers</p>
                                </div>
                                <div className="header-lower">
                                <h1><span>$</span>249</h1>
                                <p>Per Month</p>
                                </div>
                            </div>
                            <div className="table-content">
                                <ul>
                                <li>Full Acess Library</li>
                                <li>One User</li>
                                <li>5 Analytic Report</li>
                                <li>24/7 Support</li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <a href="index-3.html" className="btn-style-eight"><i className="flaticon-next" />Get Started</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 pricing-block">
                        <div className="pricing-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="pricing-table">
                            <div className="table-header">
                                <div className="header-upper">
                                <h3>Premium</h3>
                                <p>Provide standard plan specially for developers &amp; freelancers</p>
                                </div>
                                <div className="header-lower">
                                <h1><span>$</span>399</h1>
                                <p>Per Month</p>
                                </div>
                            </div>
                            <div className="table-content">
                                <ul>
                                <li>Full Acess Library</li>
                                <li>One User</li>
                                <li>5 Analytic Report</li>
                                <li>24/7 Support</li>
                                </ul>
                            </div>
                            <div className="table-footer">
                                <a href="index-3.html" className="btn-style-eight"><i className="flaticon-next" />Get Started</a>
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

export default Price;