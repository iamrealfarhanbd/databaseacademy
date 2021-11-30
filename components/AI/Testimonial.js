import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-style-two">
                <div className="title-inner bg-color-3">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-15.png)'}} />
                <div className="auto-container">
                    <div className="sec-title text-left light">
                    <p>Testimonials</p>
                    <h2>Words from our clients</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-4.png)'}} />
                    </div>
                </div>
                </div>
                <div className="lower-content">
                <div className="auto-container">
                    <div className="inner-content">
                    <div className="testimonial-carousel-2 owl-carousel owl-theme owl-dots-none nav-style-one">
                        <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
                            <div className="content-box">
                            <div className="icon-box" style={{backgroundImage: 'url(assets/images/icons/icon-4.png)'}} />
                            <div className="text">
                                <p>As a growing company, we found in Naxly expertise in data science invaluble In almost two years of cooperation, they’ve helped us.</p>
                            </div>
                            <div className="author-info">
                                <h4>Dedrew Kowzel</h4>
                                <span className="designation">CEO &amp; Founder - Soft Solution</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                            <div className="content-box">
                            <div className="icon-box" style={{backgroundImage: 'url(assets/images/icons/icon-4.png)'}} />
                            <div className="text">
                                <p>As a growing company, we found in Naxly expertise in data science invaluble In almost two years of cooperation, they’ve helped us.</p>
                            </div>
                            <div className="author-info">
                                <h4>Donal Archar</h4>
                                <span className="designation">CEO &amp; Founder - Soft Solution</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-content">
                        <div className="inner-box">
                            <figure className="image-box"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                            <div className="content-box">
                            <div className="icon-box" style={{backgroundImage: 'url(assets/images/icons/icon-4.png)'}} />
                            <div className="text">
                                <p>As a growing company, we found in Naxly expertise in data science invaluble In almost two years of cooperation, they’ve helped us.</p>
                            </div>
                            <div className="author-info">
                                <h4>Jams Shan</h4>
                                <span className="designation">CEO &amp; Founder - Soft Solution</span>
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

export default Testimonial;