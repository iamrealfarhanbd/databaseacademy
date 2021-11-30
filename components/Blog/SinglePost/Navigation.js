import React from 'react';

const Navigation = () => {
    return (
        <div>
            <div className="nav-btn-box style-two">
                <div className="auto-container">
                <div className="btn-inner clearfix">
                    <div className="btn-left pull-left">
                    <div className="prev-btn">
                        <h4><a href="portfolio-details.html"><i className="fas fa-angle-double-left" />&nbsp;Prev Post</a></h4>
                    </div>
                    <div className="box">
                        <div className="post-date"><p>16</p><span>Dec</span></div>
                        <div className="file-box"><i className="far fa-folder-open" />&nbsp;&nbsp;<p>Data Strategy</p></div>
                        <h4>Naxly as the Winners in Global Agency Awards</h4>
                    </div>
                    </div>
                    <div className="btn-right pull-right text-right">
                    <div className="prev-btn">
                        <h4><a href="portfolio-details.html">Next Post&nbsp;<i className="fas fa-angle-double-right" /></a></h4>
                    </div>
                    <div className="box">
                        <div className="post-date"><p>05</p><span>Jan</span></div>
                        <div className="file-box"><p>Data Engineering</p>&nbsp;&nbsp;<i className="far fa-folder-open" /></div>
                        <h4>Naxly Named as a Global Leader in Big Data</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;