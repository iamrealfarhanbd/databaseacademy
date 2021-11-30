import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact-section alternate-3">
                <div className="pattern-layer" style={{backgroundImage: 'url(assets/images/shape/shape-48.png)'}} />
                <div className="auto-container">
                <div className="top-inner text-center mb-50">
                    <div className="sec-title text-center">
                    <p>Contact Us</p>
                    <h2>We’d love to hear from you anytime</h2>
                    <div className="decor" style={{backgroundImage: 'url(assets/images/icons/decor-1.png)'}} />
                    </div>
                    <div className="text">
                    <p>Always holds in these matters to this principle of selection he rejects pleasures to secure other greater<br />pleasures, or else he endures pains to avoid</p>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_09">
                        <div className="content-box">
                        <form method="post" action="assets/inc/sendemail.php" id="contact-form" className="default-form"> 
                            <div className="form-group">
                            <label><i className="far fa-user" />Your Name</label>
                            <input type="text" name="username" placeholder="Enter name here" required />
                            </div>
                            <div className="form-group">
                            <label><i className="far fa-envelope" />Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                            <label><i className="far fa-user" />Subject</label>
                            <input type="text" name="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                            <label><i className="fas fa-text-height" />Message</label>
                            <textarea name="message" placeholder="Message goes here" defaultValue={""} />
                            </div>
                            <div className="form-group">
                            <button className="theme-btn style-one" type="submit" name="submit-form">Send Your Message</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div className="image-box wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <figure className="image js-tilt"><img src="assets/images/resource/illastration-6.png" alt="" /></figure>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;