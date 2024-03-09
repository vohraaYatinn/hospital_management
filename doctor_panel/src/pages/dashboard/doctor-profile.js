import React, { useState } from "react";
import { Link } from "react-router-dom";

import profileImage from '../../assets/images/doctors/dr-profile.png'

import Navbar from "../../components/navbar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";

import { doctorData,experienceData, patientsData, partners } from "../../data/data";

import {FiHeart, RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter,FiArrowRight, RiTimeFill,FiPhone,FiMail} from '../../assets/icons/vander'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function DoctorProfile(){
    let [activeIndex, setActiveIndex] = useState(1)

    let settings = {
        container: '.slider-range-four',
        items: 4,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },
            

            320: {
                items: 1
            },
        },
      };
    
    let settings2 ={
        container: '.client-review-slider',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
    }  
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>
        <section className="bg-dashboard my-lg-5">
            <div className="container mt-xl-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-0 rounded shadow">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-5 position-relative">
                                    <img src={profileImage} className="img-fluid dr-profile-img" alt=""/>
                                </div>

                                <div className="col-xl-8 col-lg-8 col-md-7">
                                    <div className="p-lg-5 p-4">
                                        <small className="text-muted">25th December, 2020 - 5:00PM</small>

                                        <h4 className="my-3">Good Morning ! <br/> <span className="text-primary h2">Dr. Christopher Burrell</span></h4>
                                        <p className="para-desc text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                                    
                                        <h6 className="mb-0">You have <span className="text-primary">18 patients</span> remaining today!</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="card border-0 shadow rounded p-4">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(1)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Overview</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(2)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Experience</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(3)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Reviews</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 4 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(4)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Location</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 5 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(5)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="mb-0">Time Table</h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            <div className="tab-content mt-4" >
                                {activeIndex === 1 ? 
                                    <div className="tab-pane fade show active">
                                        <h5 className="mb-1">Dr. Christopher Burrell</h5>
                                        <Link to="#" className="text-primary">Gynecologist</Link>, &nbsp;
                                        <Link to="#" className="text-primary">Ph.D</Link>
                                        <p className="text-muted mt-4">A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus, vagina and vulva. Menstrual problems, contraception, sexuality, menopause and infertility issues are diagnosed and treated by a gynecologist; most gynecologists also provide prenatal care, and some provide primary care.</p>
                                    
                                        <h6>Specialties: </h6>

                                        <ul className="list-unstyled mt-4">
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Women's health services</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Pregnancy care</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Surgical procedures</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Specialty care</li>
                                            <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Conclusion</li>
                                        </ul>

                                        <h6>My Team: </h6>

                                        <div className="row">
                                            {doctorData.slice(0,4).map((item,index) =>{
                                                return(
                                                    <div className="col-xl-3 col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                                        <div className="card team border-0 rounded shadow overflow-hidden">
                                                            <div className="team-person position-relative overflow-hidden">
                                                                <img src={item.image} className="img-fluid" alt=""/>
                                                                <ul className="list-unstyled team-like">
                                                                    <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="card-body">
                                                                <Link to="#" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                                                <small className="text-muted speciality">{item.speciality}</small>
                                                                <div className="d-flex justify-content-between align-items-center mt-2">
                                                                    <ul className="list-unstyled mb-0">
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    </ul>
                                                                    <p className="text-muted mb-0">5 Star</p>
                                                                </div>
                                                                <ul className="list-unstyled mt-2 mb-0">
                                                                    <li className="d-flex align-items-center ms-0">
                                                                        <RiMapPinLine className="text-primary align-middle mb-0"/>
                                                                        <small className="text-muted ms-2">{item.location}</small>
                                                                    </li>
                                                                    <li className="d-flex mt-2 align-items-center ms-0">
                                                                        <RiTimeLine className="text-primary align-middle mb-0"/>
                                                                        <small className="text-muted ms-2">{item.time}</small>
                                                                    </li>
                                                                    <li className="d-flex mt-2 align-items-center ms-0">
                                                                        <RiMoneyDollarCircleLine className="text-primary align-middle mb-0"/>
                                                                        <small className="text-muted ms-2">{item.charges}</small>
                                                                    </li>
                                                                </ul>
                                                                <ul className="list-unstyled mt-2 mb-0">
                                                                    <li className="list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                                                    <li className="mt-2 list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                                                    <li className="mt-2 list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons"/></Link></li>
                                                                    <li className="mt-2 list-inline-item"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 2 ?
                                    <div className="tab-pane fade show active">
                                        <h5 className="mb-1">Experience:</h5>

                                        <p className="text-muted mt-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                    
                                        <h6>Professional Experience:</h6>

                                        <div className="row">
                                            <div className="col-12 mt-4">
                                                <div className="col-md-12">
                                                    <div className="slider-range-four tiny-timeline">
                                                        <TinySlider settings={settings}>
                                                            {experienceData.map((item,index) =>{
                                                                return(
                                                                    <div className="tiny-slide text-center" key={index}>
                                                                        <div className="card border-0 p-4 item-box mb-2 shadow rounded">
                                                                            <p className="text-muted mb-0">{item.time}</p>
                                                                            <h6 className="mt-1">{item.title}</h6>
                                                                            <p className="text-muted mb-0">{item.name}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </TinySlider>    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 3 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-8 mt-4 pt-2 text-center">
                                                <div className="client-review-slider">
                                                    <TinySlider settings={settings2}>
                                                        {patientsData.map((item, index) =>{
                                                            return(
                                                                <div className="tiny-slide text-center" key={index}>
                                                                    <p className="text-muted fw-normal fst-italic">{item.desc}</p>
                                                                    <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt=""/>
                                                                    <ul className="list-unstyled mb-0">
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    </ul>
                                                                    <h6 className="text-primary">{item.name} <small className="text-muted">{item.title}</small></h6>
                                                                </div>
                                                            )
                                                        })}
                                                </TinySlider>    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            {partners.map((item,index) =>{
                                                return(
                                                    <div className="col-lg-2 col-md-2 col-6 text-center py-4" key={index}>
                                                        <img src={item} className="avatar avatar-client" alt=""/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 4 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="card map border-0">
                                                    <div className="card-body p-0">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} title="UJUR" className="rounded" allowFullScreen></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                                {activeIndex === 5 ? 
                                    <div className="tab-pane fade show active">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-12">
                                                <div className="card border-0 p-3 rounded shadow">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="d-flex justify-content-between ms-1">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Monday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Tuesday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Wednesday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Thursday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Friday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 20.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Saturday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 18.00</p>
                                                        </li>
                                                        <li className="d-flex justify-content-between mt-2">
                                                            <p className="text-muted mb-0 d-flex align-items-center"><RiTimeFill className="text-primary align-middle h5 mb-0 me-1"/> Sunday</p>
                                                            <p className="text-primary mb-0"><span className="text-dark">Time:</span> 8.00 - 14.00</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                <div className="card border-0 text-center features feature-primary">
                                                    <div className="icon text-center mx-auto rounded-md">
                                                        <span className="mb-0"><FiPhone className="h3"/></span>
                                                    </div>
                        
                                                    <div className="card-body p-0 mt-4">
                                                        <h5 className="title fw-bold">Phone</h5>
                                                        <p className="text-muted">Great doctor if you need your family member to get effective immediate assistance</p>
                                                        <Link to="tel:+152534-468-854" className="link">+152 534-468-854</Link>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                <div className="card border-0 text-center features feature-primary">
                                                    <div className="icon text-center mx-auto rounded-md">
                                                        <span className="mb-0"><FiMail className="h3"/></span>
                                                    </div>
                        
                                                    <div className="card-body p-0 mt-4">
                                                        <h5 className="title fw-bold">Email</h5>
                                                        <p className="text-muted">Great doctor if you need your family member to get effective immediate assistance</p>
                                                        <Link to="mailto:contact@example.com" className="link">contact@example.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}