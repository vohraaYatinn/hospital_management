import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import doctor from '../../assets/images/doctors/01.jpg'
import { doctorData } from "../../data/data";

import SimpleBar from "simplebar-react";
import {FiInstagram, FiFacebook, FiLinkedin, FiTwitter} from '../../assets/icons/vander'

export default function AddDoctor(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Add New Doctor</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="/doctors">Doctors</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Doctor</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-8 mt-4">
                            <div className="card border-0 p-4 rounded shadow">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-4">
                                        <img src={doctor} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                                    </div>
        
                                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                        <h5 className="">Upload your picture</h5>
                                        <p className="text-muted mb-0">For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
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
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Departments</label>
                                                <select className="form-select form-control">
                                                    <option defaultValue="EY">Eye Care</option>
                                                    <option defaultValue="GY">Gynecologist</option>
                                                    <option defaultValue="PS">Psychotherapist</option>
                                                    <option defaultValue="OR">Orthopedic</option>
                                                    <option defaultValue="DE">Dentist</option>
                                                    <option defaultValue="GA">Gastrologist</option>
                                                    <option defaultValue="UR">Urologist</option>
                                                    <option defaultValue="NE">Neurologist</option>
                                                </select>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Gender</label>
                                                <select className="form-select form-control">
                                                    <option defaultValue="EY">Male</option>
                                                    <option defaultValue="GY">Female</option>
                                                </select>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Instagram</label>
                                                <div className="input-group flex-nowrap">
                                                    <span className="input-group-text bg-light border border-end-0 text-dark" id="insta-id"><FiInstagram className="fea icon-sm"/></span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="insta-id"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Facebook</label>
                                                <div className="input-group flex-nowrap">
                                                    <span className="input-group-text bg-light border border-end-0 text-dark" id="fb-id"><FiFacebook className="fea icon-sm"/></span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="fb-id"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Linkedin</label>
                                                <div className="input-group flex-nowrap">
                                                    <span className="input-group-text bg-light border border-end-0 text-dark" id="linke-pro"><FiLinkedin className="fea icon-sm"/></span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="linke-pro"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Twitter</label>
                                                <div className="input-group flex-nowrap">
                                                    <span className="input-group-text bg-light border border-end-0 text-dark" id="twitter-id"><FiTwitter className="fea icon-sm"/></span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="twitter-id"/>
                                                </div>
                                            </div>
                                        </div>
        
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Bio Here</label>
                                                <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="Bio :"></textarea>
                                            </div>
                                        </div>
                                    </div>
        
                                    <button className="btn btn-primary">Add Doctor</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card rounded border-0 shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="mb-0">Doctors List</h5>
                                </div>
                                <SimpleBar style={{height:'660px'}}>
                                    <ul className="list-unstyled mb-0 p-4 pt-0">
                                        {doctorData.slice(0,6).map((item,index) =>{
                                            return(
                                                <li className="d-md-flex align-items-center text-center text-md-start mt-4 ms-0" key={index}>
                                                    <img src={item.image} className="avatar avatar-medium rounded-md shadow" alt=""/>

                                                    <div className="ms-md-3 mt-4 mt-sm-0">
                                                        <Link to="#" className="text-dark h6">{item.name}</Link>
                                                        <p className="text-muted my-1">{item.title}</p>
                                                        <p className="text-muted mb-0">{item.exp}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}

                                        <li className="mt-4">
                                            <Link to="/doctors" className="btn btn-primary">All Doctors</Link>
                                        </li>
                                    </ul>
                                </SimpleBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}