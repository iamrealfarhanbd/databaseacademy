import React from 'react';

const News = () => {
    return (
        <div>
            <section className="news-section style-two style-three">
                <div className="auto-container">
                <div className="upper-box clearfix mb-40">
                    <div className="sec-title text-left pull-left">
                    <p>News &amp; Updates</p>
                    <h2>Company news &amp; updates</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="btn-box pull-right mt-60">
                    <a href="blog-1.html" className="btn-style-eight">Read More</a>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/news/news-1.jpg" alt="" />
                            <a href="assets/images/news/news-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom" /></a>
                        </figure>
                        <div className="lower-content">
                            <div className="file-box"><i className="far fa-folder-open" /><p>Data Engineering</p></div>
                            <div className="title-box">
                            <div className="post-date"><p>05</p><span>Jan</span></div>
                            <h4><a href="blog-details.html">Naxly Named as a Global Leader in Big Data</a></h4>
                            </div>
                            <div className="text">
                            <p>Equal blame belongs too those who fail in their through weakness will shrinking.</p>
                            </div>
                            <div className="link"><a href="blog-details.html"><i className="flaticon-next" />Read More</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/news/news-2.jpg" alt="" />
                            <a href="assets/images/news/news-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom" /></a>
                        </figure>
                        <div className="lower-content">
                            <div className="file-box"><i className="far fa-folder-open" /><p>ML Consulting</p></div>
                            <div className="title-box">
                            <div className="post-date"><p>01</p><span>Jan</span></div>
                            <h4><a href="blog-details.html">The Current State of Artificial Intelligence Infographic.</a></h4>
                            </div>
                            <div className="text">
                            <p>When our power choice untrammelled and then prevents our being able pleasure.</p>
                            </div>
                            <div className="link"><a href="blog-details.html"><i className="flaticon-next" />Read More</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                    <div className="news-block-one wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/news/news-3.jpg" alt="" />
                            <a href="assets/images/news/news-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="flaticon-zoom" /></a>
                        </figure>
                        <div className="lower-content">
                            <div className="file-box"><i className="far fa-folder-open" /><p>Data Strategy</p></div>
                            <div className="title-box">
                            <div className="post-date"><p>25</p><span>Dec</span></div>
                            <h4><a href="blog-details.html">Naxly as the Winners in Global Agency Awards</a></h4>
                            </div>
                            <div className="text">
                            <p>Obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                            </div>
                            <div className="link"><a href="blog-details.html"><i className="flaticon-next" />Read More</a></div>
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

export default News;