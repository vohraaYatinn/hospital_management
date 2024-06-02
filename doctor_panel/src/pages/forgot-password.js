import React from "react";
import { Link } from "react-router-dom";
import bg1 from '../assets/images/bg/bg-lines-one.png'
import logoDark from '../assets/images/logo-dark.png'
import {FiHome } from '../assets/icons/vander'
import { forgotPasswordRequest } from "../urls/urls";
import useAxios from "../network/useAxios";
import { useState } from "react";
import { Alert } from 'antd';
import { useEffect } from "react";

export default function ForgotPassword(){
    const [
        recoverPassResponse,
        recoverPassError,
        recoverPassLoading,
        recoverPassFetch,
      ] = useAxios();
    const handleFunction = () => {
        recoverPassFetch(forgotPasswordRequest(formValues))
    }
    const [formValues, setFormValues] = useState({
        email:"",
        comment:""
    })
    const [message, setMessage] = useState({
        message: "",
        showMessage: "",
        type: "error"
    })
    useEffect(() => {
        if (recoverPassResponse?.result == "success") {
            setMessage({
                message: "Reset Password Request has been raised.",
                showMessage: true,
                type: "success"
            })
        }

    }, [recoverPassResponse])
    return(
        <>


        
        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <img src={logoDark} height="22" className="mx-auto d-block" alt=""
                        style={{
                            height: "3rem"
                    }}
                        />
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Recover Account</h4>  
                                    <div className="row">
                                    {message?.showMessage && <Alert
                                                style={{ marginTop: "1rem", marginBottom: "1rem" }}
                                                message={message?.message} type={message?.type}
                                                closable

                                                onClose={() => {
                                                    setMessage({
                                                        message: "",
                                                        showMessage: false
                                                    })
                                                }}
                                            />}
                                        <div className="col-lg-12">
                                            <p className="text-muted">Please enter your ID. Your hospital will share you a new password.</p>
                                            <div className="mb-3">
                                                <label className="form-label">UJUR ID<span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Enter Your UJUR ID" name="email" required=""
                                                 onChange={(e)=>{
                                                    setFormValues((prev)=>({...prev, 'email':e.target.value}))
                                                }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary"
                                                onClick={handleFunction}
                                                >Request</button>
                                            </div>
                                        </div>
                                        <div className="mx-auto">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Remember your password ?</small> <Link to="/login" className="text-dark h6 mb-0">Sign in</Link></p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}