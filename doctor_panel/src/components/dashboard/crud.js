import { useState } from 'react';
import { Link } from "react-router-dom";

import client1 from '../../assets/images/client/01.jpg'

import Modal from 'react-bootstrap/Modal';

import {FiEye, MdOutlineCheckCircleOutline, LiaTimesCircleSolid} from '../../assets/icons/vander'

export default function Crud(){
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    let [show3, setShow3] = useState(false);

    return(
        <>
        <td className="text-end p-3">
            <Link to="#" className="btn btn-icon btn-pills btn-soft-primary" onClick={() =>setShow(!show)}><FiEye /></Link>
            <Link to="#" className="btn btn-icon btn-pills btn-soft-success mx-1" onClick={() =>setShow2(!show2)}><MdOutlineCheckCircleOutline /></Link>
            <Link to="#" className="btn btn-icon btn-pills btn-soft-danger" onClick={() =>setShow3(!show3)}><LiaTimesCircleSolid /></Link>
        </td>

        <Modal show={show} onHide={() =>setShow(!show)} animation={false} centered>
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
                                <li className="d-flex">
                                    <h6>Age:</h6>
                                    <p className="text-muted ms-2">25 year old</p>
                                </li>

                                <li className="d-flex">
                                    <h6>Gender:</h6>
                                    <p className="text-muted ms-2">Male</p>
                                </li>

                                <li className="d-flex">
                                    <h6 className="mb-0">Department:</h6>
                                    <p className="text-muted ms-2 mb-0">Cardiology</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex">
                                    <h6>Date:</h6>
                                    <p className="text-muted ms-2">20th Dec 2020</p>
                                </li>

                                <li className="d-flex">
                                    <h6>Time:</h6>
                                    <p className="text-muted ms-2">11:00 AM</p>
                                </li>

                                <li className="d-flex">
                                    <h6 className="mb-0">Doctor:</h6>
                                    <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
        <Modal show={show2} onHide={() =>setShow2(!show2)} animation={false} centered>
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
        <Modal show={show3} onHide={() =>setShow3(!show3)} animation={false} centered>
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
        </>
    )
}