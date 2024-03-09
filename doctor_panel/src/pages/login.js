import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRouter } from '../hooks/use-router';

import bg1 from '../assets/images/bg/bg-lines-one.png'
import logoDark from '../assets/images/logo-dark.png'
import useAxios from '../network/useAxios';
import {FiHome,SlSocialGoogle } from '../assets/icons/vander'
import {FaSquareFacebook} from 'react-icons/fa6'
import { loginDoctor } from "../urls/urls";
import { updateToken } from "../redux/reducers/functionalities.reducer";
import { useDispatch } from "react-redux";

export default function Login(){
    const [formValues, setFormValues] = useState()
    const [authDetailsResponse, authDetailsError, authDetailsLoading, authDetailsFetch] = useAxios();
    const router = useRouter();
    const dispatch = useDispatch();

    const LoginFunction = () =>{
        if(formValues?.email && formValues?.password){
        authDetailsFetch(loginDoctor({
            email:formValues.email,
            password:formValues.password
        }))
    }
    }
    useEffect(()=>{
        if(authDetailsResponse?.result == "success"){
            localStorage.setItem('storedToken', authDetailsResponse?.token);
            dispatch(updateToken(authDetailsResponse?.token))
            router.push("/doctor-dashboard")
        }
    },[authDetailsResponse])
    return(
        <>
        <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        
        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <img src={logoDark} height="22" className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Sign In</h4>  
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Email" name="email" required=""
                                                onChange={(e)=>{
                                                    setFormValues((prev)=>({...prev, 'email':e.target.value}))
                                                }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" placeholder="Password" required=""
                                                                                                onChange={(e)=>{
                                                                                                    setFormValues((prev)=>({...prev, 'password':e.target.value}))
                                                                                                }}
                                                />
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
                                                <button className="btn btn-primary"
                                                onClick={()=>LoginFunction()}
                                                >Sign in</button>
                                            </div>
                                        </div>


                                        <div className="col-12 text-center">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Don't have an account ?</small> </p>
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