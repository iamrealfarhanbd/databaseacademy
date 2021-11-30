import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section className="testimonial-section">
                <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-5.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-6.png)'}} />
                </div>
                <div className="auto-container">
                <div className="upper-box clearfix">
                    <div className="sec-title text-left pull-left">
                    <p>Testimonials</p>
                    <h2>Our learner’s outlook</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="btn-box pull-right">
                    <a href="index.html" className="theme-btn style-three">Send Your Review<span>+</span></a>
                    </div>
                </div>
                <div className="testimonial-carousel owl-carousel owl-theme owl-dots-none">
                    <div className="testimonial-content">
                    <figure className="image-box"><img src="assets/images/resource/testimonial-9.png" alt="" /></figure>
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-null" /></div>
                        <div className="inner">
                        <ul className="rating clearfix">
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                        </ul>
                        <div className="text">
                            <p>Database academy provided me invaluable knowledge. I have enjoyed my learning journey with them tremendously.</p>
                        </div>
                        <div className="author-info">
                            <h4>Zedrew Kowzel</h4>
                            <span className="designation">CTO of Smart Tech Solution</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="testimonial-content">
                    <figure className="image-box"><img src="assets/images/resource/testimonial-10.png" alt="" /></figure>
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-null" /></div>
                        <div className="inner">
                        <ul className="rating clearfix">
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                        </ul>
                        <div className="text">
                            <p>They have really amazing courses and their content was very thorough. I highly recommend it.</p>
                        </div>
                        <div className="author-info">
                            <h4>Androi Roi</h4>
                            <span className="designation">CTO of Smart Tech Solution</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="testimonial-content">
                    <figure className="image-box"><img src="assets/images/resource/testimonial-11.png" alt="" /></figure>
                    <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-null" /></div>
                        <div className="inner">
                        <ul className="rating clearfix">
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                            <li><i className="flaticon-stars" /></li>
                        </ul>
                        <div className="text">
                            <p>As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data.</p>
                        </div>
                        <div className="author-info">
                            <h4>Watson Jsye</h4>
                            <span className="designation">CTO of Smart Tech Solution</span>
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