import React from 'react';

const Fun = () => {
    return (
        <div>
            <section className="fun-fact">
                <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                    <div className="counter-block-one wow slideInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-analytics" /></div>
                        <div className="count-outer count-box">
                            <span className="count-text" data-speed={1500} data-stop={3500}>0</span>+
                        </div>
                        <h4>Projects Completed</h4>
                        <p>To take trivial example, which idea of ever undertakes.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                    <div className="counter-block-one wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-brain-1" /></div>
                        <div className="count-outer count-box">
                            <span className="count-text" data-speed={1500} data-stop={1867}>0</span>
                        </div>
                        <h4>Industries Covered</h4>
                        <p>Best every pleasure is to welcomed every pain avoided.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 counter-block">
                    <div className="counter-block-one wow slideInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <div className="icon-box"><i className="flaticon-freelance" /></div>
                        <div className="count-outer count-box">
                            <span className="count-text" data-speed={1500} data-stop={239}>0</span>
                        </div>
                        <h4>Expert Scientists</h4>
                        <p>Have to be repudiated annoyances accepted the wise.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        </div>
    );
};

export default Fun;