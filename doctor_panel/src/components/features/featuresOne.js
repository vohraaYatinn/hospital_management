import React from "react";
import { Link } from "react-router-dom";

import {FiArrowRight,RiHeartPulseFill,RiDossierFill,RiTimeFill} from '../../assets/icons/vander'

export default function FeatureOne(){
    return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="features-absolute bg-white shadow rounded overflow-hidden card-group">
                            <div className="card border-0 bg-light p-4">
                                <RiHeartPulseFill className="text-primary h2"/>
                                <h5 className="mt-1">Emergency Cases</h5>
                                <p className="text-muted mt-2">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                <Link to="/departments" className="text-primary">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>
                            
                            <div className="card border-0 p-4">
                                <RiDossierFill className="text-primary h2"/>
                                <h5 className="mt-1">Doctors Timetable</h5>
                                <p className="text-muted mt-2">This is required when, for example, the is not yet available. Dummy text is also known as 'fill text'.</p>
                                <Link to="/departments" className="text-primary">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>

                            <div className="card border-0 bg-light p-4">
                                <RiTimeFill className="text-primary h2"/>
                                <h5 className="mt-1">Opening Hours</h5>
                                <ul className="list-unstyled mt-2">
                                    <li className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Monday - Friday</p>
                                        <p className="text-primary mb-0">8.00 - 20.00</p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Saturday</p>
                                        <p className="text-primary mb-0">8.00 - 18.00</p>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <p className="text-muted mb-0">Sunday</p>
                                        <p className="text-primary mb-0">8.00 - 14.00</p>
                                    </li>
                                </ul>
                                <Link to="/departments" className="text-primary">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}