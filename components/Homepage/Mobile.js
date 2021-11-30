import React from 'react';

const Mobile = () => {
    return (
        <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><i className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo"><a href="index.html"><img src="assets/images/logo.png" alt="" title /></a></div>
          <div className="menu-outer" />
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><a href="tel:+8801682648101">+88 01682648101</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="index.html"><span className="fab fa-twitter" /></a></li>
              <li><a href="index.html"><span className="fab fa-facebook-square" /></a></li>
              <li><a href="index.html"><span className="fab fa-pinterest-p" /></a></li>
              <li><a href="index.html"><span className="fab fa-instagram" /></a></li>
              <li><a href="index.html"><span className="fab fa-youtube" /></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
};

export default Mobile;