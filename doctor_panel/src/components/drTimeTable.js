import React from "react";

import dr1 from '../assets/images/doctors/01.jpg'
import dr2 from '../assets/images/doctors/02.jpg'
import dr3 from '../assets/images/doctors/03.jpg'
import dr4 from '../assets/images/doctors/04.jpg'
import dr5 from '../assets/images/doctors/05.jpg'
import dr6 from '../assets/images/doctors/06.jpg'
import dr7 from '../assets/images/doctors/07.jpg'
import dr8 from '../assets/images/doctors/08.jpg'
import dr9 from '../assets/images/doctors/09.jpg'
import dr10 from '../assets/images/doctors/10.jpg'

export default function DrTimeTable(){
    return(
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <span className="badge rounded-pill bg-soft-primary mb-3">Availability</span>
                            <h4 className="title mb-4">Doctors Time Table</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="table-responsive shadow rounded">
                            <table className="table table-center table-bordered bg-white mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-center py-4" style={{minWidth:'120px'}}>Time Table</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Monday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Tuesday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Wednesday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Thursday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Friday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Saturday</th>
                                        <th className="text-center py-4" style={{minWidth:'200px'}}>Sunday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th className="text-center py-5">09:00AM</th>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                                                    <small className="text-muted">Eye Care</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00AM - 10:00AM</small>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                    <small className="text-muted">Psychotherapy</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00AM - 01:00PM</small>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                    <tr>
                                        <th className="text-center py-5">11:00AM</th>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr3} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Cristino Murphy</h6>
                                                    <small className="text-muted">Gynecology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">11:00AM - 04:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr4} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Jennifer Ballance</h6>
                                                    <small className="text-muted">Cardiology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">11:00AM - 12:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr5} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                    <small className="text-muted">Orthopedic</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00AM - 10:00AM</small>
                                        </td>
                                        <td></td>
                                    </tr>
                                    
                                    <tr>
                                        <th className="text-center py-5">02:00PM</th>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr6} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                    <small className="text-muted">Neurology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">02:00PM - 04:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr7} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Jennifer Ballance</h6>
                                                    <small className="text-muted">Cardiology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">11:00AM - 12:00PM</small>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    
                                    <tr>
                                        <th className="text-center py-5">04:00PM</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr8} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                    <small className="text-muted">Neurology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">04:00PM - 05:00PM</small>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr9} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Tara Arrington</h6>
                                                    <small className="text-muted">Neurology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">04:30PM - 06:00PM</small>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th className="text-center py-5">06:00PM</th>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr10} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                    <small className="text-muted">Psychotherapy</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">06:00PM - 09:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr1} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                    <small className="text-muted">Orthopedic</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">07:00PM - 08:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr2} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Jennifer Ballance</h6>
                                                    <small className="text-muted">Cardiology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">06:00PM - 07:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr3} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Alia Reddy</h6>
                                                    <small className="text-muted">Psychotherapy</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">06:00PM - 07:00PM</small>
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th className="text-center py-5">09:00PM</th>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr4} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                    <small className="text-muted">Orthopedic</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00PM - 10:00PM</small>
                                        </td>
                                        <td>
                                            <div className="d-flex mb-3">
                                                <img src={dr6} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Jennifer Ballance</h6>
                                                    <small className="text-muted">Cardiology</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00PM - 10:00PM</small>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="d-flex mb-3">
                                            <img src={dr5} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                <div className="ms-3">
                                                    <h6 className="text-dark mb-0 d-block">Toni Kovar</h6>
                                                    <small className="text-muted">Orthopedic</small>
                                                </div>
                                            </div>
                                            <small className="bg-soft-primary rounded py-1 px-2 d-block text-center">09:00PM - 10:00PM</small>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}