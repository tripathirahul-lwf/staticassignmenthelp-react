import React from 'react'
import './footer.css'
import logo from '../images/logo.svg'




const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer-area pt-120">
                <div className="container">
                   
                    <div className="footer-widget pb-100 pt-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <a className="logo" href="/">
                                        <img src={logo} alt="logo" />
                                    </a>
                                    <p className="text">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
                                        nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                                    <ul className="social">
                                        <li><a href="/"><i className="lni-facebook-filled"></i></a></li>
                                        <li><a href="/"><i className="lni-twitter-filled"></i></a></li>
                                        <li><a href="/"><i className="lni-instagram-filled"></i></a></li>
                                        <li><a href="/"><i className="lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-7">
                                <div className="footer-link d-flex mt-50 justify-content-md-between">
                                    <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                        <div className="footer-title">
                                            <h4 className="title">Quick Link</h4>
                                        </div>
                                        <ul className="link">
                                            <li><a href="/">Road Map</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Refund Policy</a></li>
                                            <li><a href="/">Terms of Service</a></li>
                                            <li><a href="/">Pricing</a></li>
                                        </ul>
                                    </div>
                                    <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                        <div className="footer-title">
                                            <h4 className="title">Resources</h4>
                                        </div>
                                        <ul className="link">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">Page</a></li>
                                            <li><a href="/">Portfolio</a></li>
                                            <li><a href="/">Blog</a></li>
                                            <li><a href="/">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <div className="footer-title">
                                        <h4 className="title">Contact Us</h4>
                                    </div>
                                    <ul className="contact">
                                        <li>+809272561823</li>
                                        <li>info@gmail.com</li>
                                        <li>www.yourweb.com</li>
                                        <li>123 Stree New York City , United  States Of America 750.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright d-sm-flex justify-content-between">
                                    <div className="copyright-content">
                                        <p className="text">statisticassignmenthelp.com.au </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </footer >
        </>
    )
}

export default Footer
