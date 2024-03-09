import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import {LuPlus, LuInbox, TbMailStar, LuMailX, TbMailUp, RiMailSettingsLine, FiTrash, PiNotepadBold, RiRestartLine, FiChevronLeft, FiChevronRight, GoStar} from '../../assets/icons/vander'
import { mailList } from "../../data/data";

import Modal from 'react-bootstrap/Modal';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Email(){
    let [activeIndex, setActiveIndex] = useState(1)
    let [show, setShow] = useState(false);
    
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Email</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Email</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="card rounded border-0 mt-4 overflow-hidden">
                        <div className="row g-1">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-12">
                                <div className="card rounded-0 border-0 shadow p-4">
                                    <Link to="" className="btn btn-primary" onClick={() =>setShow(!show)}><LuPlus className="me-1"/>Compose</Link>
                                        <Modal show={show} onHide={() =>setShow(!show)} size="lg" centered>
                                            <Modal.Header closeButton>
                                                <h5 className="modal-title" id="exampleModalLabel">Compose</h5>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="mb-3">
                                                                <input type="email" className="form-control" placeholder="To"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <input type="email" className="form-control" placeholder="Cc"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="mb-3">
                                                                <input type="email" className="form-control" placeholder="Bcc"/>
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                                <CKEditor
                                                                    editor={ ClassicEditor }
                                                                    data="<p>Hello,<br/><br/> Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation. <br/><br/>Thank you</p>"
                                                                />
                                                            
                                                        </div>

                                                        <div className="col-12 mt-4">
                                                            <button className="btn btn-primary">Send Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </Modal.Body>
                                        </Modal>
                                    <ul className="nav nav-pills nav-link-soft nav-justified flex-column mt-4 mb-0">
                                        <li className="nav-item ms-0">
                                            <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(1)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><LuInbox className="h5 align-middle me-2 mb-0"/> Inbox</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(2)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><TbMailStar className="h5 align-middle me-2 mb-0"/> Starred</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(3)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><LuMailX className="h5 align-middle me-2 mb-0"/> Spam</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 4 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(4)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><TbMailUp className="h5 align-middle me-2 mb-0"/> Sent</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 5 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(5)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><RiMailSettingsLine className="h5 align-middle me-2 mb-0"/> Drafts</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 6 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(6)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><FiTrash className="h5 align-middle me-2 mb-0"/> Delete</span>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item ms-0 mt-2">
                                            <Link className={`${activeIndex === 7 ? 'active' : ''} nav-link rounded`} to="#" onClick={() =>setActiveIndex(7)}>
                                                <div className="text-start px-3">
                                                    <span className="mb-0 d-flex align-items-center"><PiNotepadBold className="h5 align-middle me-2 mb-0"/> Notes</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-10 col-lg-9 col-md-8 col-12 mt-4 mt-sm-0">
                                <div className="tab-content rounded-0 shadow">
                                    {activeIndex === 1 ? 
                                        <div className="tab-pane fade bg-white show active">
                                            <div className="table-responsive bg-white shadow rounded">
                                                <table className="table mb-0 table-center">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-bottom p-3" style={{minWidthL:'15px'}} scope="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input check" type="checkbox" value="" id="checkAll"/>
                                                                    <label className="form-check-label fw-normal" htmlFor="checkAll"></label>
                                                                </div>
                                                            </th>
                                                            <th className="border-bottom p-3" style={{minWidthL:'15px'}} scope="col">
                                                                <Link to="#" className="text-muted"><RiRestartLine/></Link>
                                                            </th>
                                                            <th className="border-bottom p-3" style={{minWidthL:'150px'}} scope="col"></th>
                                                            <th className="border-bottom p-3" style={{minWidthL:'750px'}} scope="col"></th>
                                                            <th className="border-bottom p-3 text-end" style={{minWidthL:'150px'}} scope="col">
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light"><FiChevronLeft className="fs-5"/></Link>
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light ms-1"><FiChevronRight className="fs-5"/></Link>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {mailList.map((item, index) =>{
                                                            return(
                                                                <tr key={index}>
                                                                    <th className="p-3">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input check" type="checkbox" value="" id="checkbox1"/>
                                                                            <label className="form-check-label" htmlFor="checkbox1"></label>
                                                                        </div>
                                                                    </th>
                                                                    <th className="p-3"><GoStar className="text-muted"/></th>
                                                                    <td className="p-3">{item.name}</td>
                                                                    <td className="p-3"><p className="text-muted mb-0">{item.desc}</p></td>
                                                                    <td className="text-end class p-3"><small>{item.date}</small></td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                                
                                            <p className="text-end text-muted mb-0 py-2 mx-2">See more 14 of 35</p>
                                        </div>:''
                                    }
                                    {activeIndex === 2 ? 
                                        <div className="tab-pane fade bg-white rounded show active">
                                            <div className="table-responsive">
                                                <table className="table mb-0 table-email table-center table-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-bottom p-3" style={{minWidthL:'15px'}} scope="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input check" type="checkbox" value="" id="checkAll1"/>
                                                                    <label className="form-check-label fw-normal" htmlFor="checkAll1"></label>
                                                                </div>
                                                            </th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'15px'}} scope="col">
                                                                <Link to="#" className="text-muted"><RiRestartLine/></Link>
                                                            </th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'150px'}} scope="col"></th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'750px'}} scope="col"></th>
                                                            <th className="border-bottom py-3 text-end" style={{minWidthL:'150px'}}scope="col">
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light"><FiChevronLeft className="fs-5"/></Link>
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light ms-1"><FiChevronRight className="fs-5"/></Link>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {mailList.slice(0,3).map((item, index) =>{
                                                            return(
                                                                <tr key={index}>
                                                                    <th className="p-3">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input check" type="checkbox" value="" id="checkbox1"/>
                                                                            <label className="form-check-label" htmlFor="checkbox1"></label>
                                                                        </div>
                                                                    </th>
                                                                    <th className="p-3"><GoStar className="text-muted"/></th>
                                                                    <td className="p-3">{item.name}</td>
                                                                    <td className="p-3"><p className="text-muted mb-0">{item.desc}</p></td>
                                                                    <td className="text-end class p-3"><small>{item.date}</small></td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> :''
                                    }
                                    {activeIndex === 3 ?
                                        <div className="tab-pane fade rounded p-4 show active">
                                            <span className="text-muted">Hooray, no spam here!</span>
                                        </div> :''
                                    }
                                    {activeIndex === 4 ?
                                        <div className="tab-pane fade bg-white rounded show active">
                                            <div className="table-responsive">
                                                <table className="table mb-0 table-email table-center table-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th className="border-bottom p-3" style={{minWidthL:'15px'}} scope="col">
                                                                <div className="form-check">
                                                                    <input className="form-check-input check" type="checkbox" value="" id="checkAll1"/>
                                                                    <label className="form-check-label fw-normal" htmlFor="checkAll1"></label>
                                                                </div>
                                                            </th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'15px'}} scope="col">
                                                                <Link to="#" className="text-muted"><RiRestartLine/></Link>
                                                            </th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'150px'}} scope="col"></th>
                                                            <th className="border-bottom py-3" style={{minWidthL:'750px'}} scope="col"></th>
                                                            <th className="border-bottom py-3 text-end" style={{minWidthL:'150px'}}scope="col">
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light"><FiChevronLeft className="fs-5"/></Link>
                                                                <Link to="#" className="btn btn-icon btn-sm btn-pills btn-soft-light ms-1"><FiChevronRight className="fs-5"/></Link>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {mailList.slice(3,6).map((item, index) =>{
                                                            return(
                                                                <tr key={index}>
                                                                    <th className="p-3">
                                                                        <div className="form-check">
                                                                            <input className="form-check-input check" type="checkbox" value="" id="checkbox1"/>
                                                                            <label className="form-check-label" htmlFor="checkbox1"></label>
                                                                        </div>
                                                                    </th>
                                                                    <th className="p-3"><GoStar className="text-muted"/></th>
                                                                    <td className="p-3">{item.name}</td>
                                                                    <td className="p-3"><p className="text-muted mb-0">{item.desc}</p></td>
                                                                    <td className="text-end class p-3"><small>{item.date}</small></td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div> :''
                                    }
                                    {activeIndex === 5 ?
                                        <div className="tab-pane fade rounded p-4 show active">
                                            <span className="text-muted">You don't have any saved drafts. Saving a draft allows you to keep a message you aren't ready to send yet.</span>
                                        </div> :''
                                    }
                                    {activeIndex === 6 ? 
                                        <div className="tab-pane fade rounded p-4 show active">
                                            <span className="text-muted">No conversations in Trash.</span>
                                        </div> :''
                                    }
                                    {activeIndex === 7 ? 
                                        <div className="tab-pane fade rounded p-4 show active">
                                            <span className="text-muted">No notes in Notes</span>
                                        </div> :''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}