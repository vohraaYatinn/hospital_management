import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"
import { doctorData } from "../../data/data";

import { FiFacebook, FiLinkedin, FiGithub, FiTwitter} from '../../assets/icons/vander'
import ScrollTop from "../../components/scrollTop";

export default function DoctorTeamOne(){
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
                                    <li className="breadcrumb-item active" aria-current="page">Team one</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {doctorData.map((item, index) =>{
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
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}