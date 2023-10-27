import React from 'react'
import Slider from "react-slick";
import './review.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialShape from '../images/textimonial-shape.svg'
import author1 from '../images/author-1.png'
import author2 from '../images/author-2.png'
import author3 from '../images/author-3.png'

const Review = () => {
    var settings = {
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div>
            <section id="testimonial" class="testimonial-area pt-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="section-title text-center pb-40">
                                <div class="line m-auto"></div>
                                <h3 class="title">Users sharing<span> their experience</span></h3>
                            </div>
                        </div>
                    </div>
                    <div class="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                        <Slider {...settings}>
                            <div class="col-lg-4">
                                <div class="single-testimonial">
                                    <div class="testimonial-review d-flex align-items-center justify-content-between">
                                        <div class="quota">
                                           <box-icon name='quote-alt-left' type='solid' ></box-icon>
                                        </div>
                                        <div class="star">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="testimonial-text">
                                        <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                            eirmod
                                            tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                                            seddiam
                                            nonu.</p>
                                    </div>
                                    <div class="testimonial-author d-flex align-items-center">
                                        <div class="author-image">
                                            <img class="shape" src= {testimonialShape} alt="shape" />
                                            <img class="author" src={author1} alt="author" />
                                        </div>
                                        <div class="author-content media-body">
                                            <h6 class="holder-name">Jenny Deo</h6>
                                            <p class="text">CEO, SpaceX</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-testimonial">
                                    <div class="testimonial-review d-flex align-items-center justify-content-between">
                                        <div class="quota">
                                           <box-icon name='quote-alt-left' type='solid' ></box-icon>
                                        </div>
                                        <div class="star">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="testimonial-text">
                                        <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                            eirmod
                                            tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                                            seddiam
                                            nonu.</p>
                                    </div>
                                    <div class="testimonial-author d-flex align-items-center">
                                        <div class="author-image">
                                            <img class="shape" src= {testimonialShape} alt="shape" />
                                            <img class="author" src={author2} alt="author" />
                                        </div>
                                        <div class="author-content media-body">
                                            <h6 class="holder-name">Marjin Otte</h6>
                                            <p class="text">UX Specialist, Yoast</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-testimonial">
                                    <div class="testimonial-review d-flex align-items-center justify-content-between">
                                        <div class="quota">
                                           <box-icon name='quote-alt-left' type='solid' ></box-icon>
                                        </div>
                                        <div class="star">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="testimonial-text">
                                        <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                            eirmod
                                            tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                                            seddiam
                                            nonu.</p>
                                    </div>
                                    <div class="testimonial-author d-flex align-items-center">
                                        <div class="author-image">
                                            <img class="shape" src= {testimonialShape} alt="shape" />
                                            <img class="author" src={author3} alt="author" />
                                        </div>
                                        <div class="author-content media-body">
                                            <h6 class="holder-name">David Smith</h6>
                                            <p class="text">CTO, Alphabet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-testimonial">
                                    <div class="testimonial-review d-flex align-items-center justify-content-between">
                                        <div class="quota">
                                           <box-icon name='quote-alt-left' type='solid' ></box-icon>
                                        </div>
                                        <div class="star">
                                            <ul>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                                <li><i class="fa-solid fa-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="testimonial-text">
                                        <p class="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu
                                            eirmod
                                            tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr,
                                            seddiam
                                            nonu.</p>
                                    </div>
                                    <div class="testimonial-author d-flex align-items-center">
                                        <div class="author-image">
                                            <img class="shape" src= {testimonialShape} alt="shape" />
                                            <img class="author" src={author2} alt="author" />
                                        </div>
                                        <div class="author-content media-body">
                                            <h6 class="holder-name">Fajar Siddiq</h6>
                                            <p class="text">COO, MakerFlix</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review
