import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import bg1 from '../assets/images/bg/05.jpg'
import logoLight from '../assets/images/logo-light.png'

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from '../assets/icons/vander'

export default function Maintenance(){
    const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <section className="position-relative" style={{backgroundImage:`Url(${bg1})`}}>
            <div className="bg-overlay bg-black" style={{opacity: '0.7'}}></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 px-md-5 py-5 px-4">
                            <div className="mt-md-5">
                                <Link to="/index"><img src={logoLight} height="24" alt=""/></Link>
                            </div>
                            <div className="title-heading my-auto">
                                <h4 className="maintenance display-5 text-white title-dark fw-bold mb-4">System is under maintenance</h4>
                                <p className="text-white-50 para-desc mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <span id="maintenance" className="timer h1 text-white title-dark">{ minutes }:{ remainingSeconds }</span><span className="d-block h6 text-uppercase text-white-50">Minutes</span>
            
                            </div>
                            <div className="mb-md-5">
                                <span className="text-white-50 h6">Follow Now</span>
                                <ul className="list-unstyled social-icon social mb-0 mt-2">
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link to="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}