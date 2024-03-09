import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/02.jpg"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { blogData } from "../data/data";
import {FiCalendar, FiClock} from '../assets/icons/vander'

export default function Blogs(){
    return(
        <>
        <Navbar manuClass="navigation-menu nav-light nav-left" containerClass="container"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4 text-white title-dark">Blogs & News</h3>
                            <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                    <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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
                <div className="row">
                    {blogData.map((item,index) =>{
                        return(
                        <div className="col-lg-4 col-md-6 col-12 mb-4 pb-2" key={index}>
                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                <img src={item.image} className="img-fluid" alt=""/>
                                <div className="card-body p-4">
                                    <ul className="list-unstyled mb-2">
                                        <li className="list-inline-item text-muted small me-3 d-inline-flex align-items-center"><FiCalendar className="mb-0 text-dark h6 me-1"/>{item.date}</li>
                                        <li className="list-inline-item text-muted small d-inline-flex align-items-center"><FiClock className="mb-0 text-dark h6 me-1"/>{item.time}</li>
                                    </ul>
                                    <Link to={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>33</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>08</Link></li>
                                        </ul>
                                        <Link to={`/blog-detail/${item.id}`} className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>

                <div className="row text-center">
                    <div className="col-12">
                        <ul className="pagination justify-content-center mb-0 list-unstyled">
                            <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}