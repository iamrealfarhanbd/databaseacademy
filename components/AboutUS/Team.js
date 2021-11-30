import React from 'react';

const Team = () => {
    return (
        <div>
                    
            <section className="team-section alternate-2">
                <div className="auto-container">
                <div className="sec-title text-center mb-60">
                    <p>team MEmbers</p>
                    <h2>What our clients say about our<br />awesome solutions</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="image-box">
                            <img src="assets/images/team/team-1.jpg" alt="" />
                            <ul className="contact-box clearfix">
                            <li className="email">
                                <a href="mailto:carlene@naxly.com">
                                <i className="flaticon-gmail" />
                                <span>elliot@naxly.com</span>
                                </a>
                            </li>
                            <li className="social-links">
                                <a href="about.html" className="share"><i className="flaticon-share-1" /></a>
                                <ul className="list clearfix">
                                <li><a href="about.html"><i className="fab fa-skype" /></a></li>
                                <li><a href="about.html"><i className="fab fa-twitter" /></a></li>
                                <li><a href="about.html"><i className="fab fa-facebook-f" /></a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="lower-content">
                            <h4><a href="about.html">Elliot Frankie</a></h4>
                            <span className="designation">Director</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="image-box">
                            <img src="assets/images/team/team-2.jpg" alt="" />
                            <ul className="contact-box clearfix">
                            <li className="email">
                                <a href="mailto:carlene@naxly.com">
                                <i className="flaticon-gmail" />
                                <span>carlene@naxly.com</span>
                                </a>
                            </li>
                            <li className="social-links">
                                <a href="about.html" className="share"><i className="flaticon-share-1" /></a>
                                <ul className="list clearfix">
                                <li><a href="about.html"><i className="fab fa-skype" /></a></li>
                                <li><a href="about.html"><i className="fab fa-twitter" /></a></li>
                                <li><a href="about.html"><i className="fab fa-facebook-f" /></a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="lower-content">
                            <h4><a href="about.html">Gertie Carlene</a></h4>
                            <span className="designation">Head of Data Science</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="image-box">
                            <img src="assets/images/team/team-3.jpg" alt="" />
                            <ul className="contact-box clearfix">
                            <li className="email">
                                <a href="mailto:carlene@naxly.com">
                                <i className="flaticon-gmail" />
                                <span>leone@naxly.com</span>
                                </a>
                            </li>
                            <li className="social-links">
                                <a href="about.html" className="share"><i className="flaticon-share-1" /></a>
                                <ul className="list clearfix">
                                <li><a href="about.html"><i className="fab fa-skype" /></a></li>
                                <li><a href="about.html"><i className="fab fa-twitter" /></a></li>
                                <li><a href="about.html"><i className="fab fa-facebook-f" /></a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="lower-content">
                            <h4><a href="about.html">Leone Felix</a></h4>
                            <span className="designation">Head of Marketing</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                    <div className="team-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="image-box">
                            <img src="assets/images/team/team-4.jpg" alt="" />
                            <ul className="contact-box clearfix">
                            <li className="email">
                                <a href="mailto:carlene@naxly.com">
                                <i className="flaticon-gmail" />
                                <span>brenda@naxly.com</span>
                                </a>
                            </li>
                            <li className="social-links">
                                <a href="about.html" className="share"><i className="flaticon-share-1" /></a>
                                <ul className="list clearfix">
                                <li><a href="about.html"><i className="fab fa-skype" /></a></li>
                                <li><a href="about.html"><i className="fab fa-twitter" /></a></li>
                                <li><a href="about.html"><i className="fab fa-facebook-f" /></a></li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="lower-content">
                            <h4><a href="about.html">Brenda Genevieve</a></h4>
                            <span className="designation">Head of R&amp;D</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="more-btn"><a href="/team" className="btn-style-four">Meet All Members<span>+</span></a></div>
                </div>
            </section>
        </div>
    );
};

export default Team;