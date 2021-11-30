import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="service-style-two">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-13.png)'}} />
                <figure className="image-layer"><img src="assets/images/resource/illastration-2.png" alt="" /></figure>
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-9 col-lg-12 col-md-12 inner-column">
                    <div className="inner-content">
                        <div className="sec-title text-center light">
                        <p>Our Services</p>
                        <h2>Services we offer for you</h2>
                        <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-4.png)'}} />
                        </div>
                        <div className="service-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                        <div className="service-block-two">
                            <div className="inner-box">
                            <div className="text-layer"><h2>Mac</h2></div>
                            <div className="icon-box"><i className="flaticon-brain-3" /></div>
                            <h4><a href="service-details.html">Machine Learning</a></h4>
                            <p>Simple &amp; easy distinguish in when our power.</p>
                            <div className="link"><a href="service-details.html"><i className="flaticon-next" />Read More</a></div>
                            </div>
                        </div>
                        <div className="service-block-two">
                            <div className="inner-box">
                            <div className="text-layer"><h2>Deef</h2></div>
                            <div className="icon-box"><i className="flaticon-model" /></div>
                            <h4><a href="service-details.html">Deep Learning</a></h4>
                            <p>Therefore always hold these matters to secure.</p>
                            <div className="link"><a href="service-details.html"><i className="flaticon-next" />Read More</a></div>
                            </div>
                        </div>
                        <div className="service-block-two">
                            <div className="inner-box">
                            <div className="text-layer"><h2>Rre</h2></div>
                            <div className="icon-box"><i className="flaticon-cog" /></div>
                            <h4><a href="service-details.html">Predicitive Analysis</a></h4>
                            <p>Trouble that bound ensue to equaly blame belongs.</p>
                            <div className="link"><a href="service-details.html"><i className="flaticon-next" />Read More</a></div>
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

export default Service;