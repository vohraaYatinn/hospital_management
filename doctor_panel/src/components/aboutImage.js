import React, { useState } from 'react';
import { Link } from "react-router-dom";
import about from '../assets/images/about/about-2.png'

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss'

export default function AboutImage({colClass}){
    const [isOpen, setOpen] = useState(false);
    return(
    <div className={colClass}>
        <div className="position-relative">
            <img src={about} className="img-fluid" alt=""/>
            <div className="play-icon">
                <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox video-play-icon">
                    <i className="mdi mdi-play text-primary rounded-circle shadow"></i>
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
    </div>
    )
}