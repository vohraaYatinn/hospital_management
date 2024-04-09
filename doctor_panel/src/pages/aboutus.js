import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/bg/about.jpg'

import Navbar from "../components/navbar";
import AboutImage from "../components/aboutImage";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { medicalServices, doctorData } from "../data/data";

import {FiArrowRight, FiFacebook, FiLinkedin, FiGithub, FiTwitter } from "../assets/icons/vander"

export default function AboutUs(){
    return(
        <>
            <Navbar manuClass="navigation-menu nav-light nav-left" containerClass="container"/>
            <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
                <div className="bg-overlay bg-overlay-dark"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="sub-title mb-4 text-white title-dark">About us</h3>
                                <p className="para-desc mx-auto text-white-50">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                                <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                    <ul className="breadcrumb bg-light rounded mb-0 py-1 px-2">
                                        <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">About us</li>
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
                <div className="row align-items-center">
                    <AboutImage colClass="col-lg-5 col-md-6"/>

                    <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                        <div className="ms-lg-4">
                            <div className="section-title me-lg-5">
                                <span className="badge rounded-pill bg-soft-primary">About UJUR</span>
                                <h4 className="title mt-3 mb-4">Good Services And Better <br/> Health By Our Specialists</h4>
                                <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                <p className="para-desc text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                                <div className="mt-4">
                                    <Link to="" className="btn btn-soft-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="badge rounded-pill bg-soft-primary mb-3">Departments</span>
                            <h4 className="title mb-4">Our Medical Services</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {medicalServices.slice(0,8).map((item, index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-xl-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary border-0">
                                    <div className="icon text-center rounded-md">
                                        <Icon className="ri-eye-fill h3 mb-0"/>
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <Link to="#" className="title text-dark h5">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>
                                        <Link to="#" className="link">Read More <FiArrowRight className="mb-0 align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Doctors</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    {doctorData.slice(0,4).map((item, index) =>{
                        return(
                        <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card team border-0 rounded shadow overflow-hidden">
                                <div className="team-img position-relative">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <ul className="list-unstyled team-social mb-0">
                                        <li><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons"/></Link></li>
                                        <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                    </ul>
                                </div>
                                <div className="card-body content text-center">
                                    <Link to="#" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                    <small className="text-muted speciality">{item.speciality}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}

                    <div className="col-12 mt-4 pt-2 text-center">
                        <Link to="doctor-team-one.html" className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}