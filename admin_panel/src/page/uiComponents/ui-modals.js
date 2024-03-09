import { useState } from 'react';
import { Link } from "react-router-dom";
import Wrapper from "../../components/wrapper";

import subscribe from '../../assets/images/subscribe.png'
import aboutImg from '../../assets/images/ab02.jpg'
import cart from '../../assets/images/pharmacy/cart.png'

import {MdOutlineHeartBroken} from '../../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';

export default function UiModals(){
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    let [show3, setShow3] = useState(false);
    let [show4, setShow4] = useState(false);
    let [show5, setShow5] = useState(false);
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Modals</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-2 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item text-capitalize"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item text-capitalize"><Link to="">Components</Link></li>
                                <li className="breadcrumb-item text-capitalize active" aria-current="page">Modals</li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="card rounded shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="title mb-0"> Modal </h5>
                                </div>
    
                                <div className="p-4">
                                    <Link to="#" onClick={() =>setShow(true)} className="btn btn-primary m-1"> Click Here</Link>
                                    <Link to="#" onClick={() =>setShow2(true)} className="btn btn-primary m-1"> Login Popup</Link>
                                    <Link to="#" onClick={() =>setShow3(true)} className="btn btn-primary m-1">Subscribe Popup</Link>
                                    <Link to="#" onClick={() =>setShow4(true)} className="btn btn-primary m-1">Wishlist Popup</Link>
                                    <Link to="#" onClick={() =>setShow5(true)} className="btn btn-primary m-1">Empty Cart Popup</Link>
                                </div>

                                <div className="modal fade" id="LoginForm">
                                    <Modal show={show} onHide={() =>setShow(false)} centered>
                                        <Modal.Header closeButton>
                                            <h5 className="modal-title" id="LoginForm-title">Modal title</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="p-3 rounded box-shadow">
                                                <p className="text-muted mb-0">Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>                                                        
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <button type="button" className="btn btn-secondary" onClick={() =>setShow(false)}>Close</button>
                                            <button type="button" className="btn btn-primary" onClick={() =>setShow(false)}>Save changes</button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>

                                <div className="modal fade" id="login-popup">
                                    <Modal show={show2} onHide={() =>setShow2(false)} centered size='lg' >
                                        <Modal.Body className='p-0'>
                                            <div className="modal-body p-0">
                                                <div className="container-fluid px-0">
                                                    <div className="row align-items-center g-0">
                                                        <div className="col-lg-6 col-md-5">
                                                            <img src={aboutImg} className="img-fluid" alt=""/>
                                                        </div>

                                                        <div className="col-lg-6 col-md-7">
                                                            <form className="login-form p-4">
                                                                <div className="row">
                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                                                <input type="email" className="form-control" placeholder="Email" name="email" required=""/>
                                                                        </div>
                                                                    </div>
                            
                                                                    <div className="col-lg-12">
                                                                        <div className="mb-3">
                                                                            <label className="form-label">Password <span className="text-danger">*</span></label>
                                                                            <input type="password" className="form-control" placeholder="Password" required=""/>
                                                                        </div>
                                                                    </div>
                            
                                                                    <div className="col-lg-12">
                                                                        <div className="d-flex justify-content-between">
                                                                            <div className="mb-3">
                                                                                <div className="form-check">
                                                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
                                                                                    <label className="form-check-label" htmlFor="flexCheckDefault4">Remember me</label>
                                                                                </div>
                                                                            </div>
                                                                            <p className="forgot-pass mb-0"><Link to="/auth-re-password" className="text-dark fw-bold">Forgot password ?</Link></p>
                                                                        </div>
                                                                    </div>
                            
                                                                    <div className="col-lg-12 mb-0">
                                                                        <div className="d-grid">
                                                                            <button className="btn btn-primary">Sign in</button>
                                                                        </div>
                                                                    </div>
                            
                                                                    <div className="col-12 text-center">
                                                                        <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link to="/auth-signup" className="text-dark fw-bold">Sign Up</Link></p>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        
                                    </Modal>
                                </div>
                                <div className="modal-dialog  modal-lg modal-dialog-centered">
                                    <div className="modal-content rounded shadow border-0">
                                        <Modal show={show3} onHide={() =>setShow3(false)} centered size='lg' >
                                            <Modal.Body className='p-0'>
                                                <div className="modal-body p-0" style={{backgroundImage:`url(${subscribe})`,backgroundRepeat:'no-repeat'}}>
                                                    <div className="clearfix"></div>
                                                    <div className="container-fluid px-0">
                                                        <div className="row align-items-center g-0">
                                                            <div className="col-lg-6 offset-lg-6">
                                                                <div className="pb-5 pt-4 px-4">
                                                                    <h6 className="text-muted">Be the first to know daily updates</h6>

                                                                    <h4>Signup for daily updates</h4>
                                                                    <p className="text-muted mb-0">Subscribe to the Doctris mailing list to receive updates on new arrivals, special offers and our promotions.</p>
                                                                    <form className="mt-4">
                                                                        <div className="row">
                                                                            <div className="col-lg-12">
                                                                                <div className="foot-subscribe mb-3">
                                                                                    <input type="email" name="email" id="daily-updates" className="form-control rounded" placeholder="Your email : " required/>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-lg-12">
                                                                                <div className="d-grid">
                                                                                    <input type="submit" id="submitsubscribe" name="send" className="btn btn-primary" value="Subscribe"/>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-12">
                                                                                <div className="text-center">
                                                                                    <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link to="#" className="text-dark fw-bold">Sign in</Link></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </div>

                                

                                <div className="modal fade" id="wishlist">
                                    <Modal show={show4} onHide={() =>setShow4(false)} centered>
                                        <Modal.Body className='p-5'>
                                            <div className="text-center">
                                                <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px', width:'95px'}}>
                                                    <h1 className="mb-0"><MdOutlineHeartBroken className="align-middle"/></h1>
                                                </div>
                                                <div className="mt-4">
                                                    <h4>Your wishlist is empty.</h4>
                                                    <p className="text-muted">Create your first wishlist request...</p>
                                                    <div className="mt-4">
                                                        <Link to="#" className="btn btn-outline-primary">+ Create new wishlist</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                                <div className="modal fade" id="empty-cart">
                                    <Modal show={show5} onHide={() =>setShow5(false)} centered>
                                        <Modal.Body className='p-4'>
                                            <div className="modal-body">
                                                <div className="text-center">
                                                    <img src={cart} className="avatar avatar-medium rounded-circle shadow" alt=""/>
                                                    <div className="mt-4">
                                                        <h4>Your cart is empty.</h4>
                                                        <p className="text-muted">Looks like you haven't made your choice yet...</p>
                                                        <div className="mt-4">
                                                            <Link to="#" className="btn btn-primary">Start Shopping</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}