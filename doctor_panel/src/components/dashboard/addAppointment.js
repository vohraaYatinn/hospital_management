import { useState } from 'react';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';

export default function AddApointment(){
    let [show, setShow] = useState(false);

    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    return(
        <>
        <div className="col-sm-12 col-md-7 mt-4 mt-sm-0">
            <div className="d-grid">
                <Link to="#" className="btn btn-primary" onClick={handleShow}>Appointment</Link>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg" centered>
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
                                        <option value="EY">Eye Care</option>
                                        <option value="GY">Gynecologist</option>
                                        <option value="PS">Psychotherapist</option>
                                        <option value="OR">Orthopedic</option>
                                        <option value="DE">Dentist</option>
                                        <option value="GA">Gastrologist</option>
                                        <option value="UR">Urologist</option>
                                        <option value="NE">Neurologist</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Doctor</label>
                                    <select className="form-select form-control">
                                        <option value="CA">Dr. Calvin Carlo</option>
                                        <option value="CR">Dr. Cristino Murphy</option>
                                        <option value="AL">Dr. Alia Reddy</option>
                                        <option value="TO">Dr. Toni Kovar</option>
                                        <option value="JE">Dr. Jessica McFarlane</option>
                                        <option value="EL">Dr. Elsie Sherman</option>
                                        <option value="BE">Dr. Bertha Magers</option>
                                        <option value="LO">Dr. Louis Batey</option>
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
                                    <label className="form-label" for="input-time">Time : </label>
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
        </>
    )
}