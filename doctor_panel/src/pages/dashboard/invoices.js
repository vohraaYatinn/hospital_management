import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import AdminFooter from "../../components/dashboard/adminFooter";
import ScrollTop from "../../components/scrollTop";
import InvoiceView from "../../components/dashboard/invoiceView";

import { invoiceData } from "../../data/data";

export default function Invoice(){
    return(
        <>
        <Navbar navDark={true} manuClass="navigation-menu nav-left" containerClass="container-fluid"/>
        <section className="bg-dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar colClass ="col-xl-3 col-lg-4 col-md-5 col-12"/>
                    <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <h5 className="mb-0">Invoice List</h5>
                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
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
                                            {invoiceData.map((item, index) =>{
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
                                                            <div className={`${item.status === 'Unpaid' ? 'bg-soft-danger' : 'bg-soft-success'} badge rounded px-3 py-1`}>
                                                                {item.status}
                                                            </div>
                                                        </td>
                                                        <td className="text-end p-3">
                                                            <InvoiceView/>
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
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                                        <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AdminFooter/>
        <ScrollTop/>
        </>
    )
}