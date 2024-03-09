import React,{useState} from "react";
import { Link } from "react-router-dom";

import Wrapper from "../../components/wrapper";

import { FiCalendar, FiClock } from "../../assets/icons/vander"

import { blogData } from "../../data/data";

import Modal from 'react-bootstrap/Modal';

export default function Blogs(){
    let [show, setShow] = useState(false);

    let [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">Blogs</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-1">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                                </ul>
                            </nav>
                        </div>

                        <div className="mt-4 mt-sm-0">
                            <Link to="#" className="btn btn-primary" onClick={() =>setShow(true)}>Add Blog</Link>
                        </div>
                        <Modal show={show} onHide={() =>setShow(false)} size="lg" centered>
                            <Modal.Header closeButton>
                                <h5 className="modal-title" id="exampleModalLabel">Add Blog</h5>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="d-grid">
                                            <p className="text-muted">Upload your blog image here, Please click "Upload Image" Button.</p>
                                            {file === null ?
                                                    <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>:
                                                    <img src={file} alt="" style={{width:'100%', height:'auto'}}/>
                                                }
                                                
                                                <input type="file" id="input-file" name="input-file" accept="image/*" className="btn-upload btn btn-primary mt-4" onChange={handleChange} hidden/>
                                            <label className="btn-upload btn btn-primary mt-4" htmlFor="input-file">Upload Image</label>
                                        </div>
                                    </div>

                                    <div className="col-md-8 mt-4 mt-sm-0">
                                        <div className="ms-md-4">
                                            <form>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Blog Title <span className="text-danger">*</span></label>
                                                            <input name="name" id="name" type="text" className="form-control" placeholder="Title :"/>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Date : </label>
                                                            <input name="date" type="text" className="form-control start" id="date" defaultValue="Select date:"/>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label"> Time to read : </label>
                                                            <input name="time" type="text" className="form-control" id="time" defaultValue="5 min read"/>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Tag</label>
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
            
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Description <span className="text-danger">*</span></label>
                                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Blog description :"></textarea>
                                                        </div>
                                                    </div>
            
                                                    <div className="col-lg-12 text-end">
                                                        <button type="submit" className="btn btn-primary">Add Blog</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    
                    <div className="row">
                        {blogData.map((item,index) =>{
                            return(
                                <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-4" key={index}>
                                    <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                        <div className="card-body p-4">
                                            <ul className="list-unstyled mb-2">
                                                <li className="list-inline-item text-muted small me-3 d-inline-flex align-items-lg-center"><FiCalendar className="text-dark h6 me-1 mb-0"/>{item.date}</li>
                                                <li className="list-inline-item text-muted small d-inline-flex align-items-lg-center"><FiClock className="text-dark h6 me-1 mb-0"/>{item.time}</li>
                                            </ul>
                                            <Link to={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                            <div className="post-meta d-flex justify-content-between mt-3">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>{item.like}</Link></li>
                                                    <li className="list-inline-item"><Link to="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>{item.comment}</Link></li>
                                                </ul>
                                                <Link to={`/blog-detail/${item.id}`} className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <ul className="pagination justify-content-end mb-0 list-unstyled">
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
        </Wrapper>
    )
}