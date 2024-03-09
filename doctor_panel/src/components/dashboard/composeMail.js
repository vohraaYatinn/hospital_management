import { useState } from 'react';
import { Link } from "react-router-dom";

import {BiPlus} from '../../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function ComposeMail(){
    let [show, setShow] = useState(false);
    return(
        <>
        <Link to="#" className="btn btn-primary" onClick={() =>setShow(!show)}><BiPlus className="me-1 h5 mb-0"/> Compose</Link>

        <Modal show={show} onHide={() =>setShow(!show)} size='lg' centered>
            <Modal.Header closeButton>
            <Modal.Title className='h5'>Compose</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body p-3 pt-4">
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
                                <button type="submit" className="btn btn-primary">Send Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        
        </Modal>
        </>
    )
}