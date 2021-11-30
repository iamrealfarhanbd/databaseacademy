import React from 'react';

const Info = () => {
    return (
        <div>            
            <section className="info-section alternate-2">
                <div className="auto-container">
                <div className="inner-container">
                    <div className="top-inner mb-55">
                    <div className="sec-title text-center">
                        <p>Contact Information</p>
                        <h2>We’d love to hear from you anytime</h2>
                        <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="text text-center">
                        <p>Always holds in these matters to this principle of selection he rejects pleasures to secure other greater<br />pleasures, or else he endures pains to avoid</p>
                    </div>
                    </div>
                    <div className="info-inner">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div className="info-box">
                            <div className="hidden-icon"><i className="flaticon-pin" /></div>
                            <div className="box">
                            <div className="icon-box"><i className="flaticon-pin" /></div>
                            <h4>Location</h4>
                            <span>Visit to explore the world</span>
                            </div>
                            <div className="text">
                            <p>124, Queens walk 2nd cross<br />newyork 5241.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                        <div className="info-box">
                            <div className="hidden-icon"><i className="flaticon-music" /></div>
                            <div className="box">
                            <div className="icon-box"><i className="flaticon-music" /></div>
                            <h4>Make a Call</h4>
                            <span>Let’s talk with our experts</span>
                            </div>
                            <div className="text">
                            <p><a href="tel:4455567890">+44 555 67 890</a></p>
                            <p>Mon - Fri: 09.00 to 18.00</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                        <div className="info-box">
                            <div className="hidden-icon"><i className="flaticon-gmail" /></div>
                            <div className="box">
                            <div className="icon-box"><i className="flaticon-gmail" /></div>
                            <h4>Send a Mail</h4>
                            <span>Dont’s hesitate to mail</span>
                            </div>
                            <div className="text">
                            <p><a href="mailto:career@example.com">career@example.com</a></p>
                            <p><a href="mailto:info@example.com">info@example.com</a></p>
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

export default Info;