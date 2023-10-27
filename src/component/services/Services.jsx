import React from 'react'
import './services.css'
import shape from '../images/services-shape.svg'

const Services = () => {
    return (
        <>
            <section id="features" className="services-area bg-d pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">Clean and simple design, <span> Comes with everything you need to get
                                    started!</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="services_container">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-1.svg" alt="shape" />
                                    <i className="lni-baloon"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Clean</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div> 

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-2.svg" alt="shape" />
                                    <i className="lni-cog"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Robust</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div> 

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-3.svg" alt="shape" />
                                    <i className="lni-bolt-alt"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Powerful</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-1.svg" alt="shape" />
                                    <i className="lni-baloon"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Clean</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div> 

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-2.svg" alt="shape" />
                                    <i className="lni-cog"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Robust</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape" />
                                    <img className="shape-1" src="../images/services-shape-3.svg" alt="shape" />
                                    <i className="lni-bolt-alt"></i>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Powerful</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                        eirmod
                                        tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
