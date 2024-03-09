import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import doctor1 from '../../assets/images/client/01.jpg'
import Wrapper from "../../components/wrapper";
import { clientReview, companyLogo, doctorData, drTimetable, experienceData } from "../../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import {FiArrowRight, FiHeart, RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine,FiFacebook,FiLinkedin, FiGithub, FiTwitter, RiTimeFill, FiPhone, FiMail} from '../../assets/icons/vander'

export default function DrProfile(){
    let params = useParams();
    let id = params.id
    let data = doctorData.find((doctor)=>doctor.id === parseInt(id))

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
       <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Doctor Profile & Settings</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="doctors">Doctor</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="card rounded shadow overflow-hidden mt-4 border-0">
                        <div className="p-5 bg-primary bg-gradient"></div>
                        <div className="avatar-profile d-flex margin-nagative mt-n5 position-relative ps-3">
                            <img src={data?.image ? data.image : doctor1} className="rounded-circle shadow-md avatar avatar-medium" alt=""/>
                            <div className="mt-4 ms-3 pt-3">
                                <h5 className="mt-3 mb-1">{data?.name ? data.name : 'Dr. Calvin Carlo'}</h5>
                                <p className="text-muted mb-0">{data?.title ? data.title : 'Orthopedic'}</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-12 mt-4">
                                <div className="card border-0 rounded-0 p-4">
                                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded shadow overflow-hidden bg-light">
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(1)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Overview</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(2)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Experience</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(3)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Reviews</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 4 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(4)} >
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Time Table</h5>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 5 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={()=>setActiveIndex(5)}>
                                                <div className="text-center pt-1 pb-1">
                                                    <h5 className="mb-0">Settings</h5>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
        
                                    <div className="tab-content mt-4" id="pills-tabContent">
                                        {activeIndex === 1 ? 
                                            <div className="tab-pane fade show active">
                                                <p className="text-muted">A gynecologist is a surgeon who specializes in the female reproductive system, which includes the cervix, fallopian tubes, ovaries, uterus, vagina and vulva. Menstrual problems, contraception, sexuality, menopause and infertility issues are diagnosed and treated by a gynecologist; most gynecologists also provide prenatal care, and some provide primary care.</p>
                                            
                                                <h6 className="mb-0">Specialties: </h6>
            
                                                <ul className="list-unstyled mt-4">
                                                    <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Women's health services</li>
                                                    <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Pregnancy care</li>
                                                    <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Surgical procedures</li>
                                                    <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Specialty care</li>
                                                    <li className="mt-1 ms-0"><FiArrowRight className="text-primary"/> Conclusion</li>
                                                </ul>
            
                                                <h6 className="mb-0">My Team: </h6>
            
                                                <div className="row row-cols-md-2 row-cols-lg-5">
                                                    {doctorData.slice(0,5).map((item,index) =>{
                                                        return(
                                                            <div className="col mt-4" key={index}>
                                                                <div className="card team border-0 rounded shadow overflow-hidden">
                                                                    <div className="team-person position-relative overflow-hidden">
                                                                        <img src={item.image} className="img-fluid" alt=""/>
                                                                        <ul className="list-unstyled team-like">
                                                                            <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="card-body">
                                                                        <Link to="#" className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                                                        <small className="text-muted speciality">M.B.B.S {item.title}</small>
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
                                                                            <li className="d-flex ms-0 align-items-center">
                                                                                <RiMapPinLine className="text-primary align-middle"/>
                                                                                <small className="text-muted ms-2">63, PG Shustoke, UK</small>
                                                                            </li>
                                                                            <li className="d-flex ms-0 align-items-center mt-2">
                                                                                <RiTimeLine className="text-primary align-middle"/>
                                                                                <small className="text-muted ms-2">Mon: 2:00PM - 6:00PM</small>
                                                                            </li>
                                                                            <li className="d-flex ms-0 align-items-center mt-2">
                                                                                <RiMoneyDollarCircleLine className="text-primary align-middle"/>
                                                                                <small className="text-muted ms-2">$ 75 USD / Visit</small>
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
                                            
                                                <h6 className="mb-0">Professional Experience:</h6>
            
                                                <div className="row">
                                                    <div className="col-12 mt-4">
                                                        <div className="col-md-12">
                                                            <div className="slider-range-four tiny-timeline">
                                                                <TinySlider settings={settings}>
                                                                    {experienceData.map((item,index) =>{
                                                                        return(
                                                                            <div className="tiny-slide text-center" key={index}>
                                                                                <div className="card border-0 p-4 item-box mb-2 shadow rounded">
                                                                                    <p className="text-muted mb-0">{item.year}</p>
                                                                                    <h6 className="mt-1">{item.name}</h6>
                                                                                    <p className="text-muted mb-0">{item.place}</p>
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
                                                    <div className="col-lg-8 text-center">
                                                        <div className="client-review-slider">
                                                            <TinySlider settings={settings2}>
                                                                {clientReview.map((item,index) =>{
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
                                                    {companyLogo.map((item, index) =>{
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
                                                    <div className="col-lg-4 col-md-12">
                                                        <div className="card border-0 p-3 pt-0 rounded shadow">
                                                            <ul className="list-unstyled mb-0">
                                                                {drTimetable.map((item,index) =>{
                                                                    return(
                                                                    <li className="d-flex justify-content-between mt-2 ms-0 mt-3" key={index}>
                                                                        <p className="text-muted mb-0"><RiTimeFill className="text-primary align-middle h5 mb-0"/> {item.day}</p>
                                                                        <p className="text-primary mb-0"><span className="text-dark">Time:</span>{item.time}</p>
                                                                    </li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                                        <div className="card border-0 text-center features feature-primary">
                                                            <div className="icon text-center mx-auto rounded-md">
                                                                <i className="uil uil-phone h3 mb-0"></i><FiPhone className="h3 mb-0"/>
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
                                                                <i className="uil uil-envelope h3 mb-0"></i><FiMail className="h3 mb-0"/>
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
                                        {activeIndex === 5 ? 
                                            <div className="tab-pane fade show active">
                                                <h5 className="mb-1">Settings</h5>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="rounded shadow mt-4">
                                                            <div className="p-4 border-bottom">
                                                                <h6 className="mb-0">Personal Information :</h6>
                                                            </div>
                                
                                                            <div className="p-4">
                                                                <div className="row align-items-center">
                                                                    <div className="col-lg-2 col-md-4">
                                                                        <img src={data?.image ? data.image : doctor1} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                                                                    </div>

                                                                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                                                        <h6 className="">Upload your picture</h6>
                                                                        <p className="text-muted mb-0">For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
                                                                    </div>

                                                                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                                                        <Link to="#" className="btn btn-primary">Upload</Link>
                                                                        <Link to="#" className="btn btn-soft-primary ms-2">Remove</Link>
                                                                    </div>
                                                                </div>
                                                            
                                                                <form className="mt-4">
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">First Name</label>
                                                                                <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Last Name</label>
                                                                                <input name="name" id="name2" type="text" className="form-control" placeholder="Last Name :"/>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Your Email</label>
                                                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                                                            </div> 
                                                                        </div>

                                                                        <div className="col-md-6">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Phone no.</label>
                                                                                <input name="number" id="number" type="text" className="form-control" placeholder="Phone no. :"/>
                                                                            </div>                                                                               
                                                                        </div>

                                                                        <div className="col-md-12">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Your Bio Here</label>
                                                                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Bio :"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    <div className="row">
                                                                        <div className="col-sm-12">
                                                                            <input type="submit" id="submit" name="send" className="btn btn-primary" defaultValue="Save changes"/>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>

                                                        <div className="rounded shadow mt-4">
                                                            <div className="p-4 border-bottom">
                                                                <h6 className="mb-0">Account Notifications :</h6>
                                                            </div>
                                
                                                            <div className="p-4">
                                                                <form>
                                                                    <div className="row">
                                                                        <div className="col-lg-12">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Old password :</label>
                                                                                <input type="password" className="form-control" placeholder="Old password" required=""/>
                                                                            </div>
                                                                        </div>
                                    
                                                                        <div className="col-lg-12">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">New password :</label>
                                                                                <input type="password" className="form-control" placeholder="New password" required=""/>
                                                                            </div>
                                                                        </div>
                                    
                                                                        <div className="col-lg-12">
                                                                            <div className="mb-3">
                                                                                <label className="form-label">Re-type New password :</label>
                                                                                <input type="password" className="form-control" placeholder="Re-type New password" required=""/>
                                                                            </div>
                                                                        </div>
                                    
                                                                        <div className="col-lg-12 mt-2 mb-0">
                                                                            <button className="btn btn-primary">Save password</button>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-6">
                                                        <div className="rounded shadow mt-4">
                                                            <div className="p-4 border-bottom">
                                                                <h6 className="mb-0">General Notifications :</h6>
                                                            </div>
                                
                                                            <div className="p-4">
                                                                <div className="d-flex justify-content-between pb-4">
                                                                    <h6 className="mb-0 fw-normal">When someone mentions me</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" defaultValue="" id="customSwitch1"/>
                                                                        <label className="form-check-label" htmlFor="customSwitch1"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">When someone follows me</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch2" checked/>
                                                                        <label className="form-check-label" htmlFor="customSwitch2"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">When shares my activity</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch3"/>
                                                                        <label className="form-check-label" htmlFor="customSwitch3"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">When someone messages me</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch4" checked/>
                                                                        <label className="form-check-label" htmlFor="customSwitch4"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="rounded shadow mt-4">
                                                            <div className="p-4 border-bottom">
                                                                <h6 className="mb-0">Marketing Notifications :</h6>
                                                            </div>
                                
                                                            <div className="p-4">
                                                                <div className="d-flex justify-content-between pb-4">
                                                                    <h6 className="mb-0 fw-normal">There is a sale or promotion</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch5" checked/>
                                                                        <label className="form-check-label" htmlFor="customSwitch5"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">Company news</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch6"/>
                                                                        <label className="form-check-label" htmlFor="customSwitch6"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">Weekly jobs</h6>
                                                                    <div className="form-check"> 
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch7"/>
                                                                        <label className="form-check-label" htmlFor="customSwitch7"></label>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-between py-4 border-top">
                                                                    <h6 className="mb-0 fw-normal">Unsubscribe News</h6>
                                                                    <div className="form-check">
                                                                        <input type="checkbox" className="form-check-input" id="customSwitch8" checked/>
                                                                        <label className="form-check-label" htmlFor="customSwitch8"></label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="rounded shadow mt-4">
                                                            <div className="p-4 border-bottom">
                                                                <h6 className="mb-0">General Notifications :</h6>
                                                            </div>
                                
                                                            <div className="p-4">
                                                                <div className="p-4 border-bottom">
                                                                    <h5 className="mb-0 text-danger">Delete Account :</h5>
                                                                </div>

                                                                <div className="p-4">
                                                                    <h6 className="mb-0 fw-normal">Do you want to delete the account? Please press below "Delete" button</h6>
                                                                    <div className="mt-4">
                                                                        <button className="btn btn-danger">Delete Account</button>
                                                                    </div>
                                                                </div>
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
                </div>
            </div>
       </Wrapper>
    )
}