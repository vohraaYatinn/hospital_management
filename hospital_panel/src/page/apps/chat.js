import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import chatBg from '../../assets/images/bg/bg-chat.png'
import doctor1 from '../../assets/images/doctors/01.jpg'
import doctor2 from '../../assets/images/doctors/02.jpg'

import Wrapper from "../../components/wrapper";
import SimpleBar from "simplebar-react";

import {RiTimeLine, FiSettings, LuUser2, FiTrash, AiOutlineSend, FiSmile, FiPaperclip} from '../../assets/icons/vander'
import {FaEllipsis} from 'react-icons/fa6'
import { chatData } from "../../data/data";

export default function Chats(){
    let [search, setSearch] = useState(false)
    let [profileSetting, setProfileSetting] = useState(false)

    useEffect(() =>{
        let closeSearch = () =>{
            setSearch(false)
        }
        let closeProfile = () =>{
            setProfileSetting(false)
        }
        document.addEventListener('mousedown', closeSearch)
        document.addEventListener('mousedown', closeProfile)
        return()=>{
            document.removeEventListener('mousedown', closeSearch)
            document.removeEventListener('mousedown', closeProfile)
        }
    },[])
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Chatbox</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">UJUR</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Apps</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Chat</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-3 col-lg-5 col-md-5 col-12 mt-4">
                            <div className="card border-0 rounded shadow">
                                <div className="text-center p-4 border-bottom">
                                    <img src={doctor1} className="avatar avatar-md-md rounded-pill shadow" alt=""/>
                                    <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
                                    <p className="text-muted mb-0">Orthopedic</p>
                                </div>

                                <SimpleBar className="p-2 chat chat-list" style={{maxHeight:'505px'}}>
                                    {chatData.map((item, index) =>{
                                        return(
                                            <Link to="#" className={`${item.bg === true ? 'active' : ''} d-flex chat-list p-2 rounded position-relative`} key={index}>
                                                <div className="position-relative">
                                                    <img src={item.image} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                    {item.status === 'active' ? 
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>:
                                                        <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                    }
                                                </div>
                                                <div className="overflow-hidden flex-1 ms-2">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="text-dark mb-0 d-block">{item.name}</h6>
                                                        <small className="text-muted">{item.time}</small>
                                                    </div>
                                                    {item.badge === true ? 
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-dark h6 mb-0 text-truncate">{item.message}</div>
                                                            <span className="badge rounded-pill bg-soft-danger">{item.badgeNo}</span>
                                                        </div> :
                                                        <div className="text-muted text-truncate">{item.message}</div>
                                                    }
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </SimpleBar>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4">
                            <div className="card chat chat-person border-0 shadow rounded">
                                <div className="d-flex justify-content-between border-bottom p-4">
                                    <div className="d-flex">
                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                        <div className="overflow-hidden ms-3">
                                            <Link to="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                                            <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                                        </div>
                                    </div>

                                    <ul className="list-unstyled mb-0">
                                        <li className="dropdown dropdown-primary list-inline-item">
                                            <button type="button" className="btn btn-icon btn-pills btn-primary dropdown-toggle p-0" onClick={() =>setSearch(!search)}><i className="mdi mdi-magnify"></i></button>
                                            <div className={`${search ? 'show' :''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0`} style={{width:'200px', right:'0'}}>
                                                <form>
                                                    <input type="text" id="text" name="name" className="form-control border" placeholder="Search..."/>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="dropdown dropdown-primary list-inline-item">
                                            <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={() =>setProfileSetting(!profileSetting)}><FaEllipsis /></button>
                                            <div className={`${profileSetting ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                                                <Link className="dropdown-item text-dark d-flex align-items-center" to="#"><span className="mb-0 d-inline-block me-1"><LuUser2 className="align-middle h6"/></span> Profile</Link>
                                                <Link className="dropdown-item text-dark d-flex align-items-center" to="#"><span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6"/></span> Profile Settings</Link>
                                                <Link className="dropdown-item text-dark d-flex align-items-center" to="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6"/></span> Delete</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <SimpleBar style={{maxHeight:"555px"}}>
                                    <ul className="p-4 list-unstyled mb-0 chat" style={{backgroundImage:`url(${chatBg})` , backgroundPosition:'center'}}>
                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>59 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>44 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>42 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>40 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>35 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link to="https://1.envato.market/UJUR-template" target="_blank" className="text-primary">https://UJUR.in/UJUR/</Link></p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>25 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <img src={doctor2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>20 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <img src={doctor1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>18 min ago</small>
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
                                            <Link to="#" className="btn btn-icon btn-primary"><AiOutlineSend /></Link>
                                            <Link to="#" className="btn btn-icon btn-primary mx-1"><FiSmile /></Link>
                                            <Link to="#" className="btn btn-icon btn-primary"><FiPaperclip /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}