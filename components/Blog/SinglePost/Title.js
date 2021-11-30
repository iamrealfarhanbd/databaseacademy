import React from 'react';

const Title = () => {
    return (
        <div>
            <section className="page-title text-center style-two">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-62.png)'}} />
                <div className="auto-container">
                <div className="content-box">
                    <div className="file-box"><i className="far fa-folder-open" /><p>ML Consulting</p></div>
                    <h2>The Current State of Artificial Intelligence</h2>
                    <ul className="info-box clearfix">
                    <li><i className="far fa-user" /><span>Author:</span> Mark Richardson</li>
                    <li><i className="far fa-calendar-alt" /><span>Posted On:</span> 24 Dec, 2019</li>
                    <li><i className="far fa-comment-alt" /><span>Post Comments:</span> 06</li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Title;