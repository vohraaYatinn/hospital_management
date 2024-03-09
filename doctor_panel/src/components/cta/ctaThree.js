import React from "react";
import { patientsData } from "../../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
    container: '.client-review-slider',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
  };

export default function CtaThree(){
    return(
        <div className="container">
            <div className="row">
                <div className="offset-lg-8 offset-md-6 col-lg-4 col-md-6">
                    <div className="cta-review bg-primary shadow-md mb-lg-4 rounded p-4 py-5">
                        <div className="client-review-slider">
                            <TinySlider settings={settings}>
                                {patientsData.map((item, index) =>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <p className="text-white-50 fst-italic">{item.desc}</p>
                                            
                                            <div className="d-inline-flex align-items-center">
                                                <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                                <h6 className="text-light title-dark fw-normal ms-3">{item.name} <small className="text-white-50 d-block">{item.title}</small></h6>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}