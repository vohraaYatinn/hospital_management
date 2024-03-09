import { useState } from 'react';
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'

import Wrapper from "../components/wrapper";

import { invoiceData } from "../data/data";

import Modal from 'react-bootstrap/Modal';

export default function InvoiceList(){
    let [show, setShow] = useState(false);
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Invoice List</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Invoice List</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3">Invoice</th>
                                            <th className="border-bottom p-3" style={{minWidth:'220px'}}>Name</th>
                                            <th className="text-center border-bottom p-3" style={{minWidth:'180px'}}>Phone</th>
                                            <th className="text-center border-bottom p-3">Amount</th>
                                            <th className="text-center border-bottom p-3" style={{minWidth:'140px'}}>Generate(Dt.)</th>
                                            <th className="text-center border-bottom p-3">Status</th>
                                            <th className="text-end border-bottom p-3" style={{minWidth:'200px'}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceData.map(( item, index ) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{item.id}</th>
                                                    <td className="p-3">
                                                        <Link to="#" className="text-primary">
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.image} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                <span className="ms-2">{item.name}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="text-center p-3">{item.phone}</td>
                                                    <td className="text-center p-3">{item.amount}</td>
                                                    <td className="text-center p-3">{item.date}</td>
                                                    <td className="text-center p-3">
                                                        <div className={`${item.status === 'Unpaid' ? 'bg-soft-danger' : 'bg-soft-success'} badge  rounded px-3 py-1` }>
                                                            {item.status}
                                                        </div>
                                                    </td>
                                                    <td className="text-end p-3">
                                                        <Link to="#" className="btn btn-sm btn-primary" onClick={()=>setShow(true)}>View</Link>
                                                        <Link to="#" className="btn btn-sm btn-outline-primary ms-2">Print</Link>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 mt-4">
                            <div className="d-md-flex align-items-center text-center justify-content-between">
                                <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                    <li className="page-item"><Link className="page-link" to="" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={()=>setShow(false)} size='lg' centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">Patient Invoice</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mb-4">
                        <div className="col-lg-8 col-md-6">
                            <img src={logoDark} height="22" alt=""/>
                            <h6 className="mt-4 pt-2">Address :</h6>
                            <small className="text-muted mb-0">1419 Riverwood Drive, <br/>Redding, CA 96001</small>
                        </div>

                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul className="list-unstyled">
                                <li className="d-flex ms-0">
                                    <small className="mb-0 text-muted">Invoice no. : </small>
                                    <small className="mb-0 text-dark">&nbsp;&nbsp;#54638990jnn</small>
                                </li>
                                <li className="d-flex ms-0 mt-2">
                                    <small className="mb-0 text-muted">Email : </small>
                                    <small className="mb-0">&nbsp;&nbsp;<Link to="mailto:contact@example.com" className="text-dark">info@doctris.com</Link></small>
                                </li>
                                <li className="d-flex ms-0 mt-2">
                                    <small className="mb-0 text-muted">Phone : </small>
                                    <small className="mb-0">&nbsp;&nbsp;<Link to="tel:+152534-468-854" className="text-dark">(+12) 1546-456-856</Link></small>
                                </li>
                                <li className="d-flex ms-0 mt-2">
                                    <small className="mb-0 text-muted">Website : </small>
                                    <small className="mb-0">&nbsp;&nbsp;<Link to="#" className="text-dark">www.doctris.com</Link></small>
                                </li>
                                <li className="d-flex ms-0 mt-2">
                                    <small className="mb-0 text-muted">Patient Name : </small>
                                    <small className="mb-0">&nbsp;&nbsp;Mary Skeens</small>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-4 border-top">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <h5 className="text-muted fw-bold">Invoice <span className="badge rounded-pill bg-soft-success fw-normal ms-2">Paid</span></h5>
                                <h6>Surgery (Gynecology)</h6>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled">
                                    <li className="d-flex ms-0 mt-2">
                                        <small className="mb-0 text-muted">Issue Dt. : </small>
                                        <small className="mb-0 text-dark">&nbsp;&nbsp;25th Sep. 2020</small>
                                    </li>

                                    <li className="d-flex ms-0 mt-2">
                                        <small className="mb-0 text-muted">Due Dt. : </small>
                                        <small className="mb-0 text-dark">&nbsp;&nbsp;11th Oct. 2020</small>
                                    </li>

                                    <li className="d-flex ms-0 mt-2">
                                        <small className="mb-0 text-muted">Dr. Name : </small>
                                        <small className="mb-0 text-dark">&nbsp;&nbsp;Dr. Calvin Carlo</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="invoice-table pb-4">
                            <div className="table-responsive shadow rounded mt-4">
                                <table className="table table-center invoice-tb mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'60px'}}>No.</th>
                                            <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'220px'}}>Item</th>
                                            <th scope="col" className="text-center border-bottom p-3" style={{minWidth:'60px'}}>Qty</th>
                                            <th scope="col" className="border-bottom p-3" style={{minWidth:'60px'}}>Rate</th>
                                            <th scope="col" className="border-bottom p-3" style={{minWidth:'60px'}}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="text-start p-3">1</th>
                                            <td className="text-start p-3">Hospital Charges</td>
                                            <td className="text-center p-3">1</td>
                                            <td className="p-3">$ 125</td>
                                            <td className="p-3">$ 125</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-start p-3">2</th>
                                            <td className="text-start p-3">Medicine</td>
                                            <td className="text-center p-3">1</td>
                                            <td className="p-3">$ 245</td>
                                            <td className="p-3">$ 245</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="text-start p-3">3</th>
                                            <td className="text-start p-3">Special Visit Fee(Doctor)</td>
                                            <td className="text-center p-3">1</td>
                                            <td className="p-3">$ 150</td>
                                            <td className="p-3">$ 150</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-5 ms-auto">
                                    <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                                        <li className="text-muted d-flex justify-content-between pe-3 ms-0">Subtotal :<span>$ 520</span></li>
                                        <li className="text-muted d-flex justify-content-between pe-3 ms-0">Taxes :<span> 0</span></li>
                                        <li className="d-flex justify-content-between pe-3 ms-0">Total :<span>$ 520</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="border-top pt-4">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="text-sm-start text-muted text-center">
                                        <small className="mb-0">Customer Services : <Link to="tel:+152534-468-854" className="text-warning">(+12) 1546-456-856</Link></small>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="text-sm-end text-muted text-center">
                                        <small className="mb-0"><Link to="#" className="text-dark">Terms & Conditions</Link></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Wrapper>
    )
}