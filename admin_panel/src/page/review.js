import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "../components/wrapper";

import { reviewData } from "../data/data";

export default function Review(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Reviews</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/index">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Review</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive bg-white shadow rounded">
                                        <table className="table mb-0 table-center">
                                            <thead>
                                                <tr>
                                                    <th className="border-bottom p-3" style={{minWidth:'50px'}}>#</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'200px'}}>Name</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'150px'}}>Email</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'150px'}}>Stars</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'350px'}}>Comments</th>
                                                    <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>
                                                    <th className="border-bottom p-3">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {reviewData.map((item, index) =>{
                                                    return(
                                                        <tr key={index}>
                                                            <th className="p-3">{item.id}</th>
                                                            <td className="p-3">
                                                                <Link to="#" className="text-dark">
                                                                    <div className="d-flex align-items-center">
                                                                        <img src={item.image} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                        <span className="ms-2">{item.name}</span>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                            <td className="p-3">{item.mail}</td>
                                                            <td className="p-3">
                                                                <ul className="list-unstyled mb-0">
                                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                    <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                                </ul>
                                                            </td>
                                                            <td className="p-3 text-muted">{item.comments}</td>
                                                            <td className="p-3">{item.date}</td>
                                                            <td className="p-3"><Link to="#" className="btn btn-sm btn-soft-danger">Delete</Link></td>
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
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}