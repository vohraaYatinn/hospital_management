import { useState } from 'react';
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';

export default function AddComments(){
    let [show, setShow] = useState(false);
    let [activeIndex, setActiveIndex] = useState(1)

    let handleClose = () => setShow(false);
    let handleShow = () => setShow(true);

    return(
        <>
        
        <div className="col-sm-12 col-md-3 mt-4 mt-sm-0">
            <div className="d-grid">
                <Link to="#" className="btn btn-primary" onClick={handleShow}>Submit</Link>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} size="lg" centered>

            <Modal.Header closeButton>
            <Modal.Title className='h5'>Add Additional Informations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0">
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(1)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="title fw-normal mb-0">Comments</h5>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} to="#" onClick={() =>setActiveIndex(2)}>
                                        <div className="text-center pt-1 pb-1">
                                            <h5 className="title fw-normal mb-0">Lab Test</h5>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                <div className="modal-body p-3 pt-4">
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                                
                                {activeIndex==1 ?
                             <div className="mb-3">
                             <label className="form-label">Comments <span className="text-danger">*</span></label>
                             <textarea name="name" id="name" type="text" className="form-control" placeholder=""
                                                      style={{height:"5rem"}}

                             />
                         </div>
                         :
                         <div className="mb-3">
                         <label className="form-label">Lab Test <span className="text-danger">*</span></label>
                         <textarea name="name" id="name" type="text" className="form-control" placeholder=""
                         style={{height:"5rem"}}
                         />
                     </div>    
                            }
                               




                            </div>
                   
                        </div>
                    </form>
                    <Link to="/doctor-appointment" className="btn btn-primary">Submit</Link>

                </div>
                
            </Modal.Body>
        </Modal>
        </>
    )
}