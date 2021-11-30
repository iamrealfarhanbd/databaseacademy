import React from 'react';

const Case = () => {
    return (
        <div>    
            <section className="case-section">
                <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title text-center">
                    <p>Case Studies</p>
                    <h2>Arm yourself with<br />professional advice</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 case-block">
                        <div className="case-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="assets/images/gallery/case-1.png" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/case-1.png" alt="" /></a></figure>
                            <div className="lower-content">
                            <p>Banking &amp; Finance</p>
                            <h4><a href="project-details.html">Consulting on invoice data capture</a></h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 case-block">
                        <div className="case-block-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="assets/images/gallery/case-2.png" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/case-2.png" alt="" /></a></figure>
                            <div className="lower-content">
                            <p>Entertainment</p>
                            <h4><a href="project-details.html">Automate feedback analysis</a></h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 case-block">
                        <div className="case-block-one wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="assets/images/gallery/case-3.png" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/case-3.png" alt="" /></a></figure>
                            <div className="lower-content">
                            <p>Banking &amp; Finance</p>
                            <h4><a href="project-details.html">Big data processing implementation</a></h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 case-block">
                        <div className="case-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <figure className="image-box"><a href="assets/images/gallery/case-4.png" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/gallery/case-4.png" alt="" /></a></figure>
                            <div className="lower-content">
                            <p>Healthcare</p>
                            <h4><a href="project-details.html">BI implementation for baby care App</a></h4>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="more-btn"><a href="project-details.html" className="btn-style-four">All Case Studies<span>+</span></a></div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Case;