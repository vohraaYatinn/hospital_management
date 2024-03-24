import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/bg-lines-one.png"
import { FiThumbsUp, FiHome } from '../assets/icons/vander'

export default function ThankYou(){
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/index" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="text-center">
                            <div className="features feature-primary text-center">
                                <div className="icon text-center rounded-circle mx-auto" style={{height: "90px", width:"90px"}}>
                                    <FiThumbsUp className="uil uil-thumbs-up h1 mb-0"/>
                                </div>
                            </div>
                            <h1 className="my-4 font-weight-bold">Thank You</h1>
                            <p className="text-muted para-desc mx-auto">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                            <Link to="/index" className="btn btn-soft-primary mt-3">Go To Home</Link>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}