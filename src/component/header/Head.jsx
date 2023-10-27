import React, { useEffect} from 'react'
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
                                                <a className="page-scroll active" href="#hero-area">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#services">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#portfolio">Review </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#pricing">Faq</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#team">About us</a>
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
                                    <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s"
                                        data-wow-delay="0.2s">
                                        Basic - SaaS Landing Page</h3>
                                    <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                                        Kickstart Your SaaS or App Site</h2>
                                    <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                    <a href="/" className="main-btn wow fadeInUp" data-wow-duration="1.3s"
                                        data-wow-delay="1.1s">Get
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
