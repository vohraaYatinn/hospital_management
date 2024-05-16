import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/bg/03.jpg'
import about from '../assets/images/about/about-2.png'
import Navbar from "../components/navbar";
import { contact } from "../data/data";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

export default function Contact(){
    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4 text-white title-dark">Contact Us</h3>
                            <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                    <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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

        <section className="mt-100 mt-60">
            <div className="container">
                <div className="row">
                    {contact.map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                                <div className="card features feature-primary text-center border-0">
                                    <div className="icon text-center rounded-md mx-auto">
                                        <Icon className="h3 mb-0"/>
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted mt-3">{item.desc}</p>
                                        <Link to={item.link} className="link">{item.name}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="me-lg-5">
                            <img src={about} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="custom-form rounded shadow p-4">
                            <h5 className="mb-4">Get in touch!</h5>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Subject</label>
                                            <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control border rounded" placeholder="Your Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="card map border-0">
                            <div className="card-body p-0">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title="myfram" allowFullScreen></iframe>
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