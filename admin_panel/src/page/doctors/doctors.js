import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import { doctorData } from "../../data/data";

import {FiFacebook, FiLinkedin, FiInstagram, FiTwitter} from "../../assets/icons/vander"

export default function Doctors(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="row">
                        <div className="col-xl-9 col-md-6">
                            <h5 className="mb-0">Doctors</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Doctors</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-md-6 mt-4 mt-md-0 text-md-end">
                            <Link to="/add-doctor" className="btn btn-primary">Add New Doctor</Link>
                        </div>
                    </div>
                    
                    <div className="row row-cols-md-2 row-cols-lg-5">
                        {doctorData.map((item,index) =>{
                            return(
                                <div className="col mt-4" key={index}>
                                    <div className="card team border-0 rounded shadow overflow-hidden">
                                        <div className="team-img position-relative">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                            <ul className="list-unstyled team-social mb-0">
                                                <li><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiFacebook className="icons"/></Link></li>
                                                <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiLinkedin className="icons"/></Link></li>
                                                <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiInstagram className="icons"/></Link></li>
                                                <li className="mt-2"><Link to="#" className="btn btn-icon btn-pills btn-soft-primary"><FiTwitter className="icons"/></Link></li>
                                            </ul>
                                        </div>
                                        <div className="card-body content text-center">
                                            <Link to={`/dr-profile/${item.id}`} className="title text-dark h5 d-block mb-0">{item.name}</Link>
                                            <small className="text-muted speciality">{item.title}</small>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}