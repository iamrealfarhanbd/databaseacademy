import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <section className="banner-section">
                <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-56.png)'}} />
                <div className="pattern-2" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}} />
                </div>
                <div className="icon-layer">
                <div className="icon icon-1 rotate-me" style={{backgroundImage: 'url(assets/images/icons/wheel-2.png)'}} />
                <div className="icon icon-2 rotate-me" style={{backgroundImage: 'url(assets/images/icons/wheel-3.png)'}} />
                <div className="icon icon-3 rotate-me" style={{backgroundImage: 'url(assets/images/icons/wheel-4.png)'}} />
                <div className="icon icon-4 rotate-me" style={{backgroundImage: 'url(assets/images/icons/wheel-5.png)'}} />
                </div>
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <h1> Enhance your data-sense</h1>
                        <p>Solve any kind of hurdles in using data by applying<br />latest strategies and tools.</p>
                        <div className="btn-box">
                        <a href="index.html" className="theme-btn style-two">Learn More<span>+</span></a>
                        <a href="index.html" className="theme-btn style-one">Start Learning<span>+</span></a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="slider-image-1 clearfix">
                        <figure className="image image-1"><img src="assets/images/banner/Frame.png" alt="" /></figure>

                        {/* animated single images can be added on below section */}
                        {/*
                        <figure className="image image-1"><img src="assets/images/banner/banner-1-1.png" alt="" /></figure>
                        <figure className="image image-2 float-bob-y"><img src="assets/images/banner/banner-1-2.png" alt="" /></figure>
                        <figure className="image image-3"><img src="assets/images/icons/pie-chart-1.png" alt="" /></figure>
                        <figure className="image image-4"><img src="assets/images/banner/banner-1-3.png" alt="" /></figure>
                        <figure className="image image-5 float-bob-y"><img src="assets/images/banner/banner-1-4.png" alt="" /></figure>
                        <figure className="image image-6 float-bob-y"><img src="assets/images/banner/banner-1-5.png" alt="" /></figure>
                        <figure className="image image-7"><img src="assets/images/banner/banner-1-6.png" alt="" /></figure>
                        <figure className="image image-8 wow bounceInDown" data-wow-delay="00ms" data-wow-duration="1500ms"><img src="assets/images/icons/dollar-1.png" alt="" /></figure>
                        <figure className="image image-9 wow bounceInDown" data-wow-delay="200ms" data-wow-duration="1500ms"><img src="assets/images/icons/dollar-2.png" alt="" /></figure>
                        <figure className="image image-10 wow bounceInDown" data-wow-delay="400ms" data-wow-duration="1500ms"><img src="assets/images/icons/dollar-3.png" alt="" /></figure>
                        <figure className="image image-11 wow bounceInDown" data-wow-delay="600ms" data-wow-duration="1500ms"><img src="assets/images/icons/dollar-4.png" alt="" /></figure>
                        <figure className="image image-12 wow bounceInDown" data-wow-delay="800ms" data-wow-duration="1500ms"><img src="assets/images/icons/dollar-5.png" alt="" /></figure>
                        <figure className="image image-13"><img src="assets/images/icons/arrow-4.png" alt="" /></figure> */}
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;