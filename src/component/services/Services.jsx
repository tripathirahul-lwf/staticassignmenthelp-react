import React from 'react'
import './services.css'
import shape from '../images/services-shape.svg'
import phd from '../images/icons/phd.png'
import plagirism from '../images/icons/documents.png'
import assistent from '../images/icons/call-center.png'
import confi from '../images/icons/anniversary.png'
import gurantee from '../images/icons/guarantee.png'
import price from '../images/icons/tag.png'

const Services = () => {
    return (
        <>
            <section id="features" className="services-area bg-d pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">How we are Your Online <br /><span> Statistics Assignment Help Hero?

                                </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="services_container">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={phd} alt="shape"  loading="lazy"/>
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> Ph.D. Qualified Statisticians
                                     </h4>
                                    <p className="text">Having 1735 Ph.D. qualified experts to cater to specific assignment help for statistics is not
                                        what everyone can provide you! Our statistics assignment experts are trained to provide
                                        you with customized solutions without having to follow up on your submissions</p>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={plagirism} alt="shape"  loading="lazy"/>
                           
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> Plagiarism and AI free content </h4>
                                    <p className="text">With technological advancements at their peak to revolutionize the way people write
                                        content, your statistics assignment helper from our hub of excellence ensures to provide
                                        you with fresh assignments whenever you need them</p>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={assistent} alt="shape"  loading="lazy"/>
                                    
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> Last minute assistance </h4>
                                    <p className="text">With our experts working round the clock, our statistics assignment help Australia can
                                        assist you even if it's way past the standardized sleeping time around the globe. Providing
                                        you with the leverage to seek statistics assignment help Australia anytime, we help
                                        students sleep in peace!
                                    </p>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={confi} alt="shape"  loading="lazy"/>
                                     
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> 100% confidentiality
                                     </h4>
                                    <p className="text">Having a satisfied clientele of more than 87,450 students across the Australia, our robust
                                        security systems ensure that your information stays safe while you seek the required
                                        statistics assignment help online from our experts.</p>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={gurantee} alt="shape"  loading="lazy"/>
                           
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> Guaranteed A+ Grade  </h4>
                                    <p className="text">No other statistics assignment help can guarantee A+ grade but, with us all you need to do
                                        is fill up the form and we are here to help you achieve the grades you desire. Don't believe
                                        us? Have a look at our statistics assignment help sample today!
                                    </p>
                                </div>
                            </div>

                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s"
                                data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={shape} alt="shape"  loading="lazy"/>
                                    <img className="shape-1" src={price} alt="shape"  loading="lazy"/>
                                    
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"> Student friendly prices </h4>
                                    <p className="text">Superior quality statistical assignment help comes at a price but, with our student friendly
                                        prices, you will not only get quality but a golden opportunity to save a few bucks for the fun!
                                        Can’t believe your eyes? Have a look at our jaw dropping statistics assignments help rates.</p>
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
