import React from 'react';

const Title = () => {
    return (
        <div>
            <section className="page-title text-center style-two">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-62.png)'}} />
                <div className="auto-container">
                <div className="content-box">
                    <h1>Blog Classic Grid</h1>
                    <ul className="bread-crumb clearfix">
                    <li><a href="index.html">Home</a></li>
                    <li><span>\\</span></li>
                    <li>Blog</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Title;