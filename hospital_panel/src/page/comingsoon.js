import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/03.jpg"
import logoLight from '../assets/images/logo-light.png'

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from '../assets/icons/vander'

export default function Comingsoon(){
    return(
        <section className="position-relative" style={{backgroundImage:`Url(${bg1})`}}>
            <div className="bg-overlay bg-black" style={{opacity: '0.7'}}></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            <div className="text-center mt-md-5">
                                <Link to="/index"><img src={logoLight} height="24" alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h4 className="coming-soon display-5 text-white title-dark fw-bold mb-4">Coming Soon</h4>
                                <p className="text-white-50 para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <div className="subcribe-form mt-4 pt-2">
                                    <form>
                                        <input type="email" id="email" className="rounded shadow" style={{opacity: '0.6'}} required placeholder="Type your Email.."/>
                                        <button type="submit" className="btn btn-primary">Notify Me</button>
                                    </form>
                                </div>
            
                                <p className="text-white-50 mt-2"><span className="text-danger fw-bold">*</span>Notify me when website is launched</p>
                            </div>
                            <div className="text-center mb-md-5">
                                <span className="text-white-50 h6">Follow Now</span>
                                <ul className="list-unstyled social-icon social mb-0 mt-2">
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}