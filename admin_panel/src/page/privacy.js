import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import { FiArrowRight, LuPrinter } from '../assets/icons/vander'

export default function Privacy(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Privacy Policy</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Privacy</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-7 mt-4">
                            <div className="card shadow rounded border-0">
                                <div className="card-body">
                                    <h5 className="card-title">Overview :</h5>
                                    <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                    <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
                                    <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                                
                                    <h5 className="card-title">We use your information to :</h5>
                                    <ul className="list-unstyled text-muted">
                                        <li><FiArrowRight className="fea icon-sm me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Create your own skin to match your brand</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Create your own skin to match your brand</li>
                                    </ul>
        
                                    <h5 className="card-title">Information Provided Voluntarily :</h5>
                                    <p className="text-muted">In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.</p>
        
                                    <Link to="#" onClick={() => window.print()} className="btn btn-soft-primary d-print-none"><LuPrinter /> Print</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}