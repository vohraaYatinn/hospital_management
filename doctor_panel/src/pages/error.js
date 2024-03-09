import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/images/bg/bg-lines-one.png'
import error from '../assets/images/svg/error.svg'

import {FiHome} from '../assets/icons/vander'

export default function Error(){
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${image})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <img src={error} className="img-fluid" alt=""/>
                        <h3 className="mb-4">Page Not Found</h3>
                        <p className="text-muted para-desc mx-auto">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        <Link to="/" className="btn btn-primary mt-2">Go To Home</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}