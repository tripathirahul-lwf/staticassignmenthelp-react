import React from 'react'
import Slider from "react-slick";
import './review.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
            <section id="testimonial" class="bg-d testimonial-area pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-40">
                                <div class="line m-auto"></div>
                                <h2 class="title">What Our Clientele Thinks of Our <br /> <span> Help With Statistics Assignment Australia?</span></h2>
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
                                        <p class="text">Looking for cheap statistics assignment help that provides quality is difficult with so many websites available online. After days of research, I finally came across this excellent statistics assignment help website. They are not just affordable but provide easy to understand help with statistics assignment!</p>
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
                                        <p class="text">I took help with descriptive statistics assignment help as I lacked the time to do it myself. They were easy to order, really quick with assistance and did not need any follow-ups at all! Everything was properly organised and I loved that the most.</p>
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
                                        <p class="text">Having to pay someone to do my statistics assignment was a tough choice until I found them. With a quick turnaround time, I was content with what I received and required the least revisions possible.</p>
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
                                        <p class="text">I am so happy with their statistical analysis assignment help, just got the results back today and I passed with an A+ grade. They did a fine job with my assignment and my professor was highly impressed! Gave a presentation to the entire class and I am glad I chose them!!!</p>
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
                                        <p class="text">It was midnight and I was terrified to remember that I had a submission to make in the next two days. Looking for quick options online, I found this website to help in my statistics assignment. Made the submissions today, I hope they save me from falling grades.</p>
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
