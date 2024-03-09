import React from 'react'; 
import { Link } from "react-router-dom";

import logoLight from "../assets/images/logo-light.png"

import {FiFacebook, FiLinkedin, FiInstagram, FiTwitter,FiMail, FiPhone, FiMapPin} from '../assets/icons/vander'

export default function Footer(){
    return(

        <>
        <footer className="">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
                        <Link to="#" className="logo-footer">
                            <img src={logoLight} height="22" alt=""/>
                        </Link>
                        <p className="mt-4 me-xl-5">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                    </div>

                    <div className="col-xl-7 col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Company</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link to="/aboutus" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> About us</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Services</Link></li>
                                    <li><Link to="/doctor-team-two" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Team</Link></li>
                                    <li><Link to="/blog-detail" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Project</Link></li>
                                    <li><Link to="/blogs" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Blog</Link></li>
                                    <li><Link to="/login" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Login</Link></li>
                                </ul>
                            </div>
                    
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Departments</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Eye Care</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Psychotherapy</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Dental Care</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Orthopedic</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Cardiology</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Gynecology</Link></li>
                                    <li><Link to="/departments" className="text-foot"><i className="mdi mdi-chevron-right me-1"></i> Neurology</Link></li>
                                </ul>
                            </div>
                    
                            <div className="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Contact us</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li className="d-flex align-items-center">
                                        <FiMail className="fea icon-sm text-foot align-middle"/>
                                        <Link to="mailto:contact@example.com" className="text-foot ms-2">contact@example.com</Link>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <FiPhone className="fea icon-sm text-foot align-middle"/>
                                        <Link to="tel:+152534-468-854" className="text-foot ms-2">+152 534-468-854</Link>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <FiMapPin className="fea icon-sm text-foot align-middle"/>
                                        <Link to="#" className="video-play-icon text-foot ms-2">View on Google map</Link>
                                    </li>
                                </ul>

                                <ul className="list-unstyled social-icon footer-social mb-0 mt-4">
                                    <li className="list-inline-item"><Link to="#" className="rounded-pill"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded-pill"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded-pill"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded-pill"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="pt-4 footer-bar">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start text-center">
                                <p className="mb-0">{new Date().getFullYear()}© UJUR. all rights reserved</p>
                            </div>
                        </div>

                        <div className="col-sm-6 mt-4 mt-sm-0">
                            <ul className="list-unstyled footer-list text-sm-end text-center mb-0">
                                <li className="list-inline-item"><Link to="/terms" className="text-foot me-2">Terms</Link></li>
                                <li className="list-inline-item"><Link to="/privacy" className="text-foot me-2">Privacy</Link></li>
                                <li className="list-inline-item"><Link to="/aboutus" className="text-foot me-2">About</Link></li>
                                <li className="list-inline-item"><Link to="/contact" className="text-foot me-2">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}