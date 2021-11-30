import React from 'react';

const Testimonial = () => {
    return (
        <div>       
            <section className="testimonial-style-three">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-22.png)'}} />
                <div className="auto-container">
                <div className="inner-content">
                    <div className="sec-title text-left">
                    <p>Testimonials</p>
                    <h2>What say our clients about our<br />awesome service</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="bxslider">
                    <div className="slider-content">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 thumb-column">
                            <div className="slider-pager">
                            <div className="elipse-box">
                                <div className="elipse elipse-1" />
                                <div className="elipse elipse-2" />
                            </div>
                            <ul className="thumb-box">
                                <li>
                                <a className="active" data-slide-index={0} href="#">
                                    <figure className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></figure>
                                </a>
                                </li>
                                <li>
                                <a data-slide-index={1} href="#">
                                    <figure className="thumb thumb-2"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </a>                                       
                                </li>
                                <li>
                                <a data-slide-index={2} href="#">
                                    <figure className="thumb thumb-3"><img src="assets/images/resource/thumb-2.png" alt="" /></figure>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                            <div className="testimonial-content">
                            <div className="content-box">
                                <div className="text">
                                <p>As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data.</p>
                                </div>
                                <div className="author-info">
                                <h4>Zedrew Kowzel</h4>
                                <span className="designation">CTO of Neuro Jump Solution</span>
                                </div>
                                <figure className="icon-box"><img src="assets/images/icons/icon-1.png" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 thumb-column">
                            <div className="slider-pager">
                            <div className="elipse-box">
                                <div className="elipse elipse-1" />
                                <div className="elipse elipse-2" />
                            </div>
                            <ul className="thumb-box">
                                <li>
                                <a className="active" data-slide-index={0} href="#">
                                    <figure className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></figure>
                                </a>
                                </li>
                                <li>
                                <a data-slide-index={1} href="#">
                                    <figure className="thumb thumb-2"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </a>                                       
                                </li>
                                <li>
                                <a data-slide-index={2} href="#">
                                    <figure className="thumb thumb-3"><img src="assets/images/resource/thumb-2.png" alt="" /></figure>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                            <div className="testimonial-content">
                            <div className="content-box">
                                <div className="text">
                                <p>As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data.</p>
                                </div>
                                <div className="author-info">
                                <h4>Tomas Adison</h4>
                                <span className="designation">MD of SAT Solution</span>
                                </div>
                                <figure className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="slider-content">
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 thumb-column">
                            <div className="slider-pager">
                            <div className="elipse-box">
                                <div className="elipse elipse-1" />
                                <div className="elipse elipse-2" />
                            </div>
                            <ul className="thumb-box">
                                <li>
                                <a className="active" data-slide-index={0} href="#">
                                    <figure className="thumb thumb-1"><img src="assets/images/resource/thumb-1.png" alt="" /></figure>
                                </a>
                                </li>
                                <li>
                                <a data-slide-index={1} href="#">
                                    <figure className="thumb thumb-2"><img src="assets/images/resource/testimonial-2.png" alt="" /></figure>
                                </a>                                       
                                </li>
                                <li>
                                <a data-slide-index={2} href="#">
                                    <figure className="thumb thumb-3"><img src="assets/images/resource/thumb-2.png" alt="" /></figure>
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                            <div className="testimonial-content">
                            <div className="content-box">
                                <div className="text">
                                <p>As a growing company, we found in Naxly’ expertise in data science invaluable. In almost two years of cooperation, they’ve helped us define our data.</p>
                                </div>
                                <div className="author-info">
                                <h4>Tomas Adison</h4>
                                <span className="designation">SEO Manager</span>
                                </div>
                                <figure className="icon-box"><img src="assets/images/icons/icon-3.png" alt="" /></figure>
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