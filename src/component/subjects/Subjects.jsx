import React, { useState } from 'react'
import './subject.css'
import subject from '../images/subject.png'

const Subjects = () => {

    const [select, setSelect] = useState(null);

    const toggle = (i) => {
        if (select === i) {
            return setSelect(null);
        } else {
            setSelect(i);
        }
    }

    return (
        <>
            <section className='bg-d pt-120 pb-120'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">List of Subjects In Which Our<br /> <span>Statistics Assignment Help Experts Are Proficient With!</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="subject_img">
                                <img src={subject} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sub_block">
                                {data.map((item, i) => (
                                        <div className="single-sub">
                                            <h2 className={select === i ? "single-sub-head active" : "single-sub-head"} onClick={() => toggle(i)}>
                                                {item.subject}
                                            </h2>
                                            <div className={select === i ? "single-sub-body show" : "single-sub-body"}>
                                                <div className="single-sub-body-content">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

const data = [
    {
        subject: "Business Statistics Assignment Help",
        answer: "Data Analysis, Probability or Hypothesis testing, our online statistics assignment help is available for any unique assignment topic your professor provides you with"
    },
    {
        subject: "SPSS Statistics Assignment Help",
        answer: "Have trouble cracking the SPSS software? Our statistics assignment helper online can assist you with Text analysis, program Modeler program, text analysis and more!"
    },
    {
        subject: "BioStatistics Assignment Help",
        answer: "Can't deal with statistics when your life is full of biological and healthcare problems? Our statistics assignment help can cover you to deliver all your tasks stress free on time."
    },
    {
        subject: "Inferential Statistics Assignment Help",
        answer: "Finding it challenging to predict conclusions from your research? Our statistics assignment experts can assist you with in depth research and accurate predictions online."
    },
    {
        subject: "Applied Statistics Assignment Help",
        answer: "Haven't practised statistics for a while and the submission is just a few days away?  Let our statistics assignment writers rescue you from troubles while you dust the concepts off and rejuvenate the formulas in your brain."
    },
    {
        subject: "Machine Learning Assignment Help",
        answer: "Having a team of 45+ subject specialists working on your machine learning assignments, you can sit back and relax while we brew fresh content to provide you with A1 statistics assignment help."
    }
]

export default Subjects
