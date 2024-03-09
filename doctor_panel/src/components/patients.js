import React from "react";

import { patientsData } from "../data/data";

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

export default function Patients(){
    return(
        <div className="client-review-slider">
            <TinySlider settings={settings}>
                {patientsData.map((item, index) => (
                    <div className="tiny-slide text-center" key={index}>
                        <p className="text-muted fw-normal fst-italic">{item.desc}</p>
                        <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt=""/>
                        <ul className="list-unstyled mb-0">
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                            <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                        </ul>
                        <h6 className="text-primary">{item.name} <small className="text-muted">{item.title}</small></h6>
                    </div>
                ))}
            </TinySlider>
        </div>
    )
}