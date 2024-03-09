import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/bg-chat.png'
import logoDark from '../../assets/images/logo-dark.png'

import Navbar from "../../components/navbar";
import PatientSidebar from "../../components/patient/patientSidebar";
import Charts from "../../components/patient/chart";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import client from '../../assets/images/client/09.jpg'
import doctor from '../../assets/images/doctors/02.jpg'

import Modal from 'react-bootstrap/Modal';

import { MonthlyReport, adminFeature, appointment, paymentTwo } from "../../data/data";

import {LuClipboardList,FaEllipsisH, MdOutlineLibraryAdd, FiTrash, BiSend, FaRegSmile, FiPaperclip, FiClock,FiUser, FiSettings, FiArrowRight} from '../../assets/icons/vander'

export default function PatientDashboard(){
    let [open, setOpen] = useState(false)
    let [open2, setOpen2] = useState(false)
    let [show, setShow] = useState(false);
    let [chatSetting, setChatSetting] = useState(false);

    useEffect(()=>{
        let closeModal = ()=>{
            setOpen(false)
        }
        let closeModal2 = ()=>{
            setOpen2(false)
        }
        let closeModal3 = ()=>{
            setChatSetting(false)
        }
        document.addEventListener("mousedown", closeModal);
        document.addEventListener("mousedown", closeModal2);
        document.addEventListener("mousedown", closeModal3);
        return ()=>{
            document.removeEventListener("mousedown", closeModal);
            document.removeEventListener("mousedown", closeModal2);
            document.removeEventListener("mousedown", closeModal3);
        }
    },[])
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>

        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <PatientSidebar/>

                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <h5 className="mb-0">Dashboard</h5>
                        <div className="row">
                            <Charts/>

                            <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
                                <div className="card border-0 rounded shadow">
                                    <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                                        <h6 className="mb-0">Doctor's Appointment</h6>
                                        
                                        <div className="dropdown dropdown-primary">
                                            <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={() =>setOpen(!open)}><FaEllipsisH/></button>
                                            <div className={`${open === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                                                <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><MdOutlineLibraryAdd className="align-middle h6 mb-0"/></span> Add New</Link>
                                                <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6 mb-0"/></span> Delete</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 px-4">
                                        <form>
                                            <div className="mb-0">
                                                <input name="date" type="text" className="form-control start" placeholder="Select date :"/>
                                            </div>
                                        </form>
                                    </div>
                                    
                                    <SimpleBar className="p-4 pt-0" style={{maxHeight:'340px'}}>
                                        {appointment.map((item, index) =>{
                                            let Icon = item.icon
                                            return(
                                                <div className="d-flex justify-content-between align-items-center rounded py-1 px-3 shadow mt-3" key={index}>
                                                    <Icon className={item.class}/>
                                                    <div className="flex-1 overflow-hidden ms-2">
                                                        <h6 className="mb-0">{item.title}</h6>
                                                        <p className="text-muted mb-0 text-truncate small">{item.name}</p>
                                                    </div>
                                                    <span className="mb-0">{item.date}</span>
                                                </div>
                                            )
                                        })}
                                    </SimpleBar>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-12 mt-4 pt-2">
                                <div className="card border-0 rounded shadow">
                                    <div className="d-flex justify-content-between align-items-center px-4 pt-4">
                                        <h6 className="mb-0">Payments</h6>
                                        
                                        <div className="dropdown dropdown-primary">
                                            <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={() =>setOpen2(!open2)}><FaEllipsisH/></button>
                                            <div className={`${open2 === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                                                <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><MdOutlineLibraryAdd className="align-middle h6 mb-0"/></span> Add New</Link>
                                                <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6 mb-0"/></span> Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <SimpleBar className="p-4 pt-0" style={{maxHeight:'400px'}}>
                                        {paymentTwo.map((item,index)=>{
                                            return(
                                                <div className="d-flex justify-content-between align-items-center rounded py-2 px-3 shadow mt-3" key={index}>
                                                    <div className="flex-1 overflow-hidden">
                                                        <h6 className="mb-0">{item.name}</h6>
                                                        <p className="text-muted mb-0 text-truncate small">{item.title}</p>
                                                    </div>
                                                    <Link to="#" className="btn btn-icon btn-primary" onClick={()=>setShow(!show)}><LuClipboardList /></Link>
                                                </div>
                                            )
                                        })}
                                    </SimpleBar>
                                </div>
                                <Modal show={show} onHide={()=> setShow(false)} size="lg" centered>
                                    <Modal.Header closeButton>
                                    <Modal.Title className="h5">Patient Invoice</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="modal-body p-3 pt-4">
                                            <div className="row mb-4">
                                                <div className="col-lg-8 col-md-6">
                                                    <img src={logoDark} height="22" alt=""/>
                                                    <h6 className="mt-4 pt-2">Address :</h6>
                                                    <small className="text-muted mb-0">1419 Riverwood Drive, <br/>Redding, CA 96001</small>
                                                </div>

                                                <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                    <ul className="list-unstyled">
                                                        <li className="d-flex ms-0">
                                                            <small className="mb-0 text-muted">Invoice no. : </small>
                                                            <small className="mb-0 text-dark">&nbsp;&nbsp;#54638990jnn</small>
                                                        </li>
                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Email : </small>
                                                            <small className="mb-0">&nbsp;&nbsp;<Link to="mailto:contact@example.com" className="text-dark">info@UJUR.com</Link></small>
                                                        </li>
                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Phone : </small>
                                                            <small className="mb-0">&nbsp;&nbsp;<Link to="tel:+152534-468-854" className="text-dark">(+12) 1546-456-856</Link></small>
                                                        </li>
                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Website : </small>
                                                            <small className="mb-0">&nbsp;&nbsp;<Link to="#" className="text-dark">www.UJUR.com</Link></small>
                                                        </li>
                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Patient Name : </small>
                                                            <small className="mb-0">&nbsp;&nbsp;Mary Skeens</small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-top">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-6">
                                                        <h5 className="text-muted fw-bold">Invoice <span className="badge rounded-pill bg-soft-success fw-normal ms-2">Paid</span></h5>
                                                        <h6>Surgery (Gynecology)</h6>
                                                    </div>

                                                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                        <ul className="list-unstyled">
                                                            <li className="d-flex mt-2 ms-0">
                                                                <small className="mb-0 text-muted">Issue Dt. : </small>
                                                                <small className="mb-0 text-dark">&nbsp;&nbsp;25th Sep. 2020</small>
                                                            </li>

                                                            <li className="d-flex mt-2 ms-0">
                                                                <small className="mb-0 text-muted">Due Dt. : </small>
                                                                <small className="mb-0 text-dark">&nbsp;&nbsp;11th Oct. 2020</small>
                                                            </li>

                                                            <li className="d-flex mt-2 ms-0">
                                                                <small className="mb-0 text-muted">Dr. Name : </small>
                                                                <small className="mb-0 text-dark">&nbsp;&nbsp;Dr. Calvin Carlo</small>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                
                                                <div className="invoice-table pb-4">
                                                    <div className="table-responsive shadow rounded mt-4">
                                                        <table className="table table-center invoice-tb mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'60px'}}>No.</th>
                                                                    <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'220px'}}>Item</th>
                                                                    <th scope="col" className="text-center border-bottom p-3" style={{minWidth:'60px'}}>Qty</th>
                                                                    <th scope="col" className="border-bottom p-3" style={{minWidth:'130px'}}>Rate</th>
                                                                    <th scope="col" className="border-bottom p-3" style={{minWidth:'130px'}}>Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row" className="text-start p-3">1</th>
                                                                    <td className="text-start p-3">Hospital Charges</td>
                                                                    <td className="text-center p-3">1</td>
                                                                    <td className="p-3">$ 125</td>
                                                                    <td className="p-3">$ 125</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="text-start p-3">2</th>
                                                                    <td className="text-start p-3">Medicine</td>
                                                                    <td className="text-center p-3">1</td>
                                                                    <td className="p-3">$ 245</td>
                                                                    <td className="p-3">$ 245</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="text-start p-3">3</th>
                                                                    <td className="text-start p-3">Special Visit Fee(Doctor)</td>
                                                                    <td className="text-center p-3">1</td>
                                                                    <td className="p-3">$ 150</td>
                                                                    <td className="p-3">$ 150</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-5 ms-auto">
                                                            <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                                                                <li className="text-muted d-flex justify-content-between pe-3 ms-0">Subtotal :<span>$ 520</span></li>
                                                                <li className="text-muted d-flex justify-content-between pe-3 ms-0">Taxes :<span> 0</span></li>
                                                                <li className="d-flex justify-content-between pe-3 ms-0">Total :<span>$ 520</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-top pt-4">
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="text-sm-start text-muted text-center">
                                                                <small className="mb-0">Customer Services : <Link to="tel:+152534-468-854" className="text-warning">(+12) 1546-456-856</Link></small>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <div className="text-sm-end text-muted text-center">
                                                                <small className="mb-0"><Link to="#" className="text-primary">Terms & Conditions</Link></small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>

                            <div className="col-xl-4 col-lg-6 mt-4 pt-2">
                                <div className="card chat chat-person border-0 shadow rounded">
                                    <div className="d-flex justify-content-between border-bottom p-4">
                                        <div className="d-flex">
                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                            <div className="flex-1 overflow-hidden ms-3">
                                                <Link to="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                                                <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                                            </div>
                                        </div>

                                        <ul className="list-unstyled mb-0">
                                            <li className="dropdown dropdown-primary list-inline-item">
                                                <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={()=>setChatSetting(true)}><FaEllipsisH/></button>
                                                <div className={`${chatSetting === true ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                                                    <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><FiUser className="align-middle h6 mb-0"/></span> Profile</Link>
                                                    <Link className="dropdown-item text-dark my-2" to="#"><span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6 mb-0"/></span> Profile Settings</Link>
                                                    <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6 mb-0"/></span> Delete</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <SimpleBar style={{maxHeight:'300px', backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
                                        <ul className="p-4 list-unstyled mb-0 chat">
                                            <li>
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative">
                                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hey Christopher</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>59 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-right">
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative chat-user-image">
                                                            <img src={client} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>45 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-right">
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative chat-user-image">
                                                            <img src={client} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>44 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative">
                                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>42 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative">
                                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>40 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-right">
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative chat-user-image">
                                                            <img src={client} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>45 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative">
                                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>35 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-right">
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative chat-user-image">
                                                            <img src={client} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link className="text-primary"></Link></p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>25 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative">
                                                            <img src={doctor} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>20 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="chat-right">
                                                <div className="d-inline-block">
                                                    <div className="d-flex chat-type mb-3">
                                                        <div className="position-relative chat-user-image">
                                                            <img src={client} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                            <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>
                                                            
                                                        <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                                            <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                                            <small className="text-muted msg-time"><FiClock className="me-1"/>18 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </SimpleBar>
                                    <div className="p-2 rounded-bottom shadow">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" className="form-control border" placeholder="Enter Message..."/>
                                            </div>
                                            <div className="col-auto">
                                                <Link to="#" className="btn btn-icon btn-primary"><BiSend /></Link>
                                                <Link to="#" className="btn btn-icon btn-primary mx-1"><FaRegSmile /></Link>
                                                <Link to="#" className="btn btn-icon btn-primary"><FiPaperclip /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 mt-4 pt-2">
                                <div className="card border-0 shadow rounded p-4">
                                    <h6 className="mb-0">Monthly Reports</h6>

                                    <div className="pt-2">
                                        {MonthlyReport.map((item, index) =>{
                                            return(
                                                <div className="progress-box mt-4" key={index}>
                                                    <h6 className="title text-muted fw-normal">{item.title}</h6>
                                                    <div className="progress">
                                                        <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                                            <div className="progress-value d-block text-muted">{item.progress}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 mt-4 pt-2">
                                <h6 className="mb-0">Contact us</h6>
                                <div className="row">
                                    {adminFeature.slice(0,2).map((item, index) =>{
                                        let Icon = item.icon
                                        return(
                                            <div className="col-xl-12 col-md-6 mt-4" key={index}>
                                                <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                                                    <div className="icon text-center rounded-lg mx-auto">
                                                        <Icon className="align-middle h3 mb-0"/>
                                                    </div>
                                                    <div className="card-body p-0 mt-3">
                                                        <Link to="#" className="title text-dark h5 d-block">{item.title}</Link>
                                                        <Link to="#" className="link">Read more <FiArrowRight className="align-middle "/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}