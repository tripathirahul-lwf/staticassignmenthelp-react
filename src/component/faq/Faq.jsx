import React from 'react'
import './faq.css'
import faqImg from "../images/faq.jpg"

const Faq = () => {


    return (
        <>
            <section class="faqs-area pt-120" id="FAQs">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-40">
                                <div class="line m-auto"></div>
                                <h2 class="title">Clear Your Doubts with Our <br /><span>Statistics Assignment Helper Guide</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div className="col-lg-6">
                            <div className="faq-img">
                                <img src={faqImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Can I pay someone to do my stats homework?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Yes, you certainly can! There are many statistics assignment help online websites that possess the
                                            capability to provide you with fresh assignments. If you are looking for someone with affordability
                                            and quality then, STATISTICS ASSIGNMENT HELP AU is the best to consider!
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How to do a stats project?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            To draft an impeccable stats project all you need to do is:
                                            <ul className="faq-list">
                                                <li>In depth research</li>
                                                <li>Checking the brief along with the subject</li>
                                                <li>Outlining the content</li>
                                                <li>Fill in with researched information</li>
                                                <li>Add references and citations</li>
                                                <li>Include an informative conclusion</li>
                                                <li>Proofread and edit to make changes</li>
                                            </ul>
                                            If you think this is a tedious task then, STATISTICS ASSIGNMENT HELP AU is here to cater to all your
                                            needs.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is the cost of hiring a statistics assignment help Australia?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            The cost of hiring an average statistics assignment helper is somewhere around $15-$25 for a single
                                            page/ If you are looking for cheap statistics assignment help then, STATISTICS ASSIGNMENT HELP
                                            AU is the right choice with pricing starting at $10 per page.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What is the website for statistics help?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            STATISTICS ASSIGNMENT HELP AU is the best website to seek quality help with statistics assignment
                                            online. This particular website hires only Ph.D. level statistics assignment writers to draft
                                            assignments for students.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Is statistics assignment help reliable?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Yes! STATISTICS ASSIGNMENT HELP AU is 100% reliable as they employ Ph.D. writers who are
                                            experts at drafting well structured, superior quality content according to the needs of the client.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Is there an App to help with statistics?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Absolutely! STATISTICS ASSIGNMENT HELP AU is one of the best statistics assignment help websites
                                            available for all those having a tough time accomplishing an A1 grade in their assignments.
                                            <br />
                                            <br />
                                            STATISTICS ASSIGNMENT HELP AU has cultivated a legacy of academic excellence with Ph.D. experts
                                            online. We are the proud owners of a legacy and aim to provide the best statistics assignment help
                                            to students anytime and anywhere they need!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Faq
