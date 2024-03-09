import React, { useState } from "react";
import { Link } from "react-router-dom";

import client from '../../assets/images/client/01.jpg'
import doctor from '../../assets/images/doctors/01.jpg'
import Wrapper from "../../components/wrapper";
import { patientData } from "../../data/data";

import {FiEye, BsPencil, FiTrash} from '../../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';

export default function Patients(){
    let [viewProfile, setViewProfile] = useState(false)
    let [editProfile, setEditProfile] = useState(false)
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Patients List</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Patients</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'50px'}}>Id</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>Name</th>
                                            <th className="border-bottom p-3">Age</th>
                                            <th className="border-bottom p-3">Gender</th>
                                            <th className="border-bottom p-3">Address</th>
                                            <th className="border-bottom p-3">Mobile No.</th>
                                            <th className="border-bottom p-3">Department</th>
                                            <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>
                                            <th className="border-bottom p-3">Time</th>
                                            <th className="border-bottom p-3">Status</th>
                                            <th className="border-bottom p-3" style={{minWidth:'100px'}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patientData.map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{item.id}</th>
                                                    <td className="py-3">
                                                        <Link to="#" className="text-dark">
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.image} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                <span className="ms-2">{item.name}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="p-3">{item.age}</td>
                                                    <td className="p-3">{item.gender}</td>
                                                    <td className="p-3">{item.address}</td>
                                                    <td className="p-3">{item.mobileNo}</td>
                                                    <td className="p-3">{item.Department}</td>
                                                    <td className="p-3">{item.date}</td>
                                                    <td className="p-3">{item.time}</td>
                                                    <td className="p-3">
                                                        {item.status === 'Approved' ? 
                                                            <span className="badge bg-soft-success">Approved</span>:
                                                            <span className="badge bg-soft-warning">Pending</span>
                                                        }
                                                    </td>
                                                    <td className="text-end p-3">
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-primary" onClick={()=>setViewProfile(true)}><FiEye /></Link>
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-success mx-1" onClick={()=>setEditProfile(true)}><BsPencil /></Link>
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><FiTrash /></Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Modal show={viewProfile} onHide={()=>setViewProfile(false)} centered>
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Profile</h5>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex align-items-center">
                                <img src={client} className="avatar avatar-small rounded-pill" alt=""/>
                                <h5 className="mb-0 ms-3">Howard Tanner</h5>
                            </div>
                            <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                                <li>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex ms-0">
                                            <h6>Age:</h6>
                                            <p className="text-muted ms-2">25 year old</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6>Gender:</h6>
                                            <p className="text-muted ms-2">Male</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6 className="mb-0">Department:</h6>
                                            <p className="text-muted ms-2 mb-0">Cardiology</p>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-flex ms-0">
                                            <h6>Date:</h6>
                                            <p className="text-muted ms-2">20th Dec 2020</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6>Time:</h6>
                                            <p className="text-muted ms-2">11:00 AM</p>
                                        </li>

                                        <li className="d-flex ms-0">
                                            <h6 className="mb-0">Doctor:</h6>
                                            <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Modal.Body>
                    </Modal>
                    <Modal show={editProfile} onHide={()=>setEditProfile(false)} centered size="lg">
                        <Modal.Header closeButton>
                            <h5 className="modal-title" id="exampleModalLabel1">Profile Settings</h5>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4">
                                <img src={doctor} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
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
                                    <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save changes"/>
                                </div>
                            </div>
                        </form>
                        </Modal.Body>
                    </Modal>
                    <div className="row text-center">
                        <div className="col-12 mt-4">
                            <div className="d-md-flex align-items-center text-center justify-content-between">
                                <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}