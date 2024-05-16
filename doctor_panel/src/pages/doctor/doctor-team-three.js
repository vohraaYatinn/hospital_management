import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ScrollTop from "../../components/scrollTop";

import { doctorData } from "../../data/data";

import {FiHeart, RiMapPinLine, RiTimeLine, RiMoneyDollarCircleLine, FiFacebook, FiLinkedin, FiGithub, FiTwitter} from '../../assets/icons/vander'

export default function DoctorTeamThree(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container"/>

        <section className="bg-half-150 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h3 className="sub-title mb-4">Doctors team</h3>
                            <p className="para-desc mx-auto text-muted">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        
                            <nav aria-label="breadcrumb" className="d-inline-block mt-3">
                                <ul className="breadcrumb bg-transparent mb-0">
                                    <li className="breadcrumb-item"><Link>UJUR</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Doctors</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Team three</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row align-items-center">
                    {doctorData.map((item,index) =>{
                        return(
                            <div class="col-lg-6 col-md-12 mt-4 pt-2" key={index}>
                                <div class="card team border-0 rounded shadow overflow-hidden">
                                    <div class="row align-items-center">
                                        <div class="col-md-6">
                                            <div class="team-person position-relative overflow-hidden">
                                                <img src={item.image} class="img-fluid" alt=""/>
                                                <ul class="list-unstyled team-like">
                                                    <li><Link to="#" class="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card-body">
                                                <Link to="#" class="title text-dark h5 d-block mb-0">{item.name}</Link>
                                                <small class="text-muted speciality">{item.speciality}</small>
                                                <div class="d-flex justify-content-between align-items-center mt-2">
                                                    <ul class="list-unstyled mb-0">
                                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                        <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                                    </ul>
                                                    <p class="text-muted mb-0">5 Star</p>
                                                </div>
                                                <ul class="list-unstyled mt-2 mb-0">
                                                    <li class="d-flex ms-0">
                                                        <RiMapPinLine className="text-primary align-middle"/>
                                                        <small class="text-muted ms-2">{item.location}</small>
                                                    </li>
                                                    <li class="d-flex ms-0 mt-2">
                                                        <RiTimeLine className="text-primary align-middle"/>
                                                        <small class="text-muted ms-2">{item.time}</small>
                                                    </li>
                                                    <li class="d-flex ms-0 mt-2">
                                                        <RiMoneyDollarCircleLine className="text-primary align-middle"/>
                                                        <small class="text-muted ms-2">{item.charges}</small>
                                                    </li>
                                                </ul>
                                                <ul class="list-unstyled mt-2 mb-0">
                                                    <li class="list-inline-item"><Link to="#" class="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                                    <li class="mt-2 list-inline-item"><Link to="#" class="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                                    <li class="mt-2 list-inline-item"><Link to="#" class="btn btn-icon btn-pills btn-soft-primary"><FiGithub className="icons"/></Link></li>
                                                    <li class="mt-2 list-inline-item"><Link to="#" class="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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