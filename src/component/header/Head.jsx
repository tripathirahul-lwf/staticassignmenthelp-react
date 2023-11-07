import React, { useEffect } from 'react'
import './head.css'
import logo from '../images/logo.svg'
import Embedform from '../embedForm/Embedform';

const Head = () => {


    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.navbar-area');
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="header-area">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a class="navbar-brand" href="index.html">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
                                        aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse navi" id="navbarNine">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="page-scroll active" href="#">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#services">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#review">Review </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#faq">FAQs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#footer">About us</a>
                                            </li>

                                        </ul>
                                    </div>

                                </nav>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="home" className="header-hero bg_cover pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="header-hero-content text-center">
                                    <h2 className="header-title ">
                                        No. 1 Statistics Assignment Help: Where Experts Convert Data Into Valuable Insights!
                                    </h2>
                                    <p className="text " >Need help with statistics assignment? With our statistics assignment help, you get an
                                        opportunity to grasp complex data and convert it into actionable insights along with making
                                        sure that you not only meet your assignment deadlines but also understand what you are
                                        going to submit!
                                    </p>
                                    <a href="/" className="main-btn ">Get
                                        Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form">
                                    <div className="banner_form">
                                        <Embedform />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Head
