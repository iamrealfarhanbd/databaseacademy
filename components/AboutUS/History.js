import React from 'react';

const History = () => {
    return (
        <div>    
            <section className="history-section">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-47.png)'}} />
                <div className="arrow-box" style={{backgroundImage: 'url(assets/images/icons/arrow-3.png)'}} />
                <figure className="image-layer js-tilt"><img src="assets/images/resource/illastration-8.png" alt="" /></figure>
                <div className="auto-container">
                <div className="sec-title text-left">
                    <p>Our History</p>
                    <h2>History begins in 2010 with the foundation</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="inner-box clearfix">
                    <div className="single-item">
                    <div className="inner wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="content-box">
                        <h4><a href="about.html">Founded</a></h4>
                        <p>Take trivial example which idea of ever undertakes.</p>
                        </div>
                        <div className="year"><span>2010</span></div>
                    </div>
                    </div>
                    <div className="single-item">
                    <div className="inner wow slideInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="year"><span>2012</span></div>
                        <div className="content-box">
                        <h4><a href="about.html">Fresh Ideas</a></h4>
                        <p>Best every pleasure is welcomed every pain avoided.</p>
                        </div>
                    </div>
                    </div>
                    <div className="single-item">
                    <div className="inner wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="content-box">
                        <h4><a href="about.html">Service Award</a></h4>
                        <p>Have to repudiated annoyances accepted the wise.</p>
                        </div>
                        <div className="year"><span>2016</span></div>
                    </div>
                    </div>
                    <div className="single-item">
                    <div className="inner wow slideInDown" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="year"><span>2019</span></div>
                        <div className="content-box">
                        <h4><a href="about.html">Milestone</a></h4>
                        <p>Take trivial example which idea of ever undertakes.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </div>
    );
};

export default History;