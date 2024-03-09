import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';

export default function AddLeave({setFormData, doctorLeaveResponse, submitLeave}){
    let [show, setShow] = useState(false);
    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);
    useEffect(()=>{
        if(doctorLeaveResponse?.result == "success"){
            handleClose()
        }
    },[doctorLeaveResponse])
    return(
        <>
        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
            <div className="d-grid">
                <Link to="#" className="btn btn-primary" onClick={handleShow}>Leave</Link>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
            <Modal.Title className='h5'>Apply a Leave</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body p-3 pt-4">
                        <div className="row">

           
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label"> From Date : </label>
                                    <input name="date" type="date" className="form-control start" placeholder="Select date :"
                                    onChange={(e)=>{
                                        setFormData((prev)=>({...prev, "fromDate":e.target.value}))
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label"> To Date : </label>
                                    <input name="date" type="date" className="form-control start" placeholder="Select date :"
                                                                        onChange={(e)=>{
                                                                            setFormData((prev)=>({...prev, "toDate":e.target.value}))
                                                                        }}
                                    />
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                    <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"
                                                                        onChange={(e)=>{
                                                                            setFormData((prev)=>({...prev, "comment":e.target.value}))
                                                                        }}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary"
                                    onClick={()=>submitLeave()}
                                    >Apply a leave</button>
                                </div>
                            </div>
                        </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}