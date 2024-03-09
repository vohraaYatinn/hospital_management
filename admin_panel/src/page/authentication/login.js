import React from "react";
import { Link } from "react-router-dom";
import logoDark from '../../assets/images/logo-dark.png'

import bg1 from '../../assets/images/bg/bg-lines-one.png'

import { FiHome, AiFillFacebook, SlSocialGoogle } from '../../assets/icons/vander'

export default function Login(){
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/index" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <img src={logoDark} height="22" className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>  
                                <form className="login-form mt-4">
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
                                                        <input className="form-check-input align-middle" type="checkbox" value="" id="remember-check"/>
                                                        <label className="form-check-label" htmlFor="remember-check">Remember me</label>
                                                    </div>
                                                </div>
                                                <Link to="/forgot-password" className="text-dark h6 mb-0">Forgot password ?</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Sign in</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-3 text-center">
                                            <h6 className="text-muted">Or</h6>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link to="#" className="btn btn-soft-primary"><AiFillFacebook /> Facebook</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link to="#" className="btn btn-soft-primary"><SlSocialGoogle /> Google</Link>
                                            </div>
                                        </div>

                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> <Link to="/signup" className="text-dark fw-bold">Sign Up</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}