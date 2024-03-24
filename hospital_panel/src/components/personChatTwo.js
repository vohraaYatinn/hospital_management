import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bgChat from '../assets/images/bg/bg-chat.png'
import doctorImg from '../assets/images/doctors/02.jpg'
import clientImg from '../assets/images/client/09.jpg'

import SimpleBar from "simplebar-react";

import {FiClock, LuUser2, FiSettings, FiTrash, BsSend,FaRegSmile, FiPaperclip} from '../assets/icons/vander'
import {IoEllipsisHorizontal} from 'react-icons/io5'

export default function PersonChatTwo(){
    let[show, setShow] = useState(false)

    useEffect(()=>{
        let handleClose = () =>{
            setShow(false)
        }
        document.addEventListener('mousedown', handleClose)
    },[])
    return(
        <div className="card chat chat-person border-0 shadow rounded">
            <div className="d-flex justify-content-between border-bottom p-4">
                <div className="d-flex">
                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                    <div className="flex-1 overflow-hidden ms-3">
                        <Link to="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                        <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                    </div>
                </div>

                <ul className="list-unstyled mb-0">
                    <li className="dropdown dropdown-primary list-inline-item">
                        <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={()=>setShow(true)}><IoEllipsisHorizontal /></button>
                        <div className={`${show ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                            <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><LuUser2 className="align-middle h6 mb-0"/></span> Profile</Link>
                            <Link className="dropdown-item text-dark my-1" to="#"><span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6 mb-0"/></span> Profile Settings</Link>
                            <Link className="dropdown-item text-dark" to="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6 mb-0"/></span> Delete</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <SimpleBar style={{maxHeight:'72vh',backgroundImage:`url(${bgChat})`, backgroundPosition:'center'}}>
                <ul className="p-4 list-unstyled mb-0 chat" data-simplebar  >
                    <li>
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative">
                                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hey Christopher</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>59 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="chat-right">
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative chat-user-image">
                                    <img src={clientImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>45 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="chat-right">
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative chat-user-image">
                                    <img src={clientImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>44 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative">
                                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>42 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative">
                                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>40 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="chat-right">
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative chat-user-image">
                                    <img src={clientImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>45 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative">
                                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>35 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="chat-right">
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative chat-user-image">
                                    <img src={clientImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link to="https://1.envato.market/UJUR-template" target="_blank" className="text-primary">https://UJUR.in/UJUR/</Link></p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>25 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative">
                                    <img src={doctorImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>20 min ago</small>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="chat-right">
                        <div className="d-inline-block">
                            <div className="d-flex chat-type mb-3">
                                <div className="position-relative chat-user-image">
                                    <img src={clientImg} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                    <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                </div>
                                    
                                <div className="flex-1 chat-msg" style={{maxWidth:'500px'}}>
                                    <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                    <small className="text-muted msg-time"><FiClock className="me-1 mb-0"/>18 min ago</small>
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
                        <Link to="#" className="btn btn-icon btn-primary"><BsSend /></Link>
                        <Link to="#" className="btn btn-icon btn-primary mx-1"><FaRegSmile /></Link>
                        <Link to="#" className="btn btn-icon btn-primary"><FiPaperclip /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}