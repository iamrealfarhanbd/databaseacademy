import React from 'react';

const Client = () => {
    return (
        <div>
            <section className="clients-style-two bg-color-1">
                <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(assets/images/shape/shape-16.png)'}} />
                <div className="pattern-2 wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms" style={{backgroundImage: 'url(assets/images/shape/shape-17.png)'}} />
                </div>
                <div className="auto-container">
                <div className="sec-title text-center style-two mb-70">
                    <p>Clients</p>
                    <h2>Latest thinking in AI and our</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                </div>
                <div className="logo-inner">
                    <ul className="logo-box logo-box-one clearfix">
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-6.png" alt="" /></a></figure></li>
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-7.png" alt="" /></a></figure></li>
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-8.png" alt="" /></a></figure></li>
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-9.png" alt="" /></a></figure></li>
                    </ul>
                    <ul className="logo-box logo-box-two clearfix">
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-10.png" alt="" /></a></figure></li>
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-11.png" alt="" /></a></figure></li>
                    <li><figure className="image-box"><a href="index.html"><img src="assets/images/clients/clients-logo-12.png" alt="" /></a></figure></li>
                    </ul>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Client;