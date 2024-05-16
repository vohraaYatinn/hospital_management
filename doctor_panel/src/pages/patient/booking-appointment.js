import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

export default function BookingAppointment(){
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>

        <section className="bg-half-170 d-table w-100 bg-light">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Book an appointment</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent mb-0 py-1">
                                    <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Appointment</li>
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
                    <div className="col-lg-8">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} onClick={()=>setActiveIndex(1)}  to="#">
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="fw-medium mb-0">Clinic Appointment</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} onClick={()=>setActiveIndex(2)} to="#">
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="fw-medium mb-0">Online Appointment</h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
    
                            <div className="tab-content p-4">
                                {activeIndex === 1 ? 
                                    <div className="tab-pane fade show active">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
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
                                                
                                                <div className="col-md-6">
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
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                                    </div> 
                                                </div>
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :"/>
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
                                    </div> :''
                                }
                                {activeIndex === 2 ? 
                                    <div className="tab-pane fade show active">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                        <input name="name" id="name2" type="text" className="form-control" placeholder="Patient Name :"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-md-6">
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
                                                
                                                <div className="col-md-6">
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
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                        <input name="email" id="email2" type="email" className="form-control" placeholder="Your email :"/>
                                                    </div> 
                                                </div>
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                        <input name="phone" id="phone2" type="tel" className="form-control" placeholder="Your Phone :"/>
                                                    </div> 
                                                </div>
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label"> Date : </label>
                                                        <input name="date" type="text" className="form-control start" placeholder="Select date :"/>
                                                    </div>
                                                </div>
                
                                                <div className="col-md-6">
                                                    <div className="mb-3">
                                                        <label className="form-label" for="input-time">Time : </label>
                                                        <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM"/>
                                                    </div> 
                                                </div>
                
                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                        <textarea name="comments" id="comments2" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                                    </div>
                                                </div>
                
                                                <div className="col-lg-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div> : ''
                                }
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