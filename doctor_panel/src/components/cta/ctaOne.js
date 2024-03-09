import React, { useState } from 'react';
import { Link } from "react-router-dom";
import bg1 from '../../assets/images/bg/01.jpg'

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

import CountUp from 'react-countup';

import { counterData } from '../../data/data';

export default function CtaOne(){
    const [isOpen, setOpen] = useState(false);
    return(
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="video-solution-cta position-relative" style={{zIndex:'1'}}>
                            <div className="position-relative">
                                <img src={bg1} className="img-fluid rounded-md shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)} className="play-btn lightbox video-play-icon">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white title-bg-dark shadow-lg"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 1, autoplay: 1 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>

                            <div className="content">
                                <div className="row" id="counter">
                                    {counterData.map((item, index) => {
                                        return(
                                            <div className="col-md-4 mt-4 pt-2" key={index}>
                                                <div className="counter-box text-center">
                                                    <h1 className="mt-3 text-white title-dark"><CountUp className="counter-value" start={0} end={item.target}/>{item.symbol}</h1>
                                                    <h5 className="counter-head text-white title-dark mb-1">{item.titleOne}</h5>
                                                    <p className="text-white-50 mb-0">{item.titleTwo}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>
    )
}