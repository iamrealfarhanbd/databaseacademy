import React from 'react';
const Header = () => {
    return (
        <div>

            <div className="preloader">
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                <div className="spinner" />
                <div className="txt-loading">
                    <span data-text-preloader="N" className="letters-loading">
                    N
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                    A
                    </span>
                    <span data-text-preloader="X" className="letters-loading">
                    X
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                    L
                    </span>
                    <span data-text-preloader="Y" className="letters-loading">
                    Y
                    </span>
                </div>
                </div>  
            </div>
            </div>
        
            <div id="search-popup" className="search-popup">
            <div className="close-search"><span>Close</span></div>
            <div className="popup-inner">
                <div className="overlay-layer" />
                <div className="search-form">
                <form method="post" action="index.html">
                    <div className="form-group">
                    <fieldset>
                        <input type="search" className="form-control" name="search-input" defaultValue placeholder="Search Here" required />
                        <input type="submit" defaultValue="Search Now!" className="theme-btn style-four" />
                    </fieldset>
                    </div>
                </form>
                <h3>Recent Search Keywords</h3>
                <ul className="recent-searches">
                    <li><a href="index.html">Finance</a></li>
                    <li><a href="index.html">Idea</a></li>
                    <li><a href="index.html">Service</a></li>
                    <li><a href="index.html">Growth</a></li>
                    <li><a href="index.html">Plan</a></li>
                </ul>
                </div>
            </div>
            </div>
        
            <header className="main-header style-one home-1">
            <div className="auto-container">
                <div className="row clearfix">
                <div className="col-lg-3 col-md-12 col-sm-12 logo-column">
                    <div className="logo-box style-two">
                    <figure className="logo"><a href="/"><img src="assets/images/logo-6.png" alt="" /></a></figure>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 outer-column">
                    <div className="outer-box">
                    <div className="header-top clearfix">
                        <div className="top-right pull-right clearfix">
                        <div className="support"><i className="flaticon-music" /><span>Start your project today</span><a href="tel:0055567890">+00 555 67 890</a></div>
                        <ul className="social-links clearfix">
                            <li><a href="index.html"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="index.html"><i className="fab fa-twitter" /></a></li>
                            <li><a href="index.html"><i className="fab fa-google-plus-g" /></a></li>
                            <li><a href="index.html"><i className="fab fa-skype" /></a></li>
                        </ul>
                        <div className="search-box-outer">
                            <form action="index.html" method="post" className="search-btn">
                            <button type="button" className="search-toggler"><i className="flaticon-search" />Search</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="header-upper clearfix">
                        <div className="menu-area pull-right clearfix">
                    
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                            <i className="icon-bar" />
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className="current dropdown"><a href="/">Home</a></li>
                                <li className="dropdown"><a href="/courses">All Courses</a></li>
                                <li className="dropdown"><a href="#">Special Deal</a></li>
                                <li className="dropdown"><a href="#">Free Resourses</a></li> 
                                <li className="dropdown"><a href="/blog">Blog</a>
                                <ul>
                                    <li><a href="/singleBlog">Single Post<i className="flaticon-next" /></a></li>
                                </ul>
                                </li>

                            </ul>
                            </div>
                        </nav>
                        <div className="btn-box">
                            <a href="#" className="theme-btn style-one">Log in</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="sticky-header">
                <div className="auto-container clearfix">
                <figure className="logo-box"><a href="index.html"><img src="assets/images/small-logo.png" alt="" /></a></figure>
                <div className="menu-area">
                    <nav className="main-menu clearfix">
            
                    </nav>
                    <div className="btn-box">
                    <a href="index.html" className="theme-btn style-one">Get in Touch</a>
                    </div>
                </div>
                </div>
            </div>
            </header>


        </div>
    );
};

export default Header;