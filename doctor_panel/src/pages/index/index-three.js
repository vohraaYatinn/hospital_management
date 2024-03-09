import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/02.jpg'
import bg2 from '../../assets/images/bg/05.jpg'
import logoIcon from '../../assets/images/logo-icon.png'

import Navbar from "../../components/navbar";
import AboutImage from "../../components/aboutImage";
import CtaThree from "../../components/cta/ctaThree";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import {RiMapPin2Line, RiUser2Line, RiArrowRightLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter,MdOutlineEventNote} from '../../assets/icons/vander'

import { ctaData, medicalServices, partners, doctorData, contactData } from "../../data/data";

export default function IndexThree(){
    return(
        <>
        <Navbar manuClass="navigation-menu nav-left nav-light" containerClass="container"/>

        <section className="bg-half-170 d-table w-100" id="home" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-overlay-dark"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-10">
                        <div className="heading-title text-center">
                            <img src={logoIcon} height="50" alt=""/>
                            <h4 className="heading fw-bold text-white title-dark mt-3 mb-4">Booking Your Appointments</h4>
                            <p className="para-desc mx-auto text-white-50 mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            
                            <div className="mt-4 pt-2">
                                <form className="rounded text-start shadow p-4 bg-white-50">
                                    <div className="row align-items-center">
                                        <div className="col-md">
                                            <div className="input-group bg-white border rounded" style={{opacity:'0.7'}}>
                                                <span className="input-group-text border-0"><RiMapPin2Line className="text-primary h5 fw-normal mb-0"/></span>
                                                <input name="name" id="location" type="text" className="form-control border-0" placeholder="Location:"/>
                                            </div>
                                        </div>

                                        <div className="col-md mt-4 mt-sm-0">
                                            <div className="input-group bg-white border rounded" style={{opacity:'0.7'}}>
                                                <span className="input-group-text border-0"><RiUser2Line className="text-primary h5 fw-normal mb-0"/></span>
                                                <input name="name" id="name" type="text" className="form-control border-0" placeholder="Doctor Name:"/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-auto mt-4 mt-sm-0">
                                            <div className="d-grid d-md-block">
                                                <button type="submit" className="btn btn-primary">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section py-5 bg-light">
            <div className="container">
                <div className="row">
                    {ctaData.map((item, index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0" key={index}>
                                <div className="d-flex">
                                    <Icon className="display-1 mb-0 text-primary"/>
                                    <div className="ms-3 ms-lg-4">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section pb-0">
            <div className="container">
                <div className="row align-items-center">
                    <AboutImage colClass="col-lg-5 col-md-6"/>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <span className="badge rounded-pill bg-soft-primary">About UJUR</span>
                            <h4 className="title mt-3 mb-4">Good Services And Better <br/> Health By Our Specialists</h4>
                            <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            <p className="para-desc text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                            <div className="mt-4">
                                <Link to="/aboutus" className="btn btn-soft-primary">Read More</Link>
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
                    {medicalServices.slice(0,8).map((item,index) =>{
                        let Icon = item.icon
                        return(
                            <div className="col-xl-3 col-md-4 col-12 mt-5" key={index}>
                                <div className="card features feature-primary bg-transparent border-0">
                                    <div className="icon text-center rounded-md">
                                        <Icon className="h3 mb-0"/>
                                    </div>
                                    <div className="card-body p-0 mt-3">
                                        <Link onTouchMove="/departments" className="title text-dark h5">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>
                                        <Link to="/departments" className="link">Read More <RiArrowRightLine className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container-fluid mt-100 mt-60">
                <div className="py-5 rounded" style={{backgroundImage:`url(${bg2})`}}>
                   <CtaThree/>
                </div>
            </div>
        </section>

        <section className="pt-md-0 cta-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row mt-4">
                            {partners.map((item, index) =>{
                                return(
                                    <div className="col-lg-3 col-md-4 col-6 text-center py-4" key={index}>
                                        <img src={item} className="avatar avatar-client" alt=""/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
                    {doctorData.slice(0,4).map((item, index) =>{
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
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-lg-end">
                    <div className="col-md-6">
                        <div className="me-xl-3">
                            <div className="section-title mb-4 pb-2">
                                <MdOutlineEventNote className="text-primary h2"/>
                                <h4 className="title mb-4">Book Your Appointment</h4>
                                <p className="text-muted para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                            </div>
                            {contactData.map((item, index) =>{
                                 let Icon = item.icon
                                return(
                                    <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden mt-4" key={index}>
                                        <Icon className="icons display-3 mb-0 text-primary"/>
                                        <div className="ms-3">
                                            <h5 className="titles">{item.title}</h5>
                                            <p className="text-muted para mb-0">{item.desc}</p>
                                        </div>
                                        <div className="big-icon">
                                            <Icon/>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 rounded shadow p-4 ms-xl-3">
                            <div className="custom-form">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                <input name="name" id="name1" type="text" className="form-control" placeholder="Patient Name :"/>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Departments</label>
                                                <select className="form-select form-control">
                                                    <option value="EY">Eye Care</option>
                                                    <option value="GY">Gynecologist</option>
                                                    <option value="PS">Psychotherapist</option>
                                                    <option value="OR">Orthopedic</option>
                                                    <option value="DE">Dentist</option>
                                                    <option value="GA">Gastrologist</option>
                                                    <option value="UR">Urologist</option>
                                                    <option value="NE">Neurologist</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Doctor</label>
                                                <select className="form-select form-control">
                                                    <option value="CA">Dr. Calvin Carlo</option>
                                                    <option value="CR">Dr. Cristino Murphy</option>
                                                    <option value="AL">Dr. Alia Reddy</option>
                                                    <option value="TO">Dr. Toni Kovar</option>
                                                    <option value="JE">Dr. Jessica McFarlane</option>
                                                    <option value="EL">Dr. Elsie Sherman</option>
                                                    <option value="BE">Dr. Bertha Magers</option>
                                                    <option value="LO">Dr. Louis Batey</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                            </div> 
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :"/>
                                            </div> 
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label"> Date <span className="text-danger">*</span></label>
                                                <input name="date" type="text" className="form-control start" placeholder="Select date :"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label" for="input-time">Time <span className="text-danger">*</span></label>
                                                <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM"/>
                                            </div> 
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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