import React from "react";

import bg1 from '../../assets/images/cta.jpg'

import { ctaData } from "../../data/data";

export default function CtaTwo(){
    return(
        <section className="section" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-overlay-dark" style={{opacity:'0.3'}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-7 col-md-7 offset-md-5">
                        {ctaData.map((item, index) =>{
                            let Icon = item.icon
                            return(
                                <div className="features feature-bg-primary d-flex card flex-row p-4 rounded-md shadow position-relative overflow-hidden mt-4" key={index}>
                                    <Icon className="icons mb-0 text-primary display-2"/>
                                    <div className="ms-3">
                                        <h5 className="titles">{item.title}</h5>
                                        <p className="text-muted para mb-0">{item.desc}</p>
                                    </div>
                                    <div className="big-icon">
                                        <Icon/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}