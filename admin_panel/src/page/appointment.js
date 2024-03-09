import React,{useState} from "react";
import { Link } from "react-router-dom";

import client1 from "../assets/images/client/01.jpg"

import Wrapper from "../components/wrapper";
import { appointmentData } from "../data/data";

import {FiEye, MdOutlineCheckCircleOutline, AiOutlineCloseCircle, LiaTimesCircleSolid} from '../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';

export default function Appointment(){
    let [show, setShow] = useState(false);
    let [showDetail, setShowDetail] = useState(false);
    let [acceptsAppointment, setAcceptsAppointment] = useState(false);
    let [cancle, setCancle] = useState(false);
    return(
        <>
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="row">
                        <div className="col-xl-9 col-lg-6 col-md-4">
                            <h5 className="mb-0">Appointment</h5>
                            <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Appointment</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-8 mt-4 mt-md-0">
                            <div className="justify-content-md-end">
                                <form>
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="mb-0 position-relative">
                                                <select className="form-select form-control">
                                                    <option defaultValue="EY">Today</option>
                                                    <option defaultValue="GY">Tomorrow</option>
                                                    <option defaultValue="PS">Yesterday</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
                                            <div className="d-grid">
                                                <Link to="#" className="btn btn-primary" onClick={() =>setShow(!show)}>Appointment</Link>
                                            </div>
                                            <Modal show={show} onHide={() =>setShow(!show)} size="lg" centered>
                                                <Modal.Header closeButton>
                                                <Modal.Title className='h5'>Book an Appointment</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="modal-body p-3 pt-4">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                                                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :"/>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-lg-4 col-md-6">
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
                                                                
                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Doctor</label>
                                                                        <select className="form-select form-control">
                                                                            <option defaultValue="CA">Dr. Calvin Carlo</option>
                                                                            <option defaultValue="CR">Dr. Cristino Murphy</option>
                                                                            <option defaultValue="AL">Dr. Alia Reddy</option>
                                                                            <option defaultValue="TO">Dr. Toni Kovar</option>
                                                                            <option defaultValue="JE">Dr. Jessica McFarlane</option>
                                                                            <option defaultValue="EL">Dr. Elsie Sherman</option>
                                                                            <option defaultValue="BE">Dr. Bertha Magers</option>
                                                                            <option defaultValue="LO">Dr. Louis Batey</option>
                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                                                    </div> 
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :"/>
                                                                    </div> 
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label"> Date : </label>
                                                                        <input name="date" type="date" className="form-control start" placeholder="Select date :"/>
                                                                    </div>
                                                                </div>

                                                                <div className="col-lg-4 col-md-6">
                                                                    <div className="mb-3">
                                                                        <label className="form-label" htmlFor="input-time">Time : </label>
                                                                        <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM"/>
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
                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="table-responsive bg-white shadow rounded">
                                <table className="table mb-0 table-center">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>Name</th>
                                            <th className="border-bottom p-3" style={{minWidth:'150px'}}>Email</th>
                                            <th className="border-bottom p-3">Age</th>
                                            <th className="border-bottom p-3">Gender</th>
                                            <th className="border-bottom p-3">Department</th>
                                            <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>
                                            <th className="border-bottom p-3">Time</th>
                                            <th className="border-bottom p-3" style={{minWidth:'200px'}}>Doctor</th>
                                            <th className="border-bottom p-3">Fees</th>
                                            <th className="border-bottom p-3" style={{minWidth:'150px'}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointmentData.map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{item.id}</th>
                                                    <td className="p-3">
                                                        <Link to="#" className="text-dark">
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.client} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                <span className="ms-2">{item.clientName}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="p-3">{item.email}</td>
                                                    <td className="p-3">{item.age}</td>
                                                    <td className="p-3">{item.gender}</td>
                                                    <td className="p-3">{item.department}</td>
                                                    <td className="p-3">{item.date}</td>
                                                    <td className="p-3">{item.time}</td>
                                                    <td className="p-3">
                                                        <Link to="#" className="text-dark">
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                                <span className="ms-2">{item.doctorName}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="p-3">{item.fees}</td>
                                                    <td className="text-end p-3">
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-primary" onClick={() =>setShowDetail(!showDetail)}><FiEye /></Link>
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-success mx-1" onClick={() =>setAcceptsAppointment(!acceptsAppointment)}><MdOutlineCheckCircleOutline /></Link>
                                                        <Link to="#" className="btn btn-icon btn-pills btn-soft-danger" onClick={() =>setCancle(!cancle)}><AiOutlineCloseCircle /></Link>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

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
            <Modal show={showDetail} onHide={() =>setShowDetail(!showDetail)} animation={false} centered>
                <Modal.Header closeButton>
                <Modal.Title className='h5'>Appointment Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body p-3 pt-4">
                        <div className="d-flex align-items-center">
                            <img src={client1} className="avatar avatar-small rounded-pill" alt=""/>
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
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={acceptsAppointment} onHide={() =>setAcceptsAppointment(!acceptsAppointment)} animation={false} centered>
                <Modal.Body>
                    <div className="modal-body py-5">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                                <span className="mb-0"><MdOutlineCheckCircleOutline  className="h1"/></span>
                            </div>
                            <div className="mt-4">
                                <h4>Accept Appointment</h4>
                                <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-soft-success">Accept</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={cancle} onHide={() =>setCancle(!cancle)} animation={false} centered>
                <Modal.Body>
                    <div className="modal-body py-5">
                        <div className="text-center">
                            <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                                <span className="mb-0"><LiaTimesCircleSolid className='h1'/></span>
                            </div>
                            <div className="mt-4">
                                <h4>Cancel Appointment</h4>
                                <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-soft-danger">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Wrapper>
        </>
    )
}