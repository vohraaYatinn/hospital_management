import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import bg1 from '../../assets/images/bg/01.jpg'
import logoIcon from '../../assets/images/logo-icon.png'
import FeatureOne from "../../components/features/featuresOne";
import AboutImage from "../../components/aboutImage";
import DrTimeTable from "../../components/drTimeTable";
import CtaOne from "../../components/cta/ctaOne";
import Patients from "../../components/patients";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import {RiArrowRightLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter, FiCalendar, FiClock} from '../../assets/icons/vander'

import { medicalServices, doctorData, blogData,partners } from "../../data/data";

export default function Index(){
    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>
       
        <section className="bg-half-260 d-table w-100"  style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row mt-5 mt-lg-0">
                    <div className="col-12">
                        <div className="heading-title">
                            <img src={logoIcon} height="50" alt=""/>
                            <h4 className="display-4 fw-bold text-white title-dark mt-3 mb-4">Meet The <br/> Best Doctor</h4>
                            <p className="para-desc text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                            <div className="mt-4 pt-2">
                                <Link to="/booking-appointment" className="btn btn-primary">Make Appointment</Link>
                                <p className="text-white-50 mb-0 mt-2">T&C apply. Please read <Link to="#" className="text-white-50">Terms and Conditions <i className="ri-arrow-right-line align-middle"></i></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <FeatureOne/>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <AboutImage colClass="col-lg-5 col-md-6"/>

                    <div className="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                        <div className="ms-lg-4">
                            <div className="section-title">
                                <h4 className="title mb-4">About Our Treatments</h4>
                                <p className="text-muted para-desc">Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.</p>
                                <p className="text-muted para-desc mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                            </div>

                            <div className="mt-4">
                                <Link to="/aboutus" className="btn btn-primary">Read More <RiArrowRightLine className="align-middle"/></Link>
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
                    {medicalServices.slice(0,8).map((item,index) => {
                        let Icon = item.icon
                        return(
                        <div className="col-xl-3 col-md-4 col-12 mt-5" key={index}>
                            <div className="card features feature-primary border-0">
                                <div className="icon text-center rounded-md">
                                    <Icon className="h3 mb-0"/>
                                </div>
                                <div className="card-body p-0 mt-3">
                                    <Link to="/departments" className="title text-dark h5">{item.title}</Link>
                                    <p className="text-muted mt-3">{item.desc}</p>
                                    <Link to="/departments" className="link">Read More <RiArrowRightLine className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <DrTimeTable/>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Doctors</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    {doctorData.slice(0,4).map((item, index) => {
                        return(
                            <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card team border-0 rounded shadow overflow-hidden">
                                    <div className="team-img position-relative">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                        <ul className="list-unstyled team-social mb-0">
                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                            <li className="mt-2 ms-0"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                            <li className="mt-2 ms-0"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons"/></Link></li>
                                            <li className="mt-2 ms-0"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                        </ul>
                                    </div>
                                    <div className="card-body content text-center">
                                        <Link to="/doctor-team-one" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                        <small className="text-muted speciality">{item.speciality}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="col-12 mt-4 pt-2 text-center">
                        <Link to="/doctor-team-one" className="btn btn-primary">See More</Link>
                    </div>
                </div>
            </div>
        </section>

        <CtaOne/>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Patients Says</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-4 pt-2 text-center">
                        <Patients/>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <span className="badge rounded-pill bg-soft-primary mb-3">Read News</span>
                            <h4 className="title mb-4">Latest News & Blogs</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogData.slice(0,3).map((item,index) => {
                        return(
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                <img src={item.image} className="img-fluid" alt=""/>
                                <div className="card-body p-4">
                                    <ul className="list-unstyled mb-2 ">
                                        <li className="list-inline-item text-muted small me-3 d-inline-flex align-items-center"><FiCalendar className="text-dark h6 me-1 mb-0"/>{item.date}</li>
                                        <li className="list-inline-item text-muted small d-inline-flex align-items-center"><FiClock className="text-dark h6 me-1 mb-0 "/>{item.time}</li>
                                    </ul>
                                    <Link to={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                    <div className="post-meta d-flex justify-content-between mt-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>{item.like}</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>{item.comment}</Link></li>
                                        </ul>
                                        <Link to={`/blog-detail/${item.id}`} className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="py-4 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    {partners.map((item, index) => {
                        return(
                            <div className="col-lg-2 col-md-2 col-6 text-center py-4" key={index}>
                                <img src={item} className="avatar avatar-client" alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}