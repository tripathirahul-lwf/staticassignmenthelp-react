import React, { useState } from 'react'
import './faq.css'
import faqImg from "../images/faq.jpg"

const Faq = () => {

    const [select, setSelect] = useState(null);

    const toggle = (i) => {
        if (select === i) {
            setSelect(null);
        }
        else {
            setSelect(i);
        }
    }

    return (
        <>
            <section class="faqs-area pt-120" id="FAQs">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-40">
                                <div class="line m-auto"></div>
                                <h3 class="title">Clean and simple design, <span> Comes with everything you need to get
                                    started!</span></h3>
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
                            {data.map((item, i) => (
                                <div class="faq-list">
                                    <div class="faq">
                                        <div class={select === i ? "faq__question active" : "faq__question"} onClick={() => toggle(i)}>
                                            <div class="faq__ttl">{item.question}</div>
                                            <div class={select === i ? "faq__close active" : "faq__close"}></div>
                                        </div>
                                        <div class={select === i ? "faq__answer show" : "faq__answer"}>
                                            <div class="faq__txt">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const data = [
    {
        question: "How Do I Contact Customer?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellus"
    },
    {
        question: "How Do I Contact Customer?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellus"
    },
    {
        question: "How Do I Contact Customer?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellus"
    },
    {
        question: "How Do I Contact Customer?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellus"
    },
    {
        question: "How Do I Contact Customer?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellusLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur sit amet ante nec vulputate.Nulla aliquam, justo auctor consequat tincidunt, arcuerat mattis lorem, lacinia lacinia dui enim at eros.Pellentesque ut gravidaaugue.Duis ac dictum tellus"
    }
]

export default Faq
