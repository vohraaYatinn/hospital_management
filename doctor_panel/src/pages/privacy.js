import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import {FiArrowRight, MdOutlineLocalPrintshop} from '../assets/icons/vander'
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

export default function Privacy(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-half-150 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Privacy policy</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent rounded mb-0">
                                    <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Privacy</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-color-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="card shadow rounded border-0">
                            <div className="card-body">
                                <h5 className="card-title">Overview :</h5>
                                <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <h5 className="card-title">We use your information to :</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><FiArrowRight className="fea icon-sm me-2 mb-0"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2 mb-0"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2 mb-0"/>Create your own skin to match your brand</li>
                                    <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2 mb-0"/>Digital Marketing Solutions for Tomorrow</li>
                                    <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2 mb-0"/>Our Talented & Experienced Marketing Agency</li>
                                    <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2 mb-0"/>Create your own skin to match your brand</li>
                                </ul>
    
                                <h5 className="card-title">Information Provided Voluntarily :</h5>
                                <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
    
                                <Link to="#" onClick={() => window.print()} className="btn btn-soft-primary d-print-none"><MdOutlineLocalPrintshop  className="mb-0"/> Print</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}