import React, { useState } from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import { FiArrowRight } from '../assets/icons/vander'

import { faqData } from "../data/data";

export default function Terms(){
    let [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Terms & Conditions</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Terms</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-7 mt-4">
                            <div className="card shadow border-0 rounded">
                                <div className="card-body">
                                    <h5 className="card-title">Introduction :</h5>
                                    <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
    
                                    <h5 className="card-title">User Agreements :</h5>
                                    <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                    <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                                    <p className="text-muted">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.</p>
                                    
                                    <h5 className="card-title">Restrictions :</h5>
                                    <p className="text-muted">You are specifically restricted from all of the following :</p>
                                    <ul className="list-unstyled text-muted">
                                        <li><FiArrowRight className="fea icon-sm me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Create your own skin to match your brand</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Digital Marketing Solutions for Tomorrow</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Our Talented & Experienced Marketing Agency</li>
                                        <li className="mt-2 ms-0"><FiArrowRight className="fea icon-sm me-2"/>Create your own skin to match your brand</li>
                                    </ul>
    
                                    <h5 className="card-title">Users Question & Answer :</h5>
                                    <div className="accordion mt-4" id="accordionExample">
                                        {faqData.slice(0,4).map((item,index) =>{
                                            return(
                                                <div className="accordion-item border rounded mt-2" key={index}>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() =>setActiveIndex(item.id)}>
                                                           {item.title}
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className={`${activeIndex === item.id ? 'show' : ''} accordion-collapse border-0 collapse`}>
                                                        <div className="accordion-body text-muted">
                                                            {item.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
    
                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-primary mt-2 me-2">Accept</Link>
                                        <Link to="#" className="btn btn-soft-primary mt-2">Decline</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}