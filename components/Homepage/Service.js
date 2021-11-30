import React from 'react';

const Service = () => {
    return (
        <div>
            <section className="service-section">
                <div className="auto-container">
                <div className="sec-title text-center">
                    <p>More than Solutions</p>
                    <h2>Make an investment  in your professional <br />and personal goals</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4><a href="service-details.html">Self-pace learning</a></h4>
                        <div className="icon-box">
                            <span className="border-layer" />
                            <i className="flaticon-data" />
                        </div>
                        <p>Learn on your own timeline and comfort.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4><a href="service-details.html">Instant e-certificates</a></h4>
                        <div className="icon-box">
                            <span className="border-layer" />
                            <i className="flaticon-brain" />
                        </div>
                        <p>Get a certificate upon completion of courses.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4><a href="service-details.html">Expert mentors</a></h4>
                        <div className="icon-box">
                            <span className="border-layer" />
                            <i className="flaticon-vr" />
                        </div>
                        <p>Train with the top-notch industry professionals.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                    <div className="service-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4><a href="service-details.html">24/7 Student Support</a></h4>
                        <div className="icon-box">
                            <span className="border-layer" />
                            <i className="flaticon-cloud-computing" />
                        </div>
                        <p>Get assistance at any time from anywhere. </p>
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