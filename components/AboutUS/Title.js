import React from 'react';

const Title = () => {
    return (
        <div>
            <section className="page-title style-two text-center">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-62.png)'}} />
                <div className="auto-container">
                <div className="content-box">
                    <h1>About Company</h1>
                    <ul className="bread-crumb clearfix">
                    <li><a href="index.html">Home</a></li>
                    <li><span>\\</span></li>
                    <li>About Us</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Title;