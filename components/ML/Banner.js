import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="banner-style-three">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-18.png)'}} />
                <div className="auto-container">
                <div className="row clearfix align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                        <h1>Machines<br />Can Understand Languages.</h1>
                        <p>Naxly bring the power of data science and artificial intelligence to every business.</p>
                        <div className="btn-box">
                        <a href="index-3.html" className="theme-btn style-seven"><i className="flaticon-next" />More Details</a>
                        <a href="index-3.html" className="theme-btn style-six">Get Started</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;