import React from 'react';

const Chooseus = () => {
    return (
        <div> 
            <section className="chooseus-style-two bg-color-3">
                <div className="bg-layer" style={{backgroundImage: 'url(assets/images/background/choose-bg.png)'}} />
                <div className="auto-container">
                <div className="title-inner mb-35 clearfix">
                    <div className="sec-title light text-left pull-left">
                    <p>Why Choose Us</p>
                    <h2>Reason for people choosing our company</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-5.png)'}} />
                    </div>
                    <div className="text pull-right">
                    <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed every pain avoided but in certain circumstances.</p>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4>Global Experience</h4>
                        <div className="box">
                            <div className="icon-box"><i className="flaticon-global" /></div>
                            <p>Nor again is there anyone who loves or pursues or desires</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4>Value for Results</h4>
                        <div className="box">
                            <div className="icon-box"><i className="flaticon-analysis" /></div>
                            <p>Except to obtain some advantage from who has any right to find.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                    <div className="single-item wow slideInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <h4>High-Quality Results</h4>
                        <div className="box">
                            <div className="icon-box"><i className="flaticon-medal" /></div>
                            <p>This mistakens idea of denouncing and was born complete system.</p>
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

export default Chooseus;