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

  export default function ReviewOne({reviews}){
    return(
        <div className="client-review-slider">
            <TinySlider settings={settings}>
                {reviews.map((item,index) =>{
                    return(
                        <div className="tiny-slide" key={index}>
                            <p className="text-muted fst-italic">{item?.comment}</p>
                            
                            <div className="d-inline-flex align-items-center">
                                <img src={item?.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow my-3" alt=""/>
                                <div className="ms-3">
                                    <ul className="list-unstyled d-block mb-0">
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                    </ul>
                                    <h6 className="text-primary">{item?.patient?.full_name}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </TinySlider>
        </div>
    )
  }