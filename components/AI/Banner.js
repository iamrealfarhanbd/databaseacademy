import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="banner-style-two">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-10.png)'}} />
                <div className="large-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <h1>Best Artificial Intelligence Lab</h1>
                        <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        <a href="index-2.html" className="theme-btn style-five"><i className="flaticon-next" />More Details</a>
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 image-column">
                    <div className="image-box">
                        <figure className="image image-1"><img src="assets/images/banner/banner-2-1.png" alt="" /></figure>
                        <figure className="image image-2 rotate-me"><img src="assets/images/icons/gear-4.png" alt="" /></figure>
                        <figure className="image image-3 rotate-me"><img src="assets/images/icons/gear-5.png" alt="" /></figure>
                        <figure className="image image-4 rotate-me"><img src="assets/images/icons/gear-5.png" alt="" /></figure>
                        <figure className="image image-5 rotate-me"><img src="assets/images/icons/gear-6.png" alt="" /></figure>
                        <div className="anim-icon">
                        <span className="icon icon-1" />
                        <span className="icon icon-2" />
                        <span className="icon icon-3" />
                        <span className="icon icon-4" />
                        <span className="icon icon-5" />
                        <span className="icon icon-6" />
                        <span className="icon icon-7" />
                        <span className="icon icon-8" />
                        <span className="icon icon-9" />
                        <span className="icon icon-10" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <div className="subscribe-us">
                <div className="large-container">
                <div className="subscribe-inner">
                    <form action="index-2.html" method="post">
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Enter Email Address..." required />
                        <button type="submit"><i className="flaticon-next" />Subscribe Us</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;