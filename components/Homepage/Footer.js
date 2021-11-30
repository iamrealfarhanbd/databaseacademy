import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
            <div className="footer-top">
            <div className="auto-container">
                <div className="widget-section">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget contact-widget">
                        <div className="widget-title">
                        <h3>Contact Us</h3>
                        <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-3.png)'}} />
                        </div>
                        <div className="widget-content">
                        <div className="box">
                            <h5>Office Location</h5>
                            <p>124, Queens walk 2nd cross newyork 5241</p>
                        </div>
                        <div className="box">
                            <h5>Quick Contact</h5>
                            <ul className="clearfix">
                            <li><i className="flaticon-music" /><a href="tel:0055567890">+00 555 67 890</a></li>
                            <li><i className="flaticon-gmail" /><a href="mailto:supportteam@info.com">supportteam@info.com</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                    <div className="footer-widget links-widget">
                        <div className="widget-title">
                        <h3>Useful Links</h3>
                        <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-3.png)'}} />
                        </div>
                        <div className="widget-content">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <ul className="links clearfix">
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/termsConditions">Terms of use</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Our Partners</a></li>
                                <li><a href="#">Redeem Vouchers</a></li>
                            </ul>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                            <ul className="links clearfix">
                                <li><a href="/">Home</a></li>
                                <li><a href="/aboutUs">About Us</a></li>
                                <li><a href="#">Success Story</a></li>
                                <li><a href="/courses">All Courses</a></li>
                                <li><a href="/blog">Blog</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                    <div className="footer-widget about-widget">
                        <div className="widget-title">
                        <h3>About Company</h3>
                        <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-3.png)'}} />
                        </div>
                        <div className="widget-content">
                        <div className="box">
                            <figure className="logo"><a href="index.html"><img src="assets/images/footer-logo.png" alt="" /></a></figure>
                            <div className="text">
                            <p>Database academy focuses on the growth of the learners. We aim to provide the best e-training with top-notch mentors to help you master the core database related skills.</p>
                            </div>
                        </div>
                        <div className="subscribe-box">
                            <form action="index.html" method="post">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email Address..." required />
                                <button type="submit" className="theme-btn style-one">Subscribe Us</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="footer-bottom style-one">
            <div className="auto-container clearfix">
                <div className="copyright pull-left">
                <p>Copyright © <a href="index.html">Naxly</a>, All Rights Reserved.</p>
                </div>
                <ul className="footer-nav pull-right">
                <li><a href="index.html">Privacy Policy</a></li>
                <li><a href="index.html">Terms &amp; Conditions</a></li>
                </ul>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;